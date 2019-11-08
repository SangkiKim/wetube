import multer from "multer";
import fs from "fs";

const multerText = multer({ dest : "uploads/texts/"});
export const uploadText = multerText.single("textFile");

export const home = (req,res) => {
    try { 
    res.render("home");
    } catch(error){
        console.log(error);
        res.render("home");
    }
};

export const readText = (req,res) => {
    try { 
      const {
        file : { path }
    } = req;
        console.log(path);
      fs.readFile(path, 'utf8', function (err, text) {
            res.render("read",{contents : text});
        });
    } catch(error){
        console.log(error);
        res.redirect("home");
    }
};
