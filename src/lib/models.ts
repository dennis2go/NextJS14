import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
      username: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20,
      },
      email: {
        type: String,
        unique: true,
        required: true,
      },
      password: {
        type: String,
      },
      isAdmin: {
        type: Boolean,
        default: false,
      },
    },
    { timestamps: true }
);

const productSchema = new mongoose.Schema(
    {
      brand: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      gender: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      firstImg: {
        type: String,
      },
      secondImg: {
        type: String,
      },
    },
    { timestamps: true }
);

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
export const Product = mongoose.models?.Product || mongoose.model("Product", productSchema);