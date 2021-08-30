var readlineSync = require('readline-sync');

var score = 0;

var userName = readlineSync.question("What is your name?");

console.log('Hi '+ userName + '!' + 'How well do you know Syed ?' + 'Lets test you with a fun game');

function play(question,answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("You are right!! Lets move to the next Question");
    score = score + 1;
  } else {
    console.log("Oops!! You are wrong this time")
    score = score - 1;
  }
  console.log("current score: " , score);
  console.log("---------------------");
}

var questions = [{
  question: 'What is my Full Name?',
  answer:'Musavvir Nazar Kalim Syed'
},{
  question:'Which city do I live in?',
  answer:'Bangalore'
},{
  question:'What is my favorite food?',
  answer:'Biryani'
},{
  question:'What is my first pet name?',
  answer:'Mickey'
},{
  question:'What am I passionate about?',
  answer:'Travelling'
}];

for (var i = 0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

console.log('Hurray! You scored' ,score);

