import { NextResponse } from "next/server"
import connect from "@/utils/db"
import Comment from "@/models/Comment";

export const revalidate = 10

export const DELETE = async(req, {params}) => {
    const {id} = params
    try {
        await connect()

        await Comment.deleteOne({_id : id})

        return new NextResponse("Comment deleted", {status: 200})
    } catch (error) {
        return new NextResponse(error, {status: 500})
    }
}