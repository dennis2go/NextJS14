import { Product } from "@/lib/models";
import { connectToDb } from "@/lib/connectToDb";
import { NextResponse } from "next/server";

export const GET = async (request: any) => {
  try {
    connectToDb();

    const posts = await Product.find();
    return NextResponse.json(posts);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};