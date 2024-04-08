import Product from "@/lib/models/Products";
import { connectToDB } from "@/lib/mongoDB";
import { auth } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    await connectToDB();

    const {
      title,
      description,
      media,
      category,
      collections,
      tag,
      sizes,
      colors,
      price,
      expense,
    } = await req.json();

    if (!title || !description || !media || !category || !price || !expense) {
      return new NextResponse("Not enough data to create product", {
        status: 400,
      });
    }

    const newProduct = await Product.create({
      title,
      description,
      media,
      collections,
      category,
      tag,
      sizes,
      colors,
      price,
      expense,
    });

    await newProduct.save();

    return new NextResponse(newProduct, { status: 201 });
  } catch (error) {
    console.log("Product_POST", error);
  }
};

export const GET = async () => {
  try {
    await connectToDB();
  } catch (error) {
    console.log("Product_ID: ", error);
  }
};
