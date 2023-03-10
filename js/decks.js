const L1_deck = document.getElementById('L1_deck');
const L2_deck = document.getElementById('L2_deck');
const L3_deck = document.getElementById('L3_deck');

function navigateToCardsPage(deckNumber) {
    const url = `cards.html?deck=${deckNumber}`;
    window.location.href = url;
}

L1_deck.addEventListener('click', () => {
    navigateToCardsPage(1);
});

L2_deck.addEventListener('click', () => {
    navigateToCardsPage(2);
});

L3_deck.addEventListener('click', () => {
    navigateToCardsPage(3);
});

const back_btn = document.getElementById('back_btn');

back_btn.addEventListener('click', () => {
    window.location.href = 'index.html';
})

// ORIGINAL CODE
// const L1_deck = document.getElementById('L1_deck');
// const L2_deck = document.getElementById('L2_deck');
// const L3_deck = document.getElementById('L3_deck');

// const back_btn = document.getElementById('back_btn');

// L1_deck.addEventListener('click', () => {
//   window.location.href = 'cards.html';
// });

// L2_deck.addEventListener('click', () => {
//     window.location.href = 'cards.html';
// });

// L3_deck.addEventListener('click', () => {
//     window.location.href = 'cards.html';
// });

// back_btn.addEventListener('click', () => {
//     window.location.href = 'index.html';
// })

