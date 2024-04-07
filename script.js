let data = [];

// Show new Quote
function newQuote() {
    // Pick a random quote
    const quote = data[Math.floor(Math.random() * data.length)];
    console.log(quote);
}

// Get quotes from API

async function QuoteApi() {
    const ApiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    const resp = await fetch(ApiUrl);
    data = await resp.json();
    newQuote();
}

QuoteApi();