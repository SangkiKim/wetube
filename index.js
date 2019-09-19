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

//application 생성
const app = express();

const PORT = 4000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);


//req = request object , res = response object
const handleHome = (req,res) => res.send("Hello frome school");


//웹사이트처럼 움직이고 싶으면 완전한 html,css파일을 send해줘야 한다.
//arrow funciton
const handleProfile = (req,res) => res.send("You are on my profile");
  
//유저와 마지막 응답사이에 중간에 어떤것이 있다 -> middleware 
//구글 크롬으로부터 온 요청을 계속 처리해서 다음으로 넘길것인가 -> next    
// const betweenHome = (req,res,next) => {
//     console.log("Between");
//     next(); 
// }

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
//보안용
app.use(helmet());

//이 웹사이트에서 일어나는 모든일에 관하여 betweenHome미들웨어를 사용
//순서가 정말 중요!
app.use(morgan("dev"));


app.get("/",handleHome);

app.get("/profile", handleProfile);

//server listen on the 4000 port
//서버는 존재하는 상태
app.listen(PORT,handleListening);

