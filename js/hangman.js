var animals = [
	"penguin",
	"rabbit",
	"elephant",
	"tiger",
	"coyote",
	"tortoise",
	"bear",
	"woodpecker",
	"lizard",
	"shark",
	"hornet",
	"monkey",
	"crocodile",
	"impala"
];

var animal = animals.map(name => name.toUpperCase());

let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function randomWord() {
  answer = animal[Math.floor(Math.random() * animal.length)];
}

function generateButtons() {
  let buttonsHTML = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter =>
    `
      <button
        class="btn btn-lg btn-light m-2"
        id='` + letter + `'
        onClick="handleGuess('` + letter + `')"
      >
        ` + letter + `
      </button>
    `).join('');

  document.getElementById('keyboard').innerHTML = buttonsHTML;
}

function handleGuess(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute('disabled', true);

  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkIfGameWon();
  } else if (answer.indexOf(chosenLetter) === -1) {
    mistakes++;
    updateMistakes();
    checkIfGameLost();
    updateHangmanPicture();
  }
}

function updateHangmanPicture() {
  document.getElementById('hangmanPic').src = './images/' + mistakes + '.png';
}

function checkIfGameWon() {
  if (wordStatus === answer) {
    document.getElementById('keyboard').innerHTML = 'You Won 👍🏻';
  }
}

function checkIfGameLost() {
  if (mistakes === maxWrong) {
    document.getElementById('wordSpotlight').innerHTML = 'The answer was: ' + answer;
    document.getElementById('keyboard').innerHTML = 'You Lost 👎🏻';
  }
}

function guessedWord() {
  wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');

  document.getElementById('wordSpotlight').innerHTML = wordStatus;
}

function updateMistakes() {
  document.getElementById('mistakes').innerHTML = mistakes;
}

function reset() {
  mistakes = 0;
  guessed = [];
  document.getElementById('hangmanPic').src = './images/0.png';

  randomWord();
  guessedWord();
  updateMistakes();
  generateButtons();
}

document.getElementById('maxWrong').innerHTML = maxWrong;

randomWord();
generateButtons();
guessedWord();

const button = document.querySelector(".mutebtn");
const icon = document.querySelector(".mutebtn > i");
const audio = document.querySelector("#music");

button.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    icon.classList.remove('fa-volume-mute');
    icon.classList.add('fa-volume-up');
    
  } else {
    audio.pause();
    icon.classList.remove('fa-volume-up');
    icon.classList.add('fa-volume-mute');
  }
});

function toggle(){
  var blur = document.getElementById('blur');
  blur.classList.toggle('active');
  var popup = document.getElementById('popup');
  popup.classList.toggle('active');
}

window.onload=function(){
  document.getElementById("music").play();
}