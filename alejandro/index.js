//const express = require("express");
import express from "express";
import { loadBackend } from "./src/back";
//Como vamos a utilizar nedb hay que hacer npm intall nedb
const app = express();
const PORT = process.env.PORT || 16078;

app.use(express.json());
app.use("/",express.static("./public"));

loadBackend(app);

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}!`);
});