import mongoose from "mongoose";

const {Schema} = mongoose

const commentSchema = new Schema(
    {
        comment:{
            type: String,
            required: true,
        },
        reviewId:{
            type: Schema.Types.ObjectId, ref: 'Review',
            required: true,
        },
        authorId:{
            type: Schema.Types.ObjectId, ref: 'User',
            required: true,
        },
    },
    { timestamps: true }
)

export default mongoose.models.Comment || mongoose.model("Comment", commentSchema);