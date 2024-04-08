// const quoteContainer = document.getElementById('container');
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');

let data = [];

// Show new Quote
function newQuote() {
    // Pick a random quote
    const quote = data[Math.floor(Math.random() * data.length)];
    // we can use also innerHTML but better is textContent because they take only text without html tags.
    quoteText.textContent = quote.text; 
    quoteAuthor.textContent = quote.author;

}

// Get quotes from API

async function QuoteApi() {
    const ApiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    const resp = await fetch(ApiUrl);
    data = await resp.json();
    newQuote();
}

QuoteApi();

