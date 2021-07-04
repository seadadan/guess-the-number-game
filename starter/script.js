
var randomNumber = Math.floor(Math.random() * 20) + 1;
var score = 20;
var highscore = 0;
console.log(randomNumber)


var dis_Message = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  var guess = Number(document.querySelector('.guess').value);
  
 if (guess === randomNumber) {
   
    dis_Message(' Correct Number!');
    document.querySelector('.number').textContent = randomNumber;

    document.querySelector('body').style.backgroundColor = 'green';
    var attemps=20-score;
     
    document.querySelector('.Attemps').textContent = attemps;
    
  

 if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
}

    
    else if (guess >  randomNumber ) {
     if (score > 1) {
       document.querySelector('.message').textContent = 'Too high!';
       score--;
       document.querySelector('.score').textContent = score;
     } else {
       document.querySelector('.message').textContent = 'You lost the game!';
       document.querySelector('.score').textContent = 0;
    }

   } else if (guess <  randomNumber ) {
     if (score > 1) {
       document.querySelector('.message').textContent = 'Too low!';

       score--;
       document.querySelector('.score').textContent = score;
     } else {
       document.querySelector('.message').textContent = 'You lost the game!';
       document.querySelector('.score').textContent = 0;
     }
   }

});



   





 document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  randomNumber  = Math.trunc(Math.random() * 20) + 1;

  
  dis_Message('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
   document.querySelector('.Attemps').textContent = attemps;

  document.querySelector('body').style.backgroundColor = 'black';
  
});


