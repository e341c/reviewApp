import { NextResponse } from "next/server"
import connect from "@/utils/db"
import Tags from "@/models/Tags"

export const revalidate = 10
export const GET = async(req) => {
    try {
        await connect()
        
        const tags = await Tags.find()

        return new NextResponse(JSON.stringify(tags), {status: 200})
    } catch (error) {
        return new NextResponse(error, {status:500})   
    }
}

export const POST = async(req) => {
    const body = await req.json()
    try {
        await connect()
        body.map(async (item) => {
            const tag = await Tags.find({name : item.name})
            if(tag[0]?.name != item.name){
                new Tags({name : item.name}).save()
            }
        })

        return new NextResponse("Tags added", {status:200})   
    } catch (error) {
        return new NextResponse(error, {status:500})   
    }
}