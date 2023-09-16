import { NextResponse } from "next/server"
import connect from "@/utils/db"
import Review from "@/models/Review"
import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import s3Client from "@/app/lib/s3";

async function deleteImageFromS3(fileName) {
    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `${fileName}`,
    };
    const command = new DeleteObjectCommand(params);
    const res = await s3Client.send(command);
}

export const revalidate = 10

export const DELETE = async(req, {params}) => {
    try {
        const {id} = params
        await connect()

        const review = await Review.findById(id).populate('author').populate('category')
        const file = (review.img).replace('https://d2ykbx43rxyrs3.cloudfront.net/', '')
        deleteImageFromS3(file)
        await Review.deleteOne({_id : id})

        return new NextResponse("Review deleted", {status: 200})
    } catch (error) {
        return new NextResponse(error, {status: 500})
    }
}