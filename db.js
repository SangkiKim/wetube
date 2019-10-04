import mongoose from "mongoose";
//db어드레스를 공개하기 싫을때, .env에 정보를 넣고(env는 key정보를 숨길때 사용한다)
//dotenv.config라는 함수를 사용하면 .env에 들어있는 모든 정보를 참조 가능
//process.env로 variable정보를 가져온다
import dotenv from "dotenv";
dotenv.config();

//Where is db (mongod를 치면 정보가 나온다)
mongoose.connect(
    process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useFindAndModify: false
    }
);

const db = mongoose.connection;

const handleOpen = () => console.log("Connected to DB")
const handleError = (error) => console.log(`Error on DB connection ${error}`);
//open connection
db.once("open",handleOpen);
db.on("error",handleError);
