import { NextResponse } from "next/server"
import connect from "@/utils/db"
import Review from "@/models/Review"
import Category from "@/models/Category"
import User from "@/models/User"
import Tags from "@/models/Tags"

export const revalidate = 10
export const GET = async(req, {params}) => {
    const {id} = params
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search");

    try {
        await connect()
        await User.find()
        await Category.find()
        await Tags.find()

        const options = { author:id }

        if (search?.length > 1) {
            const category = await Category.findOne({ name: new RegExp(search, "i") });

            const categoryOption = category?._id.toString()

            options.$or = [
                {
                    titleReview: new RegExp(search, "i"),
                },
                {
                    titleItem: new RegExp(search, "i"),
                },
                {
                    desc: new RegExp(search, "i"),
                },
                {
                    category: categoryOption
                },
            ];
        }

        const user = await User.findById(id)
        const review = await Review.find(options).populate('author').populate('category')

        const data = [user, review]

        return new NextResponse(JSON.stringify(data), {status: 200})
    } catch (error) {
        return new NextResponse(error, {status: 500})
    }
}