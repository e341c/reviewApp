import mongoose from "mongoose";

const { Schema } = mongoose;

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    key: {
        type: Number,
        required: true,
    },
});

export default mongoose.models.Category || mongoose.model("Category", categorySchema);
