import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Review from "@/models/Review";

export const POST = async (req, { params }) => {
    const { id } = params;
    const user = await req.json();
   
    try {
        await connect();

        const res = await Review.findOneAndUpdate({_id: id}, [
            {
                $set: {
                    likes: {
                        $cond: [{ $in: [user.userId, "$likes"] }, { $setDifference: ["$likes", [user.userId]] }, { $concatArrays: ["$likes", [user.userId]] }],
                    },
                },
            },
        ]);

        return new NextResponse("Like", { status: 200 });
    } catch (error) {
        return new NextResponse(error, { status: 500 });
    }
};
