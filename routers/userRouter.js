//M data
//V how does the data look
//C function that looks for the data
import express from "express";
import routes from "../routes";
import { users,userDetail, editProfile, changePassword } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.editProfile,editProfile);
userRouter.get(routes.changePassword,changePassword);
userRouter.get(routes.userDetail(),userDetail);


export default userRouter;