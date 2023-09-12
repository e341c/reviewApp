import mongoose from "mongoose";

const { Schema } = mongoose;

const tagsSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    key: {
        type: Number,
        required: true,
    },
});

export default mongoose.models.Tags || mongoose.model("Tags", tagsSchema);