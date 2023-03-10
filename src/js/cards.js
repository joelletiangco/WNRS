const L1_cards = [
    {id: 1, question: "If you were to buy me a present, knowing nothing about me other than what I look like, what would it be?"},
    {id: 2, question: "Do I look kind? Explain."},
    {id: 3, question: "Do I seem like more of a creative or analytical type? Explain."},
    {id: 4, question: "Finish the sentence: Just by looking at you I'd think _____________."},
    {id: 5, question: "What was your first impression of me?"},
    {id: 6, question: "Make an assumption about me."},
    {id: 7, question: "What about me intrigues you?"},
    {id: 8, question: "As a child, what do you think I wanted to be?"},
    {id: 9, question: "What compliment do you think I hear the most?"},
    {id: 10, question: "Do you think I'm usually early on time or late to events. Explain."},
    {id: 11, question: "Do I intimidate you? Why or why not?"},
    {id: 12, question: "Wildcard: Write down your number one goal for the next month. Compare."},
    {id: 13, question: "What reality show do you think I'm most likely to binge watch? Explain."},
    {id: 14, question: "What's the first thing you noticed about me?"},
    {id: 15, question: "Do I seem like someone who would get a name tattooed on myself? Why or why not?"},
    {id: 16, question: "How would you describe what you think my type is in three words?"},
    {id: 17, question: "Between the two of us, who seems like the better texter? Explain."},
    {id: 18, question: "What does my instagram tell you about me?"},
    {id: 19, question: "Do you think I was popular in school? Explain."},
    {id: 20, question: "Do you think I fall in love easily why or why not."},
    {id: 21, question: "Do you think I ever checked an ex's phone for evidence?"},
    {id: 22, question: "WILDCARD: Create your own question."},
    {id: 23, question: "Am I someone you typically connect with?"},
    {id: 24, question: "What's your favorite song lyric that comes to your mind from the top of your head?"},
    {id: 25, question: "What is your earliest recollection of happiness?"},
    {id: 26, question: "LEVEL COMPLETE."},
    // {id: 27, question: ""},
    // {id: 28, question: ""},
    // {id: 29, question: ""},
    // {id: 30, question: ""},
    // {id: 32, question: ""},
  ];

