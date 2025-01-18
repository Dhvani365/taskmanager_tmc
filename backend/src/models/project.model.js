import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
    {
        projectName: {
            type: String,
            required: true,
        },
        projectLead: {
            type: String,
            required: true,
            minlenght: 6
        }
    },
    {timestamps: true} 
);

const Project = mongoose.model("project", projectSchema);

export default Project;