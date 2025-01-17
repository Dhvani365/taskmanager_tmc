import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
    {
        taskName: {
            type: String,
            required: true,
        },
        taskDescription: {
            type: String,
            required: true,
        },
        projectId: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
    },
    {timestamps: true} 
);

const Task = mongoose.model("task", taskSchema);

export default Task;