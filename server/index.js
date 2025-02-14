const express = require("express");
const cors = require("cors");
const quotes = require("./data/quotes");
const app = express();

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// app.use((req, res, next)=>{
//   console.log('Middleware 1 fn called') 
//   next()// функция-посредник next() перед вызовом cors()
// })
// app.use((req, res, next)=>{
//   console.log('Middleware 2 fn called') 
//   res.send('Answer from middleware 2') // ответ будет немедленно возвращён клиенту, не дойдя до сервера (для всех методов)
// })

//app.use(cors()); //для всех origin

const corsOptions = {
  origin: '*',//для всех origin
  // origin: ["http://localhost:8080", "http://127.0.0.1:8080"],
};

app.use(cors(corsOptions));

app.get("/quotes/random-single", function (req, res) {
  const randomQuote = getRandomQuote();
  res.json(randomQuote);
});

app.listen(3000);
