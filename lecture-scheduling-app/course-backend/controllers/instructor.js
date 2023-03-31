import Course from "../models/Course/Course.js";
import Instructor from "../models/Instructor/Instructor.js";

export const registerInstructor = async (req, res) => {
    try {
        const {
            username,
            email,
            password,
            lecture_details
        } = req.body
        const instructor = new Instructor({ username, email, password, lecture_details })
        const savedInstructor = await instructor.save();
        res.status(201).json(savedInstructor);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getInstructorCourse = async (req, res) => {
    try {
        const { id } = req.params
        const courses = await Course.find({ 'lectures.instructor_id': id })
        // console.log(courses)
        // const result = courses.map(obj => ({ id: obj._id.toString() }));
        res.status(200).json(courses);
        console.log(courses)
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getCourseLecture = async (req, res) => {
    try {
        const {
            userId,
            courseId
        } = req.body
        const courses = await Course.find({ 'lectures.instructor_id': userId })
        const course = courses.filter(item=>item._id==courseId)
        const lecture_details = course.find((item)=>item.lectures)
        const lecturesOfInstructor = lecture_details.lectures.filter(lecture => lecture.instructor_id === userId);
        res.status(200).json(lecturesOfInstructor)
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}