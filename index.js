var readlineSync=require("readline-sync");
var chalk=require("chalk");
 
var c1 = chalk.hex('#DEADED');
var c2 = chalk.keyword('orange');
var c3= chalk.hex('#e6e0d4')
var c4=chalk.green
var c5=chalk.yellow
var c6=chalk.hex('e6e0d4')
var c7=chalk.hex('ede1ec')
var c8=chalk.hex('99c3aa')

var userName=readlineSync.question(c1("What Is Your Name?"));
console.log(c2("Welcome To The Vampire Diaries Quiz "+ c5(userName)))
console.log("---------------------------");
console.log(c4 ("Score rewarded for each right answer: 5"));
console.log(c4("score deducted for each wrong amswer: 3"));
console.log("---------------------------");
var score =0;
var highScores=[{
  Name:"Satyam",
  Score:27,
},{
  Name: "Dushyant",
  Score:19,
}
]
function play(Question,Answer){
  var userAnswer=readlineSync.question(c8(Question));
  if (userAnswer===Answer){
    console.log(c7("You Are Right!!!"))
   score=score+5
  }else{console.log(c3("You Are Wrong!!!"))
  score=score-3
  }
  console.log(c5("Current Score :" + score))
  console.log("---------------------------");
}

var Questions=[
{Question:"In What Year Vampire Diaries Started? \n1. 2009\n2. 2008\n3. 2012\n",
Answer:'1'
  },{
Question:"In What Year Vampire Diaries Ended? \n1. 2016 \n2. 2017 \n3. 2018\n",
Answer:'2'
 },{
Question:"How Many Seasons Were There In Vampire Diaries? \n1. 2 \n2. 4\n3. 8\n",
Answer:'3'
},{
Question:"Who Played Stefan Salvatore In Vampire diaries? \n1. Paul Wesley \n2. Ian Somerhalder  \n3. Steven R. McQueen \n",
Answer:'1'
  },{
Question:"Who Played Elena Gilbert in Vampire Diaries ?  \n1. Kat Graham \n2. Nina Dobrev  \n3. Candice King \n",
Answer:'2'
  },{
Question:"Who Was Klaus Michaelson in Vampire Diaries ?  \n1. vampire \n2. wolf \n3. hybrid \n",
 Answer: '3'
},{
Question:"Who Played  Damon Salvatore in Vampire Diaries ? \n1. Paul Wesley \n2. Ian Somerhalder  \n3. Steven R. McQueen \n",
Answer:'2'
}]

for(var i=0;i<Questions.length;i++){
 var questionset=Questions[i]
 play(questionset.Question,questionset.Answer)
}
console.log(c2("Your Final Score ;"+score))

if (score>27){
  console.log(c6("You Have Beaten High Score.Send Me ScreenshotTo Update The Scoreboard"))
}

// input from 1to3 without enter