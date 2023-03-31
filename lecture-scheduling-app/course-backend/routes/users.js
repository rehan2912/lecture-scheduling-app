import express from "express";
import { getAllUsers, getUserById, registerUser, updatePassword } from "../controllers/user.js";

const router = express.Router();

router.post("/register", registerUser);
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.patch("/:id", updatePassword);

export default router;