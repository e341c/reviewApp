import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Review from "@/models/Review";
import User from "@/models/User";
import Category from "@/models/Category";
import Tags from "@/models/Tags";

export const POST = async (req) => {
    const body = await req.json()

    const newReview = new Review(body);

    console.log(body);

    try {
        await connect();
        await User.find()
        await Category.find()
        await Tags.find()

        await newReview.save();

        return new NextResponse(body, { status: 201 });
    } catch (error) {
        return new NextResponse(error, { status: 500 });
    }
};