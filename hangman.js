let chances;
let game = [];
let word;
let wordArr = [];
let another;
let won;
const wordList = [
    'apple', 'answer', 'anchor', 'bananna', 'berry', 'boat', 'boot', 'cape', 'cap', 'case', 'chip', 'cherry', 'cone', 'dark', 'deep', 'donkey', 'eight', 'ever', 'elephant', 'fire', 'food', 'good', 'great', 'hour', 'ink', 'jar', 'jump', 'juggle', 'kick', 'kangaroo', 'leopard', 'moon', 'night', 'opera', 'people', 'quiet', 'right', 'scissor', 'temple', 'unicorn', 'victorious', 'wink', 'xylophone', 'yelp', 'zebra'  //list game chooses from
];
const prompt = require('prompt-sync')();    //enables input with prompt

//chooses a random word from the list as a string
const random = () => {
return wordList[Math.floor(Math.random()*wordList.length)];
}

//resets changes and gets a random word from the list then calls play
const start = () => {
chances = 10;
word = random();
wordArr = word.split('');   //turns the string into an array
game = [];
for (let i = 0; i < wordArr.length; i++)     //creates/resets the gameboard for player to see how many blanks
{
    game[i] = '_';
}
console.log('welcome to hangman! You get 10 guesses.');
console.log(`Your word is ${game.length} letters long.`)
play();
}

//takes guess and checks if in array and adds to game
const play = (par) => {
let guess = prompt('What is your guess?');     //gets users guess
guess = guess.toLocaleLowerCase();
if (wordArr.includes(guess)) {
wordArr.forEach((el, index) => {
if (el === guess){
game[index] = guess;    //places correct guess in game
console.log('You got a letter right!')
          }
        }
      )
    } else {
    chances -=1;
    console.log(`Sorry, ${guess} is not in this word, you have ${chances} guesses left.`)
  }
console.log(game.toString());
win();
if (chances > 0) {
    play();
    } else if (!won) {
another = prompt(`${wordArr.toString()} was the word. Game Over, try again? y for yes, n for no.`)
if (another === 'y' || another === 'Y') {
start();
    }
  }
}


//checks for win conditions and starts another game
const win = () => {
    if (compareArrays()) {
    chances = 0;
    another = prompt('You won! play again? y for yes, n for no.')
    if (another === 'y' || another === 'Y') {
    start();
        }
    }
}

//converts arrays to string and returns boollean value
const compareArrays = () => {
let a = JSON.stringify(game);
let b = JSON.stringify(wordArr);
if (a === b){
    won = true;
    return won;
  }
}

start();  //kicks off the game and resets values