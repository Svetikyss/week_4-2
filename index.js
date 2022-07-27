const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune,getMoodByCategory, postMood, deleteMood,} = require('./controller')

app.get("/api/compliment", getCompliment);

app.get("/api/fortunet", getFortune);

app.get("/api/day/mood/", getMoodByCategory);

app.post("/api/day/mood",postMood );

app.delete("/api/mood/:category", deleteMood);

app.listen(4000, () => console.log("Server running on 4000"));
