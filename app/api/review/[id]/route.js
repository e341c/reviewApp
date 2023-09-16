import { NextResponse } from "next/server"
import connect from "@/utils/db"
import Review from "@/models/Review"
import Category from "@/models/Category"
import User from "@/models/User"
import Tags from "@/models/Tags"

export const revalidate = 10
export const GET = async(req, {params}) => {
    const {id} = params
    console.log(id);

    try {
        await connect()
        await User.find()
        await Category.find()
        await Tags.find()

        const reviews = await Review.findById(id).populate('author').populate('category')

        return new NextResponse(JSON.stringify(reviews), {status: 200})
    } catch (error) {
        return new NextResponse(error, {status: 500})
    }
}