import express from "express";
import { getCourseLecture, getInstructorCourse, registerInstructor } from "../controllers/instructor.js";
const router = express.Router();

router.post("/register", registerInstructor)
router.get("/courses/:id", getInstructorCourse)
router.post("/lectures", getCourseLecture)

export default router;