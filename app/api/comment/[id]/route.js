import { NextResponse } from "next/server"
import connect from "@/utils/db"
import User from "@/models/User"
import Comment from "@/models/Comment"

export const revalidate = 10
export const GET = async(req,{params}) => {
    const {id} = params

    try {
        await connect()
        await User.find()
        const comments = await Comment.find({reviewId:id}).populate("authorId")

        return new NextResponse(JSON.stringify(comments), {status: 200})
    } catch (error) {
        return new NextResponse(error, {status: 500})
    }
}

export const POST = async(req, {params}) => {
    const {id} = params
    const body = await req.json()

    const newComment = new Comment(body)

    try {
        await connect()

        await newComment.save()

        return new NextResponse("Comment created", {status: 200})
    } catch (error) {
        return new NextResponse(error, {status: 500})
    }
}