import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Review from "@/models/Review";
import User from "@/models/User";
import Category from "@/models/Category";
import Tags from "@/models/Tags";
import { v4 as uuid } from "uuid";
import {deleteImageFromS3} from "@/utils/s3";
import {uploadImageToS3} from "@/utils/s3"

export const revalidate = 10;

export const POST = async (req, {params}) => {
    const {id} = params
    const formData = await req.formData();

    try {
        await connect();
        await User.find();
        await Category.find();
        await Tags.find();

        const review = await Review.findById(id)

        const file = formData.get("file");
        const titleReview = formData.get("titleReview");
        const titleItem = formData.get("titleItem");
        const category = formData.get("category");
        const tags = formData.getAll("tags");
        const desc = formData.get("desc");
        const rating = formData.get("rating");

        const editReview = {
            titleReview,
            titleItem,
            category,
            tags,
            desc,
            rating,
        }

        if (file === "null") {
            await Review.findOneAndUpdate(review, editReview)
            return new NextResponse("Review updated, without image", { status: 201 });
        }else{
            const reviewImg = (review.img).replace('https://d2ykbx43rxyrs3.cloudfront.net/', '')
            deleteImageFromS3(reviewImg)
            const mimeType = file.type;
            const fileExtension = mimeType.split("/")[1];

            const buffer = Buffer.from(await file.arrayBuffer());
            const fileName = uuid() + "." + fileExtension;
            const url = await uploadImageToS3(buffer, fileName, mimeType);

            const cloudFront = "https://d2ykbx43rxyrs3.cloudfront.net/" + fileName;

            await Review.findOneAndUpdate(review, {img: cloudFront})
        }

        await Review.findOneAndUpdate(review, editReview)

        return new NextResponse("Review updated with image", { status: 201 });
    } catch (error) {
        return new NextResponse(error, { status: 500 });
    }
};
