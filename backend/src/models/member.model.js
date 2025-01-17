import mongoose from "mongoose";

const memberSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        taskId: {
            type: String,
            required: true,
        },
        projectId: {
            type: String,
            required: true,
        },
        priority: {
            type: Number,
            required: true,
        },
    },
    {timestamps: true} 
);

const Member = mongoose.model("member", memberSchema);

export default Member;