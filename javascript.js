//Alphabet array 
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;

//Holds user inputs in an array 
var yourChoices = [];
var letterToGuess = null;
var totalGuesses = 10;

function randomLetterGen() {
    letterToGuess = letters[Math.floor(Math.random() * letters.length)];
    console.log(letterToGuess);
}
randomLetterGen();
function updatedTotalGuesses(){
    document.querySelector("#guesses-left").innerHTML = totalGuesses;
}

