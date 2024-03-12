import { Product } from "@/lib/models";
import { connectToDb } from "@/lib/connectToDb";
import { NextResponse } from "next/server";

// export const GET = async (request: any, { params }: any ) => {
// const { slug } = params;
//   try {
//     connectToDb();
    
//     const post = await Product.findOne({ slug });
//     return NextResponse.json(post);
//   } catch (err) {
//     console.log(err);
//     throw new Error("Failed to fetch posts!");
//   }
// };