const L2_cards = [
    {id: 1, question: "What's been your happiest memory this past year?"},
    {id: 2, question: "Have you changed your mind about anything recently?"},
    {id: 3, question: "What has been your earliest recollection of happiness?"},
    {id: 4, question: "What lesson took you the longest to un-learn?"},
    {id: 5, question: "Are you lying to yourself about anything?"},
    {id: 6, question: "What questions are you trying to answer most in your life right now?"},
    {id: 7, question: "When was the last time you surprised yourself?"},
    {id: 8, question: "What title would you give this chapter in your life?"},
    {id: 9, question: "What do you crave more of?"},
    {id: 10, question: "Finish the sentence: Strangers would describe me as ______ only I know that I am _______."},
    {id: 11, question: "What's the worst pain you have ever been in that wasn't physical?"},
    {id: 12, question: "What would your younger self not believe about your life today?"},
    {id: 13, question: "How would you describe the feeling of being in love with one word?"},
    {id: 14, question: "What are you more afraid of: failure or success and why?"},
    {id: 15, question: "What is a dream you let go of?"},
    {id: 16, question: "If you could get to know someone in your life on a deeper level who would it be and why?"},
    {id: 17, question: "What part of your life works what part of your life hurts?"},
    {id: 18, question: "How can you become a better person?"},
    {id: 19, question: "Do you think the image you have of yourself matches the image other people see you as?"},
    {id: 20, question: "Are you missing anyone right now? Do you think they miss you to?"},
    {id: 21, question: "Do you think I intimidate others? Why or why not?"},
    {id: 22, question: "When you are asked how are you, how often do you answer truthfully?"},
    {id: 23, question: "How are you, really?"},
    {id: 24, question: "What's the most unexplainable thing that happened to you?"},
    {id: 25, question: "If you could have it your way: whom would you be with? Where would you be? What would you be doing?"},
    {id: 26, question: "Describe your perfect day!"},
    {id: 27, question: "How old do you feel emotionally?"},
    {id: 28, question: "What could you have done better in previous relationships?"},
    {id: 29, question: "What did the people who raised you, teach you about love?"},
    {id: 30, question: "Describe your perfect date."},
    {id: 32, question: "What are you passionate about?"},
    {id: 31, question: "What are you not currently giving enough time to?"},
    {id: 33, question: "Wildcard: Draw your current mood. Compare."},
    {id: 34, question: "Wildcard: Share your most played song at this moment."},
    {id: 35, question: "Are you closer to your mom or dad?"},
    {id: 36, question: "Are you proud of yourself?"},
    {id: 37, question: "Describe a dream that you've had recently."},
    {id: 38, question: "Do you agree that people never change, they just show their true colors?"},
    {id: 39, question: 'Do you believe in "right person, wrong timing"?'},
    {id: 40, question: "Do you believe in fate, or do you think that things happen because of our decisions?"},
    {id: 41, question: "Do you believe in second chances? Why or why not?"},
    {id: 42, question: "Do you believe that the present is really better than in the past?"},
    {id: 43, question: "Do you prefer someone cheering you up, or being left alone when you're in a foul mood?"},
    {id: 44, question: "Have you ever fallen in love?"},
    {id: 45, question: "Have you experienced losing someone you care a lot about?"},
    {id: 46, question: "How important is trust in a relationship?"},
    {id: 47, question: "If you could go back in time, would you change something from your past?"},
    {id: 48, question: "If you could go back to an ex or someone you talked to, would you?"},
    {id: 49, question: "If you could, what would you change about yourself?"},
    {id: 50, question: "Is there anyone you think you've hurt?"},
    {id: 51, question: "Is there anything you regret not doing?"},
    {id: 52, question: 'Is there somebody you would consider "the one who got away"?'},
    {id: 53, question: "Is there someone in your life you can always run to?"},
    {id: 54, question: "What are the two greatest lessons you've learned from a past relationship?"},
    {id: 55, question: "What are you in denial about?"},
    {id: 56, question: "What breaks your heart?"},
    {id: 57, question: "What do you think is the dumbest thing you've ever done?"},
    {id: 58, question: "What do you want more than anything in your life?"},
    {id: 59, question: "What do you want to achieve by the time you die?"},
    {id: 60, question: "What emotion would you say you experience the most?"},
    {id: 61, question: "What is one positive and negative thing about me?"},
    {id: 62, question: "What is one lesson have you learned the hard way?"},
    {id: 63, question: "What is the worst lie you have ever told?"},
    {id: 64, question: "What is your biggest regret?"},
    {id: 65, question: "What is your biggest turn-off?"},
    {id: 66, question: "What life-changing event have you experienced?"},
    {id: 67, question: "What makes you the happiest?"},
    {id: 68, question: "What questions would you most like the answer to?"},
    {id: 69, question: "What was the lowest point in your life?"},
    {id: 70, question: "What was the most stressful experience of your life?"},
    {id: 71, question: "What's one thing you're insecure about?"},
    {id: 72, question: "What's something you love about yourself?"},
    {id: 73, question: "When was the last time you cried and why?"},
    {id: 74, question: "Which is the better option: being a heartbreaker or being heartbroken?"},
    {id: 75, question: "Who is someone that has changed your life the most?"},
    {id: 76, question: "What is something that you've never told anyone?"},
    {id: 77, question: "LEVEL COMPLETE."},
  ];
  

const L3_cards = [
    {id: 1, question: "What about me surprised you?"},
    {id: 2, question: "What do you think our most important similarities are?"},
    {id: 3, question: "What do you think is one thing I could do that would drastically improve my life?"},
    {id: 4, question: "How would you describe me to a stranger?"},
    {id: 5, question: "What do I need to hear right now?"},
    {id: 6, question: "What is a lesson you will take away from our conversation?"},
    {id: 7, question: "What can I help you with?"},
    {id: 8, question: "What do you think do I fear the most?"},
    {id: 9, question: "Where am I most qualified to give advice about?"},
    {id: 10, question: "What about me is the hardest for you to understand?"},
    {id: 11, question: "What do you think I regret the most?"},
    {id: 12, question: "Admit something."},
    {id: 13, question: "What parts of yourself do you see in me?"},
    {id: 14, question: "How does one earn your vulnerability?"},
    {id: 15, question: "What do you recommend I should let go of?"},
    {id: 16, question: "What has this conversation taught you about yourself?"},
    {id: 17, question: "What do you think my defining characteristic is?"},
    {id: 18, question: "What question were you most afraid to answer?"},
    {id: 19, question: "Why do you think we met?"},
    {id: 20, question: "When this game is over, what will be something you will remember about me?"},
    {id: 21, question: "What do you think my weakness is?"},
    {id: 22, question: "How do our personalities complement each other?"},
    {id: 23, question: "What do you think I should know about myself that perhaps I'm unaware of?"},
    {id: 24, question: "What do you admire most about me?"},
    {id: 25, question: "Do you believe everyone has a calling? If so, do you think I've found mine?"},
    {id: 26, question: "What answer of mine made you light up?"},
    {id: 27, question: "What's the most attractive quality about me that isn't physical?"},
    {id: 28, question: "Am I like you expected me to be?"},
    {id: 29, question: "Wildcard: Who's been on your mind lately? Send them a text letting them know you're thinking of them. Both players."},
    {id: 30, question: "What do you think I consider my biggest achievement?"},
    {id: 31, question: "Wildcard: Write down the three most important things to you in a relationship (30 sec) Compare."},
    {id: 32, question: "LEVEL COMPLETE."},
    // {id: 33, question: ""},
    // {id: 34, question: ""},
    // {id: 36, question: ""},
    // {id: 37, question: ""},
    // {id: 38, question: ""},
]

