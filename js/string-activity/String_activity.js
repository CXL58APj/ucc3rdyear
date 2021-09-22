let quote = 'I dO nOT lIke gREen eGgS and HAM';
let fixedQuote;

// Converting to lowercase and converting the first letter to uppercase
fixedQuote = quote.toLowerCase();
fixedQuote =fixedQuote.charAt(0).toUpperCase() + fixedQuote.slice(1)

// Replacing green eggs and ham 
fixedQuote= fixedQuote.replace("green eggs and ham", "alamang and peanuts in ice cream");

// Adding exclamation point at the end of the text.
let finalQuote = fixedQuote + "!";
alert(finalQuote);