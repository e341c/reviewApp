import { NextResponse } from "next/server"
import connect from "@/utils/db"
import Review from "@/models/Review"

export const revalidate = 10
export const GET = async(req) => {
    // try {
    //     await connect()

    //     const review = await Review.findById(id)

    //     return new NextResponse(JSON.stringify(review), {status: 200})
    // } catch (error) {
    //     return new NextResponse(error, {status: 500})
    // }
    return new NextResponse("Ok", {status: 500})
}