import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Review from "@/models/Review";
import Category from "@/models/Category";
import User from "@/models/User";
import Tags from "@/models/Tags";
import Comment from "@/models/Comment";

export const revalidate = 10;
export const GET = async (req) => {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search");
    const category = searchParams.get("category");
    const tags = searchParams.get("tags")
    
    try {
        await connect();
        await User.find();
        await Category.find();
        await Tags.find();

        const options = {};

        if(tags){
            const tagsOptions = tags?.split(',')

            options.tags = {
                $all: tagsOptions
            }
        }

        if (category) {
            const findCategory = await Category.findOne({ name: new RegExp(category, "i") });

            const categoryId = findCategory?._id.toString();

            options.category = categoryId;
        }

        if (search) {
            const author = await User.find({ name: new RegExp(search, "i") });

            const authorOption = author?.map((item) => {
                return item._id.toString();
            });

            const comments = await Comment.find({comment : new RegExp(search, "i"),})

            const commentsId = comments.map(item => {
                return item.reviewId.toString()
            })

            options.$or = [
                {
                    author: authorOption,
                },
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
                    _id: commentsId
                }
            ];
        }

        const reviews = await Review.find(options).populate("author").populate("category");

        return new NextResponse(JSON.stringify(reviews), { status: 200 });
    } catch (error) {
        return new NextResponse(error, { status: 500 });
    }
};