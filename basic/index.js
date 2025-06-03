import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("App is Running");
});
app.get("/name", (req, res) => {
  res.send("You are at name url ");
});

app.get("/login", (req, res) => {
  res.send("<h1>Login Module has been served </h1>");
});
app.get("/api", (req, res) => {
  res.json({
    name: "Shoeb",
    Class: 12,
    Marks: {
      Math: 89,
      English: 34,
      Science: "90",
    },
  });
});
app.listen(port, () => {
  console.log(`Server is running on:  http://localhost:${port}`);
});
