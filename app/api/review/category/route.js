import { NextResponse } from "next/server"
import connect from "@/utils/db"
import Category from "@/models/Category"

export const GET = async(req) => {
    try {
        await connect()
        
        const category = await Category.find()

        return new NextResponse(JSON.stringify(category), {status: 201})
    } catch (error) {
        return new NextResponse(error, {status:500})   
    }
}

export const POST = async(req) => {
    const data = [
        "Movies",
        "Books",
        "Games",
        "Series"
    ]
    try {
        await connect()

        const lentgh = await Category.count()
        if(lentgh === 0){
            data.map((item, index) => {
                new Category({
                    name: item,
                    key: index
                }).save()
            })
        }

        console.log(lentgh);

        return new NextResponse("Categories added", {status:200})   
    } catch (error) {
        return new NextResponse(error, {status:500})   
    }
}