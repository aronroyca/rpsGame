let userName = prompt('What is your name');
console.log(userName)
let userChoice;
let computerChoice;

let rockButton = document.getElementById('rockBtn')
let paperButton = document.getElementById('paperBtn')
let scissorsButton = document.getElementById('scissorsBtn')


rockButton.addEventListener('click', function (){
    userChoice = 'rock';
    console.log(userChoice)
})
paperButton.addEventListener('click', function (){
    userChoice = 'paper';
    console.log(userChoice)
})
scissorsButton.addEventListener('click', function (){
    userChoice = 'scissors';
    console.log(userChoice)
})