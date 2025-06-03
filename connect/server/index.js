import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static("dist")); //@ Middlewares
//@ Bad Practice of directly serving static content in the backend as changes in the frontend will not propage to backend .(we have to do this work again and again)
// app.get("/", (req, res) => {

// });
app.get("/api/joke", (req, res) => {
  const jokes = [
    { id: 1, content: "This is Joke 1" },
    {
      id: 2,
      content: "This is Joke 2",
    },
    { id: 3, content: "This is Joke 3" },
  ];
  res.json(jokes);
});
app.listen(port, () => {
  console.log(`Server listening on: http://localhost:${port}`);
});
