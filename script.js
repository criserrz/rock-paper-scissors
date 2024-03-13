document.addEventListener('DOMContentLoaded', function() {
  const weaponButtons = document.querySelectorAll('.weapon');
  const playerBox = document.getElementById('player-box');
  const computerBox = document.getElementById('computer-box');
  const playerScore = document.getElementById('player-score');
  const computerScore = document.getElementById('computer-score');
  const gameText = document.getElementById('game-text');
  const remainingRounds = document.getElementById('remaining');
  

  let playerPoints = 0;
  let computerPoints = 0;
  let roundsPlayed = 0;

  // Initial score display
  playerScore.textContent = '0';
  computerScore.textContent = '0';

  function handleButtonClick(event) {
    const icon = event.currentTarget.querySelector('i');
    const iconClone = icon.cloneNode(true);
    playerBox.innerHTML = '';
    playerBox.appendChild(iconClone);

    const randomIndex = Math.floor(Math.random() * weaponButtons.length);
    const computerIcon = weaponButtons[randomIndex].querySelector('i').cloneNode(true);
    computerBox.innerHTML = '';
    computerBox.appendChild(computerIcon);

    const playerChoice = event.currentTarget.getAttribute('id');
    const computerChoice = weaponButtons[randomIndex].getAttribute('id');

    if (playerChoice === computerChoice) {
      gameText.textContent = 'It\'s a tie!';
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      playerPoints++;
      playerScore.textContent = playerPoints;
      gameText.textContent = 'You win! ' + playerChoice + ' beats ' + computerChoice + '.';
    } else {
      computerPoints++;
      computerScore.textContent = computerPoints;
      gameText.textContent = 'Computer wins! ' + computerChoice + ' beats ' + playerChoice + '.';
    }

    roundsPlayed++;
    remainingRounds.textContent = 5 - roundsPlayed;

    if (roundsPlayed === 5) {
      if (playerPoints > computerPoints) {
        gameText.textContent = 'You win the game!';
      } else if (playerPoints < computerPoints) {
        gameText.textContent = 'Computer wins the game!';
      } else {
        gameText.textContent = 'It\'s a tie!';
      }
      
      weaponButtons.forEach(button => {
        button.removeEventListener('click', handleButtonClick);
        button.disabled = true;
      });
      
      restartButton.disabled = true;
    }
  }

  weaponButtons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
  });

  
  });

