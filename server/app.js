import express from "express";
import mongoose from "mongoose";
import Router from "./src/routers";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();

mongoose.connect('mongodb://localhost:27017/odev-kontrol', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use("/", Router);

app.get("/", (req, res) => {
    res.json({ message: "test" });
});

app.listen(8080, () => {
    console.log("Started *8080");
})
