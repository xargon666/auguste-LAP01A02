const express = require("express");
const app = express();
const cors = require("cors");
const data = require("./data");
const movies = require("./data");

app.use(cors());
app.use(express.json());

const port = 3000;
app.listen(port, () => {
  console.log("We are live on " + port);
});

app.get("/", (req, res) => res.send("Hello World!"));

// route for all films
app.get("/allfilms", (req, res) => res.send(data));

// route for specific film
app.get("/allfilms/:id", (req, res) => {
  if (req.params.id = movies.length || req.params.id < 1) {
    res.status(404).send(
      `That does not exist, please choose a number betwen 1 and ${movies.length}`
    );
  } else {
    res.send(movies[req.params.id - 1]);
  }
});

// route for random movie
app.get("/random",(req,res)=>{
  res.send(getRandomMovie())
})

function getRandomMovie() {
  const randomNumber = Math.floor(Math.random() * movies.length);
  console.log("randomNumber", randomNumber);
  return movies[randomNumber];
}
