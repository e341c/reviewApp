import { NextResponse } from "next/server"
import connect from "@/utils/db"
import User from "@/models/User"
import Review from "@/models/Review"
import Comment from "@/models/Comment"

export const POST = async(req, {params}) => {
    const {id} = params
    const body = await req.json()

    const comment = await Comment.findById(id)

    try {
        await connect()
        await Review.find()
        await User.find()

        await Comment.findOneAndUpdate(comment, body)

        return new NextResponse("Comment updated", {status: 200})
    } catch (error) {
        return new NextResponse(error, {status: 500})
    }
}