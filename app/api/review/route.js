import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Review from "@/models/Review";
import Category from "@/models/Category";
import User from "@/models/User";
import Tags from "@/models/Tags";

export const revalidate = 1;
export const GET = async (req) => {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search");
    try {
        await connect();
        await User.find();
        await Category.find();
        await Tags.find();

        const options = {};
        if (search?.length > 1) {
            const category = await Category.findOne({ name: new RegExp(search, "i") });

            const categoryOption = category?._id.toString()

            const author = await User.find({ name: new RegExp(search, "i") });

            const authorOption = author?.map((item) => {
                return (item._id.toString())
            });

            options.$or = [
                {
                    titleReview: new RegExp(search, "i"),
                },
                {
                    titleItem: new RegExp(search, "i"),
                },
                {
                    desc: new RegExp(search, "i"),
                },
                {
                    category: categoryOption
                },
                {
                    author: authorOption,
                },
            ];
        }

        const reviews = await Review.find(options).populate("author").populate("category");

        return new NextResponse(JSON.stringify(reviews), { status: 200 });
    } catch (error) {
        return new NextResponse(error, { status: 500 });
    }
};
