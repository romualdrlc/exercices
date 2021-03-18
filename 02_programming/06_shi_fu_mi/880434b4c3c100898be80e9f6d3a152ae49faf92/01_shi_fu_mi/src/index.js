const { read } = require("fs");
const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let nbGamePlay = 0;
let setWonPlayer = 0;
let setWonAIplayer = 0;
const clear = () => console.log("\x1B[2J\x1B[0f");
const rock = [
  "    ________        ",
  "---'   _ ,  |       ",
  "      (__(__)       ",
  "      (_____)       ",
  "      (____)        ",
  "---.__(___)         ",
];
const paper = [
  "      _______       ",
  "----'    ____)____  ",
  "            _______)",
  "            _______)",
  "           _______) ",
  "----.__________)    ",
];
const scissors = [
  "    ____           ",
  "---'    |________  ",
  "     (__)________) ",
  "        _________) ",
  "      (____)       ",
  "---.__(___)        ",
];

console.log("Welcome to ShiFuMi");

function aiPlayer(min, max) {
  return Math.random() * (max - min) + min;
}

function nbRandom () {
  const result = parseInt(aiPlayer(1,4)).toString();
  if (result === "1") {
    console.log("1");
    rock.forEach(element => console.log(element));
  }else if (result === "2") {
    console.log("2");
    paper.forEach(element => console.log(element));
  } else {
    console.log("3");
    scissors.forEach(element => console.log(element));
  }
  return result;
}

function compare (moveUtil,nbalea) {
  if ((moveUtil === "1" && nbalea === "3") || (moveUtil === "3" && nbalea === "2") || (moveUtil === "2" && nbalea === "1")) {
    console.log("PLAYER 1 won");
    nbGamePlay += 1;
    setWonPlayer +=1;
  } else if ((moveUtil === "1" && nbalea === "2") || (moveUtil === "3" && nbalea === "1") || (moveUtil === "2" && nbalea === "3")) {
    console.log("AI PLAYER won");
    nbGamePlay += 1;
    setWonAIplayer +=1;
  } else if ((moveUtil === "1" && nbalea === "1") || (moveUtil === "2" && nbalea === "2") || (moveUtil === "3" && nbalea === "3")){
    console.log("egalite y'a plus qu'a recommence");  
    nbGamePlay += 1;
  };
};

function loop(move) {
  const moveUtil = move;
  if (moveUtil === "1" || moveUtil === "2" || moveUtil === "3"){
    if (moveUtil === "1") {
      //clear();
      console.log("1");
      rock.forEach(element => console.log(element));
    }else if (moveUtil === "2") {
      //clear();
      console.log("2");
      paper.forEach(element => console.log(element));
    } else {
      //clear();
      console.log("3");
      scissors.forEach(element => console.log(element));
    }
    console.log("Rock Paper Scissors? [1, 2, 3]");
    const nbalea = nbRandom();
    compare(moveUtil,nbalea);
    reader.question("Play again ? (Y,n)", (yesorno) => {
      clear();
      if (yesorno === "n") {
        console.log(`Nombre de manche joué : ${nbGamePlay}\n le joueur1 a remporté ${setWonPlayer} fois et AIplayer a remporté ${setWonAIplayer} fois` );
        console.log("Thanks for the game 😉");
        reader.close();
      } else {
        reader.question("Please choose a move\n> ", loop);
      }
    });
  }else {
    reader.question("Ce n'est pas le bon choix\n Please choose a move\n> ", loop);
  }
};


reader.question("What is your name? ", (name) => {
  console.log(`Hello ${name}!`);
  console.log("Rock Paper Scissors? [1, 2, 3]");
  reader.question("Please choose a move\n> ", loop);
});

