'use strict';

function rollADice() {
  return Math.floor(Math.random() * 6 + 1);
}

function main() {
  const diceRolls = [];
  while (true) {
    let diceRoll = rollADice();
    if (diceRoll !== 6) {
      diceRolls.push(diceRoll);
      console.log(diceRoll);
    } else {
      break;
    }
  }
  const ulElement = document.querySelector('ul');
  diceRolls.forEach(diceRoll => {
    const liElement = document.createElement('li');
    liElement.textContent = diceRoll;
    ulElement.appendChild(liElement);
  });
}

main();

