//read Input
const chalk = require('chalk');
var readlineSync = require('readline-sync');

const log = console.log;
log(chalk.black.bgYellowBright('Welcome to Cricket Quiz'));
console.log(" ");
var userName = readlineSync.question('What is your name?\n');
console.log(" ");
log(chalk.green.bgBlackBright("Welcome," + userName));
console.log(" ");

var score =0;
var score2=0;
//function
function play(question,answer)
{
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toLowerCase()===answer.toLowerCase())
  {
    log(chalk.green('Congrats! You are right..'));
    console.log(" ");
    score = score+1;
  }
  else
  {
    log(chalk.magenta('Sorry! You loose:-('));
    console.log(" ");
    score= score-1;
  }
}

function play2(question,answer)
{
  var userAnswer = readlineSync.question(question);
  if(userAnswer===answer)
  {
    log(chalk.green('Congrats! You are right..'));
    console.log(" ");
    score2 = score2+1;
  }
  else
  {
    log(chalk.red('Sorry! You loose:-('));
    console.log(" ");
    score2= score2-1;
  }
}


log(chalk.red.bgWhiteBright('Lets Play!!'));
log(chalk.red.bgWhiteBright('Are You a Cricket Fan? Lets Begin'));
log(chalk.yellowBright('Current Score:' +score));

//array of objects 
var questions =[
  {
    question: chalk.red(`
    Who won the World Cup 2019?
    a) India
    b) Australia
    c) New Zealand
    d) England
    \n`),
    answer:"d"
  },
  {
    question:chalk.red(`
    Who is Captain of Indian Cricket Team in 2021?
    a) MS Dhoni
    b) Virat Kohli
    c) Rohit Sharma
    d) Jasprit Bumrah\n`),
    answer:"b"
  },
  {
    question:chalk.red(`
    Who won the IPL 2020?
    a) Royal Challengers Banglore
    b) Kolkata Knight Riders
    c) Rajasthan Royals
    d) Mumbai Indians\n`),
    answer:"d"
  },
  {
    question:chalk.red(`
    How many Legal Deliveries can be Bowled in an Over?
    a) 3
    b) 5
    c) 7
    d) 6
    \n`),
    answer:"d"
  },
  {
    question:chalk.red(`
    How many runs does the batting side get if a wide is bowled and the ball goes to the boundary?
    a) 3
    b) 6
    c) 5\n`),
    answer:"c"
  }

];

var questions2 =[
  {
    question: chalk.yellow(`
    What does LBW stand for?
    a) Last Batting Wicket
    b) Leg Before Wicket
    c) Last Ball Wicket\n`),
    answer:"b"
  },
  {
    question:chalk.yellow(`
    Which national team are called “Baggy Greens”?
    a) India
    b) England
    c) Australia
    d) West Indies\n`),
    answer:"c"
  },
  {
    question:chalk.yellow(`
    How many minutes before play should the umpires take the field?
    a) 4 Minutes
    b) 8 Minutes
    c) 2 Minutes
    d) 5 Minutes\n`),
    answer:"d"
  },
  {
    question: chalk.yellow(`
    Who Captained India to victory in the World Cup in 1983?
    a) Clive Loyd
    b) Lala Amarnath
    c) Kapil Dev
    d) Sunil Gavaskar\n`),
    answer:"c"
  }

];

//data of high scores for score1
var highSCORES=
[
  {
    name:"Avichal",
    scoree:5
  },
  {
    name:"Kohli",
    scoree:4
  }
]

var highSCORES2=
[
  {
    name:"Shreyas Iyer",
    scoree:3
  }
]

//loop around object
for(var i =0; i<questions.length;i++)
{
  var curr = questions[i];
  play(curr.question, curr.answer);
}


console.log('Well done Mate!');

console.log('Game Over!! Ready for Score?');
if(score>=4)
{
log(chalk.greenBright('Yayyyy! You scored : '+ score));
console.log('Fire up the Cricketer inside you!')
for(var i=0;i<highSCORES.length;i++)
{
  var curr = highSCORES[i];
  if(curr.scoree<score)
  {
    console.log('Congrats! You have beaten '+ curr.name + " " +"in first round" );
  }
}
console.log('Final round is waiting for you soon');
var ans= readlineSync.question('say yes/no :');
if(ans==="yes")
{
  for(var i =0; i<questions2.length;i++)
  {
  var curr2 = questions2[i];
  play2(curr2.question, curr2.answer);
  }
  log(chalk.blueBright("Felt funny and lightened mood"));
   console.log("You scored:"+ score2);

  for(var i=0;i<highSCORES2.length;i++)
  {
  var curr2 = highSCORES2[i];
  if(curr2.scoree<score2)
    {
    console.log('Congrats! You have beaten '+ curr2.name + " " + "in second round" );
    console.log('Please send your winning screenshot!')
    }
  }
 
  console.log("Good Bye!! Keep Cricketing***");
}
else
{
  log(chalk.green('Oops , we will wait for you!'));
}


}

else
{
  log(chalk.yellow('no worry! Your score is:'+ score));
  log(chalk.redBright.bgWhite('Lit up, Ignite up!!'));
}