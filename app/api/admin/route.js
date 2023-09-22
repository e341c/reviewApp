import { NextResponse } from "next/server"
import connect from "@/utils/db"
import User from "@/models/User"

export const revalidate = 10
export const GET = async(req) => {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search");
    try {
        await connect()
        await User.find()

        const options = {}
        if(search){
            options.$or = [
                {
                    name: new RegExp(search, "i"),
                },
                {
                    email: new RegExp(search, "i"),
                }
            ]
        }

        const user = await User.find(options)

        return new NextResponse(JSON.stringify(user), {status: 200})
    } catch (error) {
        return new NextResponse(error, {status: 500})
    }
}