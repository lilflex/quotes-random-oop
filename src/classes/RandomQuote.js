import quotes from "../data/quotes.js";
import MathUtils from "../utils/MathUtils.js";
import Quote from "./Quote.js";

class RandomQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.generateRandomInt(quotes.length);
    const { id, text, author } = quotes[randomIndex];
    return new Quote(id, text, author);
  }

  static async getRandomQuoteViaAPI() {
    const url = "https://quoteslate.vercel.app/api/quotes/random";
    const options = { headers: { "Content-Type": "application/json" } };

    try {
      const response = await fetch(url, options);
      const { id, quote: text, author } = await response.json();
      return new Quote(id, text, author);
    } catch (error) {
      console.error("Error: ", error);
    }
  }

  // static getRandomQuoteViaAPI() {
  //   const url = "https://quoteslate.vercel.app/api/quotes/random";
  //   const options = { headers: { "Content-Type": "application/json" } }

  //   return fetch(url, options)
  //     .then((response) => response.json())
  //     .then((quote) => {
  //       const { id, quote: text, author } = quote;
  //       return new Quote(id, text, author);
  //     })
  //     .catch((error) => console.error("Error: ", error));
  // }
}

export default RandomQuote;
