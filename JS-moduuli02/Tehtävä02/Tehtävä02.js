'use strict';

const participants = [];
const amountOfParticipants = parseInt(prompt(`Number of participants`));
for (let i = 0; i < amountOfParticipants; i++) {
  const participant = prompt('Name of the participant');
  participants.push(participant);
}
console.log(participants.sort());

const olElement = document.querySelector('ol');

participants.forEach(participant => {
  const liElement = document.createElement('li');
  liElement.textContent = participant;
  olElement.appendChild(liElement);
});