document.addEventListener('DOMContentLoaded', function() {
    const weaponButtons = document.querySelectorAll('.weapon');
    const rockButton = document.getElementById('opcionUno');
    const paperButton = document.getElementById('opcionDos');
    const scissorsButton = document.getElementById('opcionTres');


    const playerBox = document.getElementById('player-box');
    const computerBox = document.getElementById('computer-box');
    
    let playerWeapon;

    const gameText = document.getElementById('game-text');
    const roundCounter = document.getElementById('remaining');

    const playerScore = document.getElementById('player-score');
    const computerScore = document.getElementById('computer-score');

     //Function to handle button clicks
    function handleButtonClick(event) {
    const icon = event.currentTarget.querySelector('i');
    const iconClone = icon.cloneNode(true);
    playerBox.innerHTML = '';
    playerBox.appendChild(iconClone);
  }

  
  // Randomly choose a button for the computer
  const randomIndex = Math.floor(Math.random() * weaponButtons.length);
  const computerIcon = weaponButtons[randomIndex].querySelector('i').cloneNode(true);

  // Clear any existing content in computer-box
  computerBox.innerHTML = '';

  // Append the cloned computer icon to computer-box
  computerBox.appendChild(computerIcon);
  

    
});





