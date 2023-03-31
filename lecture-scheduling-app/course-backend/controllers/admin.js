import Admin from "../models/Admin/Admin.js";
import Course from "../models/Course/Course.js";
import Instructor from "../models/Instructor/Instructor.js";
import User from "../models/User/User.js";

function generateRandomHexString(length) {
    let hexString = '';
    const hexChars = '0123456789abcdef';
    for (let i = 0; i < length; i++) {
        const randomDecimal = Math.floor(Math.random() * 16);
        const randomHexChar = hexChars.charAt(randomDecimal);
        hexString += randomHexChar;
    }
    return hexString;
}

async function instructorscheduled(instructor_id, date, lecture_id) {
    const instructor = await Instructor.findById(instructor_id)
    const lectures = instructor.lecture_details.some(item => item.date == date)
    if (lectures) {
        return true
    }
    else {
        const new_lecture = {
            lecture_id: lecture_id,
            date: date
        }
        const updateInstructor = await Instructor.findByIdAndUpdate(
            instructor_id,
            {
                lecture_details: [...instructor.lecture_details, new_lecture]
            },
            { new: true }
        )
        const savedInstructor = await updateInstructor.save();
        return false
    }
}

export const registerAdmin = async (req, res) => {
    try {
        const {
            username,
            email,
            password
        } = req.body
        const admin = new Admin({ username, email, password })
        const savedAdmin = await admin.save();
        res.status(201).json(savedAdmin);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const login = async (req, res) => {
    try {
        let user
        const { email, password, type } = req.body;
        console.log(email, password, type)
        if (type == "admin") {
            user = await Admin.findOne({ email: email });
        }
        if (type == "instructor") {
            user = await Instructor.findOne({ email: email });
        }

        if (user.password === password) {
            const resData = {
                userId: user.id,
                username: user.username,
                email: user.email,
            }
            return res.status(200).json(resData);
        } else {
            return res.status(403).json("Invalid Credentials");
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const addCourse = async (req, res) => {
    try {
        const {
            userId,
            name,
            level,
            description,
            image,
            lectures
        } = req.body
        const admin = await Admin.findById(userId)
        console.log(admin)
        if (admin) {
            const course = new Course({
                name,
                level,
                description,
                image,
                lectures
            })
            const savedCourse = await course.save();
            res.status(201).json(savedCourse);
        }
        else {
            res.status(403).json({ message: "Access Denied" });
        }

    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const addLecture = async (req, res) => {
    try {
        const {
            courseId,
            name,
            instructor_id,
            date
        } = req.body
        const newLecture = {
            lecture_id: generateRandomHexString(20),
            courseId,
            name,
            instructor_id,
            date
        }
        let user_date_check = await instructorscheduled(instructor_id, date, newLecture.lecture_id)
        if (user_date_check) {
            res.status(400).json({ message: "Instructor already scheduled for the day" })
        }
        else {
            const course = await Course.findById(courseId);
            if (course) {
                const updateCourse = await Course.findByIdAndUpdate(
                    courseId,
                    {
                        lectures: [...course.lectures, newLecture]
                    },
                    { new: true }
                )
                const savedCourse = await updateCourse.save();
                res.status(201).json(savedCourse);
            }
            else {
                res.status(400).json({ message: "Bad Request" });
            }
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getAllCourse = async (req, res) => {
    try {
        const course = await Course.find()
        res.status(200).json(course)
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getAllInstructor = async (req, res) => {
    try {
        const instructor = await Instructor.find()
        res.status(200).json(instructor)
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getAllLecturesByCourse = async (req, res) => {
    try {
        const { courseId } = req.params
        const course = await Course.findById(courseId)
        const lectures = course.lectures
        res.status(200).json(lectures)
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getInstructorName = async (req,res) =>{
    try{
        const {id} = req.params
        const user = await Instructor.findById(id)
        res.status(200).json(user.username)
    }
    catch(error){
        res.status(500).json({ error: error.message });
    }
}