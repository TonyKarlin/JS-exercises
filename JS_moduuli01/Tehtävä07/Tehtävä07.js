'use strict';

const rollAmount = parseInt(
    prompt('How many times would you like to roll the die?'));

let sum = 0

for (let i = 0; i < rollAmount; i ++) {
    let dieRoll = Math.floor(Math.random() * 6) + 1;
    sum += dieRoll
    console.log(`You roll the dice... and get a ${dieRoll}`)
}

console.log(`Total sum of die rolls: ${sum}`)
