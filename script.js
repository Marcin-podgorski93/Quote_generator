

async function QuoteApi() {
    const ApiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    const resp = await fetch(ApiUrl);
    const data = await resp.json();
    console.log(data[2]);
}

QuoteApi();