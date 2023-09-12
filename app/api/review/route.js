import { NextResponse } from "next/server"
import connect from "@/utils/db"
import Review from "@/models/Review"

export const GET = async(req) => {
    try {
        await connect()
        
        const reviews = await Review.find().populate('author').populate('category')

        return new NextResponse(JSON.stringify(reviews), {status:200})   
    } catch (error) {
        return new NextResponse(error, {status:500})   
    }
}