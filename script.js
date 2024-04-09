const quoteContainer = document.getElementById('container');
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const quoteBtn = document.getElementById('new-quote');
const twitterBtn = document.getElementById('twitter');
const loader = document.getElementById('loader');

let apiQuotes = [];

// Show Loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Hide Loading
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

// Show new Quote
function newQuote() {
    loading();
    // Pick a random quote
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    
    // we can use also innerHTML but better is textContent because they take only text without html tags.
    // Check if Author exist. we can write quote.author === null but better is when we use !quote... 
    if (!quote.author) {
        quoteAuthor.textContent = 'Unknown';
    } else {
        quoteAuthor.textContent = quote.author;
    }
    // Check quote length to change style
    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote');
        // console.log(quote.text.length);
    } else {
        quoteText.classList.remove('long-quote');
        // console.log(quote.text.length);
    }
    // Set Quote, Hide Loader
    quoteText.textContent = quote.text; 
    complete();
}



// Get quotes from API

async function QuoteApi() {
    loading();
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    const resp = await fetch(apiUrl);
    apiQuotes = await resp.json();
    newQuote();
}

// Tweet post 
function addPost() {
    window.open(`https://twitter.com/intent/tweet?text=${quoteText.textContent}-${quoteAuthor.textContent}`);
}

// Event Listeners
quoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', addPost);


// On Load  
QuoteApi();

