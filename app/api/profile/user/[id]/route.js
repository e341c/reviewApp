import { NextResponse } from "next/server"
import connect from "@/utils/db"
import User from "@/models/User"
import Review from "@/models/Review"

export const revalidate = 10
export const GET = async(req, {params}) => {
    const {id} = params

    try {
        await connect()
        const user = await User.findById(id)
        const count = await Review.find({author : user._id}).count()

        return new NextResponse(JSON.stringify(user), {status: 200})
    } catch (error) {
        return new NextResponse(error, {status: 500})
    }
}