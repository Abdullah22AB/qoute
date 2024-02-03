const quotes = [
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
    { quote: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
    {quote:"Life is never fair, and perhaps it is a good thing for most of us that it is not.",author:'Oscar Wilde'},
    {quote:"The only impossible journey is the one you never begin",author:"Tony Robbins"},
    {quote:"May you live all the days of your life.",author:"Jonathan Swift"},
    {quote:"Keep smiling, because life is a beautiful thing and there's so much to smile about",author:"Marilyn Monroe"},
    {quote:"Life is trying things to see if they work",author:"Ray Bradbury"},
    // Add more quotes as needed
];

let currentIndex = 0;

function showNextQuote() {
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');

    quoteElement.textContent = quotes[currentIndex].quote;
    authorElement.textContent = "- " + quotes[currentIndex].author;

    currentIndex = (currentIndex + 1) % quotes.length;
}
showNextQuote()