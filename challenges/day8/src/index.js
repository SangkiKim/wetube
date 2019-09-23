import express from "express";
import path from "path";
import { localsMiddleWare } from "./middlewares";
import routes from "./routes";
import globalRouter from "./routers/globalRouters";

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Add your magic here!
app.use(localsMiddleWare);
app.use(routes.home, globalRouter);
// Codesanbox does not need PORT :)
app.listen(4001,() => console.log(`Listening!`));
