import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Review from "@/models/Review";
import User from "@/models/User";
import Category from "@/models/Category";
import Tags from "@/models/Tags";
import { v4 as uuid } from "uuid";
import {uploadImageToS3} from "@/utils/s3"

export const revalidate = 1

export const POST = async (req) => {
    const formData = await req.formData();

    try {
        await connect();
        await User.find();
        await Category.find();
        await Tags.find();

        const file = formData.get("file");
        const titleReview = formData.get("titleReview");
        const titleItem = formData.get("titleItem");
        const category = formData.get("category");
        const tags = formData.getAll("tags");
        const desc = formData.get("desc");
        const likes = formData.get("likes");
        const author = formData.get("author");
        const rating = formData.get("rating");
        const reviewRating = formData.get("reviewRating");

        if (!file) {
            return new NextResponse("File blob is required", { status: 400 });
        }

        const mimeType = file.type;
        const fileExtension = mimeType.split("/")[1];

        const buffer = Buffer.from(await file.arrayBuffer());
        const fileName = uuid() + "." + fileExtension;
        const url = await uploadImageToS3(buffer, fileName, mimeType);

        const cloudFront = "https://d2ykbx43rxyrs3.cloudfront.net/" + fileName;

        const newReview = new Review({
            titleReview,
            titleItem,
            category,
            tags,
            img: cloudFront,
            desc,
            likes,
            rating,
            reviewRating,
            author,
        });

        await newReview.save();

        return new NextResponse("Review created", { status: 201 });
    } catch (error) {
        return new NextResponse(error, { status: 500 });
    }
};
