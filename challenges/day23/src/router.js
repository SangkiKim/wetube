import express from "express";
import { home, readText, uploadText } from "./controller";
const Router = express.Router();
Router.get("/",home);
Router.post("/read",uploadText, readText);
export default Router;

