import express from "express";
import { createEvent, getEvents } from "../Event/event.controller";
import uploadMiddleware from "../middleware/uploadFile";
const router = express.Router();
router.route("/").post(uploadMiddleware, createEvent);
router.route("/getAll").get(getEvents);

export default router;
