import express from "express";
import { DbContext } from "./dbcontext";

var msg = "Hello World";
console.log(msg);

// Create Express server
const app = express();

// Connect to MongoDB
const dbcontext = new DbContext();

app.get("/", async (req, res) => {
    // dbcontext.saveData();
    const data = await dbcontext.queryThingsByCategory("book");
    console.log(data);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(data);
})

const server = app.listen(4201, ()=> {
})
