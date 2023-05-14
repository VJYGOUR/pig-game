'use strict';
const switching = function () {
  currentSfirst = 0;
  document.querySelector(`#current--${activeplayer}`).textContent =
    currentSfirst;
  playeractive0.classList.toggle('player--active');
  playeractive1.classList.toggle('player--active');
  activeplayer = activeplayer === 0 ? 1 : 0;
};
const newGame = function () {
  currentSfirst = 0;
  Score0.textContent = currentSfirst;
  Score1.textContent = currentSfirst;

  diceE.classList.add('hidden');
  playeractive0.classList.add('player--active');
  playeractive1.classList.remove('player--active');
  playeractive0.classList.remove('player--winner');
  playeractive1.classList.remove('player--winner');
  current2.textContent = currentSfirst;
  current1.textContent = currentSfirst;
  activeplayer = 0;
  playing = true;
};
let playing = true;
const diceE = document.querySelector('.dice');
let currentSfirst = 0;
let activeplayer = 0;
diceE.classList.add('hidden');
const newButton = document.querySelector('.btn--new');
const holdButton = document.querySelector('.btn--hold');
const diceButton = document.querySelector('.btn--roll');
const current1 = document.querySelector('#current--0');
const current2 = document.querySelector('#current--1');
const playeractive0 = document.querySelector('.player--0');
const playeractive1 = document.querySelector('.player--1');
const Score0 = document.querySelector('#score--0');
Score0.textContent = 0;
const Score1 = document.querySelector('#score--1');
Score1.textContent = 0;

diceButton.addEventListener('click', function () {
  if (playing) {
    diceE.classList.remove('hidden');
    const randomNumber = Math.trunc(Math.random() * 6) + 1;

    diceE.src = `dice-${randomNumber}.png`;
    currentSfirst = currentSfirst + randomNumber;
    if (randomNumber !== 1) {
      document.querySelector(`#current--${activeplayer}`).textContent =
        currentSfirst;
    } else {
      switching();
    }
  }
});
holdButton.addEventListener('click', function () {
  if (playing) {
    document.querySelector(`#score--${activeplayer}`).textContent =
      Number(document.querySelector(`#score--${activeplayer}`).textContent) +
      currentSfirst;
    if (
      Number(document.querySelector(`#score--${activeplayer}`).textContent) >=
      100
    ) {
      diceE.classList.add('hidden');
      document
        .querySelector(`.player--${activeplayer}`)
        .classList.add('player--winner');
      playing = false;
    } else {
      switching();
    }
  }
});
newButton.addEventListener('click', newGame);
