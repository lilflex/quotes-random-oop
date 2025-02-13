const express = require("express");
const quotes = require("./data/quotes");
const app = express();


function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];

}

app.get("/quotes/random-single", function (req, res) {
  const randomQuote = getRandomQuote();
  res.json(randomQuote);
});

app.listen(3000);
