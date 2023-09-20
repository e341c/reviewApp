import { NextResponse } from "next/server"
import connect from "@/utils/db"
import Review from "@/models/Review"
import {deleteImageFromS3} from "@/utils/s3";

export const revalidate = 1

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