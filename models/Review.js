import mongoose from "mongoose";

const {Schema} = mongoose

const reviewSchema = new Schema(
    {
        titleReview:{
            type: String,
            required: true,
        },
        titleItem:{
            type: String,
            required: true,
        },
        category:{
            type: Schema.Types.ObjectId, ref: 'Category',
            required: true,
        },
        tags:{
            type: Array,
            required: true,
        },
        desc:{
            type: String,
            required: true,
        },
        rating:{
            type: Number,
            required: true,
        },
        img:{
            type: String,
            required: true,
        },
        author:{
            type: Schema.Types.ObjectId, ref: 'User',
            required: true,
        },
        likes:{
            type: Number,
            required: true,
        }
    },
    { timestamps: true }
)

export default mongoose.models.Review || mongoose.model("Review", reviewSchema);