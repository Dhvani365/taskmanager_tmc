import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
    {
        senderId: {
            type: String,
            required: true,
        },
        receiverId: {
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
        message: {
            type: String,
            required: true,
        },
    },
    {timestamps: true} 
);

const Message = mongoose.model("message", messageSchema);

export default Message;