const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const userAuth = require("./routes/auth");
const postRoute = require("./routes/post");


dotenv.config();

const url = 'mongodb+srv://socialApi:Ajay%408989@socialapi.tgchwhy.mongodb.net/socialApi?retryWrites=true&w=majority';

mongoose.connect(url).then(()=>{
    console.log("MongoDb Connected");
}).catch(()=>{
    console.log("Failed");
});

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


app.use("/api/users", userRoute);
app.use("/api/auth", userAuth);
app.use("/api/posts", postRoute);
app.listen("3000",()=>{
    console.log("success");
});