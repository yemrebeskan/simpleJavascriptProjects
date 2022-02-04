'use strict';
//use dom selecting and manipulating
/*console.log(document.querySelector('.message').textContent); //taking p which's class is message
document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 15;
document.querySelector('.guess').value = 23;

console.log(document.querySelector('.guess').value);

//handling click events */
let highscore = 0;
let score = 20;
let secretnumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (score <= 1) {
    displayMessage('You Lost!');
    document.querySelector('.score').textContent = 0;
  } else {
    //When there is no input.
    if (!guess) {
      displayMessage('No number!');

      //When player wins
    } else if (guess === secretnumber) {
      displayMessage('Correct Number!');
      document.querySelector('.number').textContent = secretnumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      if (highscore <= score) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
      document.querySelector('.number').style.width = '30rem';

      //When guess is wrong
    } else if (guess !== secretnumber) {
      //   document.querySelector('.message').textContent =
      //     guess > secretnumber ? 'Too high!' : 'Too low';
      displayMessage(guess > secretnumber ? 'Too high!' : 'Too low');
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = ' ';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start Guessing...');
  document.querySelector('.number').textContent = '?';
});

//manipulating css styles
