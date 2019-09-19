import express from "express";
const PORT = 4000;
const app = express();

const handleHome = (req, res) => res.send("Home");

const handleAbout = (req, res) => res.send("About Us");

const handleContact = (req, res) => res.send("Contact");

const redirectHome = (req, res) => res.redirect("/");

const firstMiddle = (req, res, next) => {
  console.log("I'm a middleware");
  next();
};

const secondMiddle = (req, res, next) => {
  app.get("/protected", redirectHome);
  next();
};

app.use(firstMiddle);
app.use(secondMiddle);
app.get("/", handleHome);
app.get("/about-us", handleAbout);
app.get("/contact", handleContact);

// Codesanbox does not need PORT :)
//app.listen(() => console.log(`Listening!`));
app.listen(PORT,console.log(`Listening!`));