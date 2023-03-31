import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import userRoutes from "./routes/users.js"
import adminRoutes from "./routes/admin.js"
import instructorRoutes from "./routes/instructor.js"
import mongoose from "mongoose";
import { login } from "./controllers/admin.js";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// app.use("/", (req, res) => {
//     res.status(200).json({ msg: "Backend is Working" })
// })

app.use("/users", userRoutes);
app.use("/admin", adminRoutes);
app.use("/instructor", instructorRoutes);
app.post("/login", login)
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));