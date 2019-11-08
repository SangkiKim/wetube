import express from "express";
import request from "request";
import router from "./router";

const app = express();

app.use("/", router);

// Codesanbox does not need PORT :)
app.listen(4000,() => console.log(`Listening!`));
