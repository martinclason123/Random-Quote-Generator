// FSJS - Random Quote Generator
const loadQuote = document.getElementById('loadQuote');
const quoteHTML = document.getElementsByTagName('P')[0];
var timer;

// array used to store used numbers, to prevent them from being used twice in a row
let usedRandoms = []


//Array of quote objects to be randomly selected and displayed
const quotes = [
                 {quote: "Chickens are nervous birds", source: "Jim Harbaugh, Michigan football head coach", year: 2018, citation: "Wilton Speight", image:"harbaugh.jpg" },
                 {quote: "Quit drinking and go to bed", source: "Dave Brandon, Michigan athletic director", year: 2014, citation: "Endzone", image:"DaveBrandon.jpg"},
                 {quote: "We gonna play physical", source: "Brady Hoke, former Michigan football head coach", image: "brady-hoke.png"},
                 {quote: "To hell with Notre Dame", source: "Bo Schembechler", image: "bo.jpeg"},
                 {quote: "Your raise me up", source: "Rich Rodriguez,  former Michigan head coach", image: "richRod.jpg"}

                ];


// Creates a random number, and uses it to select a quote from the quote array
function getRandomQuote(array)   {
    var a;

// clears out usedNumbers array when they have all been used once
    if (usedRandoms.length >= quotes.length)  {
      usedRandoms = [];
    }

// Prevents same quote from being used twice in a row
    do {
      randomNumber = Math.floor(Math.random() * quotes.length);
      a = usedRandoms.indexOf(randomNumber);

    } while (a !== -1);
      usedRandoms.push(randomNumber);
      return quotes[randomNumber];
};


// Creates the HTML to be inserted into the page
function printQuote() {

// Prevents multiple timers from going off after users click "next quote" multiple times
  clearTimeout(timer);

  var body = document.getElementsByTagName('BODY')[0];
  var message = "";
  var quote = getRandomQuote();
      message += `<p class="quote">${quote.quote}<p>
                  <p class ="source">${quote.source}</p>`
//checks to see if the quote contains a citation and/or year
                  if(quote.hasOwnProperty('citation'))  {
                  message += `<span class="citation">${quote.citation}<span>`;
};
                  if(quote.hasOwnProperty('year'))  {
                  message += `<span class="year">${quote.year}<span>`;
};
    message += `<img src=${quote.image} class="image">`
document.getElementById('quote-box').innerHTML = message;
// Alternates background colors between Maize and blue
if (body.style.backgroundColor !== "rgb(0, 39, 76)")  {
  body.style.backgroundColor = "rgb(0, 39, 76)";
  body.style.color = "#FFCB05";
  loadQuote.style.backgroundColor = "#FFCB05";
  loadQuote.style.color = "rgb(0, 39, 76)";

} else {
  body.style.backgroundColor = "#FFCB05";
  body.style.color = "rgb(0, 39, 76)"
  loadQuote.style.backgroundColor = "rgb(0, 39, 76)";
  loadQuote.style.color = "#FFCB05";

};
timer = setTimeout(printQuote, 5000);

};


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

loadQuote.addEventListener('click', ()  =>  {
  loadQuote.textContent = "Next Quote";
  printQuote();
});
