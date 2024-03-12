"use server";
import { connectToDb } from "./connectToDb";
import {Product} from "./models"
import { revalidatePath } from "next/cache";

export const fillProducts = async () => { 
    const brand = ["Gucci", "Fendi","Louis Vuitton","Prada","Stone Island","Raf Simons","Nike","Represent","Systemic","Trendt Vision","Gosha Rubchinski","ALexander Wang","Chanel","Dior","Lacoste","Adidas"];
    const description = ["high Quality Sweater", "washed out Denim", "ripped Denim", "bleachedout Cargopants","Track-pants","Jankie with no Brim","Zip overhead Hoodie","baggy Parachute Pants"];
    const gender = ["Female", "Male"];
    try {
        connectToDb();
        for(let i = 0; i<46; i++) {
            const newPost = new Product({
                brand: brand[Math.floor(Math.random() * 16)],
                description: description[Math.floor(Math.random() * 8)],
                gender: gender[Math.floor(Math.random() * 2)],
                price: Math.floor(Math.random() * (4000 - 300 + 1)) + 300,
                firstImg: "",
                secondImg:""
            });
            await newPost.save();
        }
    } catch (err) {
      console.log(err);
      return { error: "Something went wrong!" };
    }
};


export const addProduct = async (formData: any) => { 
    const { brand, description, gender, price } = Object.fromEntries(formData);
    console.log(brand + description + gender + price);
    try {
        connectToDb();
            const newPost = new Product({
                brand: brand,
                description: description,
                gender: "hallo",
                price: price,
                firstImg: "",
                secondImg:""
            });
            await newPost.save();
            revalidatePath("/products");
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
};

export const deleteProduct = async (id :number) => {  
    try {
        connectToDb();
        await Product.findByIdAndDelete(id);
        console.log("deleted from db");
        revalidatePath("/blog");
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
};

export const deleteAllProduct = async () => {  
    try {
        connectToDb();
        await Product.deleteMany({});
        revalidatePath("/blog");
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
};