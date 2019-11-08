import express from "express";
import { search } from "./controller";
const router = express.Router();

router.get("/", search);

export default router;
