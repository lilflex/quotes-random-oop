import RandomQuote from "./RandomQuote.js";

class RandomQuotesApp {
  constructor() {
    this.randomQuoteBtn = document.getElementById("random-quote-btn");
    this.quoteTextElement = document.getElementById("quote-text");
    this.quoteAuthorElement = document.getElementById("quote-author");
    this.currentQuote = null;

    this.init();
  }

  displayCurrentQuote() {
    console.log(this);
    const { text, author } = this.currentQuote;
    this.quoteTextElement.textContent = `"${text}"`;
    this.quoteAuthorElement.textContent = author;
  }
  getRandomQuote() {
    const randomQuote = RandomQuote.getRandomQuote();
    this.currentQuote = randomQuote;
    this.displayCurrentQuote();
  }

  init() {
    this.randomQuoteBtn.addEventListener("click", () => this.getRandomQuote()); // RandomQuotesApp{}
  }
}

export default RandomQuotesApp;
