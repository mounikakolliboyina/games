const dice1 = "┏━━━━━━┓\n┃      ┃\n┃  ⚪️  ┃\n┃      ┃\n┗━━━━━━┛\n";
const dice2 = "┏━━━━━━┓\n┃⚪️    ┃\n┃      ┃\n┃    ⚪️┃\n┗━━━━━━┛\n";
const dice3 = "┏━━━━━━┓\n┃⚪️    ┃\n┃  ⚪️  ┃\n┃    ⚪️┃\n┗━━━━━━┛\n";
const dice4 = "┏━━━━━━┓\n┃⚪️  ⚪️┃\n┃      ┃\n┃⚪️  ⚪️┃\n┗━━━━━━┛\n";
const dice5 = "┏━━━━━━┓\n┃⚪️  ⚪️┃\n┃  ⚪️  ┃\n┃⚪️  ⚪️┃\n┗━━━━━━┛\n";
const dice6 = "┏━━━━━━┓\n┃⚪️  ⚪️┃\n┃⚪️  ⚪️┃\n┃⚪️  ⚪️┃\n┗━━━━━━┛\n";

console.log("-------------welcome to 🐍🐍snake and ladder game 🪜🪜-------------");

const player1 = prompt("enter player 1 name");
const player2 = prompt("enter player 2 name");

console.log("All the best  '" + player1 + "'  and  '" + player2 + "'");

let player1Position = 0;
let player2Position = 0;


function checkForLadder(currentPostion) {
  switch (currentPostion) {
    case 4:
      return 56;
    case 12:
      return 50;
    case 14:
      return 55;
    case 22:
      return 58;
    case 41:
      return 79;
    case 54:
      return 88;
  }
}

function checkForSnake(currentPostion) {
  switch (currentPostion) {
    case 28:
      return 10;
    case 37:
      return 3;
    case 48:
      return 16;
    case 75:
      return 32;
    case 94:
      return 71;
    case 96:
      return 42;
  }
}

function isThereAnyThing(currentPosition) {
  const isItSnake = currentPosition === 28 || currentPosition === 37 || currentPosition === 48 || currentPosition === 75 || currentPosition === 94 || currentPosition === 96;

  const isItLadder = currentPosition === 4 || currentPosition === 12 || currentPosition === 14 || currentPosition === 22 || currentPosition === 41 || currentPosition === 54;

  if (isItSnake) {
    console.log("you caught by  🐍🐍");
    console.log();
    return checkForSnake(currentPosition);
  }

  if (isItLadder) {
    console.log("hurry! you get a ladder 🤩🪜🪜");
    console.log();
    return checkForLadder(currentPosition);
  }

  return currentPosition;
}


function getCurrentPostion(randomNumber, playerPosition) {
  let currentPostion = randomNumber + playerPosition;

  if (currentPostion > 100) {
    return isThereAnyThing(playerPosition);
  }
  return isThereAnyThing(currentPostion);
}

function delay() {
  for (let i = 0; i < 100000000; i++) {
  }
}

function dice() {
  console.clear();
  console.log(dice1);
  delay();
  console.clear();
  console.log(dice2);
  delay();
  console.clear();
  console.log(dice3);
  delay();
  console.clear();
  console.log(dice4);
  delay();
  console.clear();
  console.log(dice5);
  delay();
  console.clear();
  console.log(dice6);
  delay();
  console.clear();
}

function printCurrentDice(randomNumber) {
  switch (randomNumber) {
    case 1:
      console.log(dice1);
      break;
    case 2:
      console.log(dice2);
      break;
    case 3:
      console.log(dice3);
      break;
    case 4:
      console.log(dice4);
      break;
    case 5:
      console.log(dice5);
      break;
    case 6:
      console.log(dice6);
      break;
  }
  return;
}

function rollDice(player) {


  if (player === player1) {
    prompt("it's " + player1 + " turn 🎲");
    dice();
    let randomNumber = Math.ceil(Math.random() * 6);
    printCurrentDice(randomNumber);

    return getCurrentPostion(randomNumber, player1Position);
  }
  prompt("it's " + player2 + " turn 🎲");
  dice();
  let randomNumber = Math.ceil(Math.random() * 6);
  printCurrentDice(randomNumber);

  return getCurrentPostion(randomNumber, player2Position);
}

function gameStart() {
  console.log("----------------------------------------------------------");
  console.log(player1 + " : " + player1Position + "\t\t\t\t\t" + player2 + " : " + player2Position);
  console.log();

  // prompt("it's " + player1 + " turn 🎲");
  player1Position = rollDice(player1);
  console.log(player1 + " current position : " + player1Position );
  console.log();

  // prompt("it's " + player2 + " turn 🎲");
  player2Position = rollDice(player2);
  console.log(player2 + " current position : " + player2Position);
  console.log();



  if ((player1Position < 100 && player2Position < 100)) {
    return gameStart();
  }

  if (player1Position === 100) {
    console.log("---------🏆🏆" + player1 + " 🏆🏆 win the game----------");
  } else {
    console.log("---------🏆🏆" + player2 + " 🏆🏆 win the game----------")
  }

  return snakeAndLadder();
}


function rulesFunction() {
  console.log();
  console.log("Press ENTER To Roll The Dice");
  console.log("🐍🐍🐍🐍🐍");
  console.log("Be carefull at these Positions 28 ,37 ,48 , 57 ,94 ,96. These positions may make you lose ");
  console.log("🪜🪜🪜🪜🪜");
  console.log(" Remember these positions 4, 12, 14, 22, 41, 54.These positions may make you win");
  console.log();
  return snakeAndLadder();
}

function snakeAndLadder() {
  console.log("1.Help\n2.Play the game\n3.want to play again\n4.quit");

  const input = + prompt("choose above option:");
  switch (input) {
    case 1:
      return rulesFunction();
    case 2:
      return gameStart();
    case 3:
      return repeat();
    case 4:
      return "Thank you for playing 🙏🙏 ";
    default:
      return "InValid Input"
  }
}

function repeat() {
  player1Position = 0;
  player2Position = 0;

  return gameStart();
}

console.log(snakeAndLadder());
