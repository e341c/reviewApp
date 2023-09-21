import { NextResponse } from "next/server"
import connect from "@/utils/db"
import User from "@/models/User"

export const revalidate = 10
export const GET = async(req) => {
    try {
        await connect()
        await User.find()

        const user = await User.find()

        return new NextResponse(JSON.stringify(user), {status: 200})
    } catch (error) {
        return new NextResponse(error, {status: 500})
    }
}