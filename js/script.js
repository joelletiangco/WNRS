// landing page
const playText = document.getElementById('play-text');
const playButton = document.getElementById('play-button');

playText.addEventListener('click', () => {
  window.location.href = 'decks.html';
});

playButton.addEventListener('click', () => {
  window.location.href = 'decks.html';
});

// deck view
const L1_deck = document.getElementById('L1_deck');
const L2_deck = document.getElementById('L2_deck');
const L3_deck = document.getElementById('L3_deck');

L1_deck.addEventListener('click', () => {
  window.location.href = 'cards.html';
  console.log('cards deck clicke!!')
});

L2_deck.addEventListener('click', () => {
    window.location.href = 'cards.html';
  });

L3_deck.addEventListener('click', () => {
window.location.href = 'cards.html';
});