import express from "express";
import path from "path";
import "./db";
import movieRouter from "./movieRouter";
import { localsMiddleWare } from "./middlewares";

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(localsMiddleWare);
app.use("/", movieRouter);

// Codesanbox does not need PORT :)
app.listen(4000,() => console.log(`✅  Server Ready!`));
