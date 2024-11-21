console.log("------------------Welcome to 🪨 ROCK 🗒️ PAPER ✂️ SCISSOR game------------------");

function printComputerChoice(randomInput) {
  if (randomInput === 1) {
    console.log("\ncomputer choose  : 🪨 \n");
  }

  if (randomInput === 2) {
    console.log("\ncomputer choose : 🗒️\n ");
  }

  if (randomInput === 3) {
    console.log("\ncomputer choose  : ✂️ \n");
  }
}

function rock(randomInput) {
  if (randomInput === 2) {
    console.log("\n😔sorry your rock is surrounded by computer's paper 😔");
  } else {
    console.log("\n🤩hurry ....you break the computer's scissor 🤩");
  }
}

function paper(randomInput) {
  if (randomInput === 1) {
    console.log("\n😊 hurry .... your paper surround's computer's rock 😊");
  } else {
    console.log("\n😄so sad computer's scissor cut your paper and make paper boat 😄");
  }
}

function scissor(randomInput) {
  if (randomInput === 2) {
    console.log("\n😁hurry  your  scissor cut computer's paper 😁");
  } else {
    console.log("\n😞oh nooo computer's rock break your scissor 😔");
  }
}

function startGame() {
  console.log("\n1.rock\n2.paper\n3.scissor\n");
  const userInput = +prompt("choose the above options");

  const randomInput = Math.ceil((Math.random() * 10) % 3);

  printComputerChoice(randomInput);

  if (userInput === randomInput) {
    console.log("\nIt's a TIE!!!!!!");

  } else {

    if (userInput === 1) {
      rock(randomInput);
    }

    if (userInput === 2) {
      paper(randomInput);
    }

    if (userInput === 3) {
      scissor(randomInput);
    }
  }


  rockPaperScissor();
}

function helpFunction() {

  console.log("If you want to select 🪨 press 1");
  console.log("If you want to select 🗒️ press 2");
  console.log("If you want to select ✂️ press 3");

  rockPaperScissor();
}

function exit() {
  console.log("thank you playing");
}

function rockPaperScissor() {
  console.log("\n1.help\n2.play\n3.exit\n");
  const input = +prompt("choose the above options");

  switch (input) {
    case 1:
      return helpFunction();
    case 2:
      return startGame();
    case 3:
      return exit();
    default:

      return "Invalid input"

  }
}

console.log(rockPaperScissor());
