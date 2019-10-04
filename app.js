//require - node module을 가져오는것
//babel을 이용해 코드를 이쁘게 변경
//const express = require('express');
import express from "express";

//logger
import morgan from "morgan";

//사이트를 안전하게 만들어준다
import helmet from "helmet";

import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

//default로 export하는 경우에는 import app from "./app";
//default로 export하지않는 경우에는 import {userRouter} 
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
import { localsMiddleWare } from "./middlewares";

//application 생성
const app = express();


//req = request object , res = response object
//const handleHome = (req,res) => res.send("Hello frome school");


//웹사이트처럼 움직이고 싶으면 완전한 html,css파일을 send해줘야 한다.
//arrow funciton
//const handleProfile = (req,res) => res.send("You are on my profile");
  
//유저와 마지막 응답사이에 중간에 어떤것이 있다 -> middleware 
//구글 크롬으로부터 온 요청을 계속 처리해서 다음으로 넘길것인가 -> next    
// const betweenHome = (req,res,next) => {
//     console.log("Between");
//     next(); 
// }
 
//보안용
app.use(helmet()); 

//View engine을 pug로 설정
app.set("view engine","pug");
//누군가가 uploads로 간다면 directory에서 파일을 보내주는 middleware를 사용
app.use("/uploads",express.static("uploads"));

//use -> Middlewares
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));


//이 웹사이트에서 일어나는 모든일에 관하여 betweenHome미들웨어를 사용
//순서가 정말 중요!
app.use(morgan("dev"));

app.use(localsMiddleWare);

//use -> 누군가가 ""에 접속하면 xxRouter를 전부 사용하겠다는 의미
app.use(routes.home,globalRouter);
app.use(routes.users,userRouter);
app.use(routes.videos,videoRouter);

//somebody import app, give app object
export default app;
