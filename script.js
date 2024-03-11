 //Get computers Selection by function//
 const options = ["rock", "paper", "scissors"];
      
 function computerChoice() {
   let randomOption = Math.floor(Math.random() * options.length);
   let computerSelection = options[randomOption];
   return computerSelection;
 }

 //Create a PLayRound function to compare choices and return result according to game rules//
 //Get players Selection by prompt//

 let playerScore = 0;
 let computerScore = 0;

 function playRound() {
   let playerGame = prompt("Choose your weapon: rock, paper or scissors");
    if (playerGame === "") {
      do {
       playerGame = prompt("You must choose a weapon");
      } while (playerGame === "");
     } else if (!options.includes(playerGame)){
       do {
         playerGame = prompt("Please select a valid option");
       } while (!options.includes(playerGame)); 
     }

   let computerGame = computerChoice();
   if (
     (playerGame === "rock" && computerGame === "scissors") ||
     (playerGame === "paper" && computerGame === "rock") ||
     (playerGame === "scissors" && computerGame === "paper")
   ) {
     playerScore += 1;
     console.log("You won!" + playerGame + " beats " + computerGame);
   } else if (
     (playerGame === "rock" && computerGame === "rock") ||
     (playerGame === "paper" && computerGame === "paper") ||
     (playerGame === "scissors" && computerGame === "scissors")
   ) {
     console.log(
       "It's a tie! Your choice was: " +
         playerGame +
         " and the computer choice was: " +
         computerGame
     );
   } else {
     computerScore += 1;
     console.log("You lose!" + computerGame + " beats " + playerGame);
   }
 }
 //Create a PlayGame function that repeats 5 times a PlayRound function//
 function playGame() {
   for (let i = 0; i < 5; i++) {
     playRound();
   }

   if (playerScore > computerScore) {
     alert("You won the game! your score was: " + playerScore);
   } else if (playerScore < computerScore) {
     alert(
       "Sorry! you lost. You got " +
         playerScore +
         " points against " +
         computerScore +
         " points of the computer."
     );
   } else {
     alert("Its a tie. Try again");
   }
 }

 //Call PLayGame function by console.log//
 console.log(playGame());