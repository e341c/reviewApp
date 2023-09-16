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
    const data = [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Geology",
        "Astronomy",
        "Biology",
        "History"
    ]
    try {
        await connect()

        const lentgh = await Tags.count()
        if(lentgh === 0){
            data.map((item, index) => {
                new Tags({
                    name: item,
                    key: index
                }).save()
            })
        }

        console.log(lentgh);

        return new NextResponse("Tags added", {status:200})   
    } catch (error) {
        return new NextResponse(error, {status:500})   
    }
}