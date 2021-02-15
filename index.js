var readlineSync = require("readline-sync");

let userName = readlineSync.question("What's your name? ");
console.log("Let's begin the game", userName);

var score = 0;
function check(question,answer) {
  let userAns = readlineSync.question(question);

  if(userAns === answer){
    score++;
    console.log("You are right!");
  }
  else {
    console.log("You got it wrong!");
  }

  console.log("current score:",score);
  console.log("-----------------");
} 

var questionArr = [
    {
      question:"who is my favourite superhero? ",
      ans:"superman"
    },
    {
      question:"what sport do i play? ",
      ans:"football"
    },
    {
      question:"where do I live? ",
      ans:"odisha"
    }
    
  ];