// Global Variables
  let playerChoice;
  let computerChoice;
  let playerName;
  let wins = 0;
  let losses = 0;
  let ties = 0;
  let result;
  let youChose;
  let compChose;

  
//Start
  playerName = prompt('What is your name?');
  let playerDisplay = document.getElementById('player');
  playerDisplay.textContent = playerName.toUpperCase() + ' CHOSE :';
  
//Player Choice
    function rockChoice() {
      playerChoice = 0;
      youChose = 'ROCK';
      compRandom();
    }
    function paperChoice() {
      playerChoice = 1;
      youChose = 'PAPER';
      compRandom();
    }
    function scissorsChoice() {
      playerChoice = 2;
      youChose = 'SCISSORS';
      compRandom();
    }
    
    let rock = document.getElementById('rock');
    rock.addEventListener('click',rockChoice,false);
    let paper = document.getElementById('paper');
    paper.addEventListener('click',paperChoice,false);
    let scissors = document.getElementById('scissors');
    scissors.addEventListener('click',scissorsChoice,false);
    
  //Computer Choice
    function compRandom() {
      computerChoice = Math.floor(Math.random() * 3);
      compChoice();
    }

    function compChoice() {
      switch (computerChoice) {
        case 0 :
          compChose = 'ROCK';
          break;
        case 1 :
          compChose = 'PAPER';
          break;
        case 2 :
          compChose = 'SCISSORS';
      }
      decision();
    }
    
  //Decision
    function decision() {
      let subresult = playerChoice - computerChoice;
      switch (subresult) {
          case 0 :
            ties++;
            result = 'YOU TIED!';
            break;
          case -1 :
          case 2 :
            losses++;
            result = 'YOU LOST!';
            break;
          default :
            wins++;
            result = 'YOU WON!';
      }
      updateResults();
    }
    
      let resultPost = document.getElementById('resultPost');
      let yourPost = document.getElementById('yourPost');
      let compPost = document.getElementById('compPost');
      let winsCount = document.getElementById('winsCount');
      let lossesCount = document.getElementById('lossesCount');
      let tiesCount = document.getElementById('tiesCount');

    function updateResults() {
      resultPost.textContent = result;
      yourPost.textContent = youChose;
      compPost.textContent = compChose;
      winsCount.textContent = wins;
      lossesCount.textContent = losses;
      tiesCount.textContent = ties;
  }
  
    window.addEventListener('click',function again() {
      let choose = document.getElementById('choose');
      choose.textContent = 'CHOOSE AGAIN';
    },false);
    