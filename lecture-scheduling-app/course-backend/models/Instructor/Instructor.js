import mongoose from "mongoose";

const InstructorSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            default: "instructor"
        },
        lecture_details: {
            type: Array,
            default: [{
                lecture_id: { type: String, required: true },
                date: { type: String, required: true },
            }]
        }
    },
    { timestamps: true }
);

const Instructor = mongoose.model("Instructor", InstructorSchema);
export default Instructor;