let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

const minNum = document.querySelector('#min-num'),
      maxNum = document.querySelector('#max-num'),
      guessInput = document.querySelector('#guess-input'),
      guessBtn = document.querySelector('#guess-btn'),
      message = document.querySelector('.message'),
      text = document.querySelector('.text'),
      game = document.querySelector('#game');

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', function(e){
  if(e.target.className==='play-again'){
    window.location.reload()
  }
})

guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);

  if(isNaN(guess) || guess < min || guess > max){
    setText(`Please enter a number between ${min} and ${max} !`, 'red')
  }
  if(guess === winningNum){
    
    gameOver(true, `${winningNum} is correct, YOU WIN !`)
  }else{
    guessesLeft -= 1;
    if(guessesLeft === 0){
     
      gameOver(false, `Game Over, you lost, ${winningNum} was the correct answer`)

    }else{
      guessInput.style.color = 'red'
      guessInput.style.borderColor = 'red'
      guessInput.value = ''

      setMessage(`${guess} is not correct, ${guessesLeft} guesses left!` , 'red')
    }
    
  }
  console.log(guess);
})

function gameOver(won, msg){
  let color;
  won === true ? color = 'green' : color = 'red'
  guessInput.disabled = true;
  guessInput.style.color = color
  guessInput.style.borderColor = color
  message.style.color = color
  
  setMessage(msg)

  guessBtn.value = 'Play Again'
  guessBtn.className += 'play-again'
}

function getRandomNum(min, max){
  return ( Math.floor(Math.random()*(max-min+1)+min))
}
function setText(msg, color){
  text.style.color = color;
  text.textContent = msg;
}
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}
