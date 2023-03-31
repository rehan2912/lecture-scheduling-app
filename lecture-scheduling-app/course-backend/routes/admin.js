import express from "express";
import { addCourse, addLecture, getAllCourse, getAllInstructor, getAllLecturesByCourse, getInstructorName, registerAdmin } from "../controllers/admin.js";
const router = express.Router();

router.post("/register", registerAdmin)
router.post("/addCourse", addCourse)
router.patch("/addLecture", addLecture)
router.get("/courses", getAllCourse)
router.get("/instructors", getAllInstructor)
router.get("/lectures/:courseId", getAllLecturesByCourse)
router.get("/instructor/:id", getInstructorName)

export default router;