import express from "express";
const router = express.Router();

import { CourseUser } from "../controllers/user.js";

router.post("/course", CourseUser);

export default router;