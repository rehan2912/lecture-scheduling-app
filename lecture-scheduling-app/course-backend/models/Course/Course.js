import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        level: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image:{
            type:String,
            required: true,
        },
        lectures: {
            type: Array,
            default: [{
                lecture_id: { type: String, required: true },
                instructor_id:{type: String},
                date: { type: String, required: true },
            }]
        }
    },
    { timestamps: true }
);

const Course = mongoose.model("Course", CourseSchema);
export default Course;