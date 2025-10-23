import express from "express";
import {nanoid} from "nanoid";
import dotenv from "dotenv";
import connectDB from "./src/config/mongodb.config.js";
import shortUrl from "./src/routes/shortUrl.routes.js"
import { redirectFromShortUrl } from "./src/controller/shortUrl.controller.js";
import { errorHandler } from "./src/utils/errorhandler.js";
import cors from "cors";
dotenv.config("./.env");




const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use("/api/create",shortUrl);

app.use("/:id",redirectFromShortUrl)

app.use(errorHandler)


app.listen(5000, () =>{
    connectDB();
    console.log('Server is running on http://localhost:5000');
})