const urlParams = new URLSearchParams(window.location.search);
const deckNumber = urlParams.get("deck");
let level_text = 'Level 1 ( Perception )';

if (deckNumber == 1) {
    currDeck = L1_cards;
    level_text = 'Level 1 ( Perception )';
} else if (deckNumber == 2) {
    currDeck = L2_cards;
    level_text = 'Level 2 ( Connection )';
} else {
    currDeck = L3_cards;
    level_text = 'Level 3 ( Reflection )';
}

numCards = currDeck.length

// select the items
const qText = document.getElementById('q-text');
const levelText = document.getElementById('level-text');

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

const back_btn = document.getElementById('back_btn');

back_btn.addEventListener('click', () => {
    window.location.href = 'decks.html';
})

// see if it's working
// prevBtn.addEventListener('click', function () {
//   console.log('prev button CLICKED')
// });

// nextBtn.addEventListener('click', function () {
//   console.log('next button CLICKED')
// });

let currID = 0;

// load initial card
window.addEventListener('DOMContentLoaded', function () {
    const card = currDeck[currID];
    qText.textContent = card.question;
    levelText.textContent = level_text;
    updateProgressBar();
})

function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const progressWidth = ((currID + 1) / numCards) * 100;
    progressBar.style.width = `${progressWidth}%`;
}

function displayCard(currID) {
    const card = currDeck[currID];
    qText.textContent = card.question;
    levelText.textContent = level_text;
    updateProgressBar();
}

function displayNextCard() {
    currID++;
    if (currID > currDeck.length - 1) {
        currID = 0;
    }
    displayCard(currID);
    updateProgressBar();
}

function displayPrevCard() {
    currID--;
    if (currID < 0) {
        currID = currDeck.length - 1;
    }
    displayCard(currID);
    updateProgressBar();
}

nextBtn.addEventListener('click', displayNextCard);
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        displayNextCard();
    }
});

prevBtn.addEventListener('click', displayPrevCard);
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        displayPrevCard();
    }
});


// const L1_cards = [
//     {id: 1, question: ""},
//     {id: 2, question: ""},
//     {id: 3, question: ""},
//     {id: 4, question: ""},
//     {id: 5, question: ""},
//     {id: 6, question: ""},
//     {id: 7, question: ""},
//     {id: 8, question: ""},
//     {id: 9, question: ""},
//     {id: 10, question: ""},
//     {id: 11, question: ""},
//     {id: 12, question: ""},
//     {id: 13, question: ""},
//     {id: 14, question: ""},
//     {id: 15, question: ""},
//     {id: 16, question: ""},
//     {id: 17, question: ""},
//     {id: 18, question: ""},
//     {id: 19, question: ""},
//     {id: 20, question: ""},
//     {id: 21, question: ""},
//     {id: 22, question: ""},
//     {id: 23, question: ""},
//     {id: 24, question: ""},
//     {id: 25, question: ""},
//     {id: 26, question: ""},
//     {id: 27, question: ""},
//     {id: 28, question: ""},
//     {id: 29, question: ""},
//     {id: 30, question: ""},
//     {id: 32, question: ""},
//     {id: 31, question: ""},
//     {id: 33, question: ""},
//     {id: 34, question: ""},
//     {id: 35, question: ""},
//     {id: 36, question: ""},
//     {id: 37, question: ""},
//     {id: 38, question: ""},
//     {id: 39, question: ""},
//     {id: 40, question: ""},
//     {id: 41, question: ""},
//     {id: 42, question: ""},
//     {id: 43, question: ""},
//     {id: 44, question: ""},
//     {id: 45, question: ""},
//     {id: 46, question: ""},
//     {id: 47, question: ""},
//     {id: 48, question: ""},
//     {id: 49, question: ""},
//     {id: 50, question: ""},
//     {id: 51, question: ""},
//     {id: 52, question: ""},
//     {id: 53, question: ""},
//     {id: 54, question: ""},
//     {id: 55, question: ""},
//     {id: 56, question: ""},
//     {id: 57, question: ""},
//     {id: 58, question: ""},
//     {id: 59, question: ""},
//     {id: 60, question: ""},
//     {id: 61, question: ""},
//     {id: 62, question: ""},
//     {id: 63, question: ""},
//     {id: 64, question: ""},
//     {id: 65, question: ""}
//   ];
  