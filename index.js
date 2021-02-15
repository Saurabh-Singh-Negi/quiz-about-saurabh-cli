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

  var highScores = [
    {
      name: "ABC",
      score: 2
    },
    {
      name: "XYZ",
      score: 1
    }
  ]

  for(let i=0;i<questionArr.length;i++) {
    check(questionArr[i].question,questionArr[i].ans);
  }

console.log("High scorers");
for(let i=0;i<highScores.length;i++) {
  console.log(highScores[i].name + " " + highScores[i].score )
}


for(let i=0;i<highScores.length;i++) {
    if(score>highScores[i].score) {
      console.log("You've made it to the high scorers list");
    }
    break;
  }
  console.log("your final score",score);
  console.log("Send me the screenshot, if you've beaten the high score");