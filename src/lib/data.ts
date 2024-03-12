import { Product, User } from "./models";
import { connectToDb } from "./connectToDb";
import { unstable_noStore as noStore } from "next/cache";

export const getProducts = async () => {
    noStore();
    try {
      connectToDb();
      const products = await Product.find();
      return products;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch products!");
    }
};

export const getUsers = async () => {
    try {
      connectToDb();
      const users = await User.find();
      return users;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch users!");
    }
};

export const getProduct = async (slug: any) => {
    try {
      connectToDb();
      const product = await Product.findById(slug);
      return product;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch product!");
    }
};
  
export const getUser = async (id:string) => {
    noStore();
    try {
      connectToDb();
      const user = await User.findById(id);
      return user;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch user!");
    }
};
  