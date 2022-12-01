let cards = [];
// dealer should have their own array of cards
let dCards = [];
let total = 0;
let dTotal = 0;
let blackJack = false;
let stillAlive = false;

let myCards = document.getElementById('myCards');
let myTotal = document.getElementById('myTotal');
let msg = document.getElementById('msg');
// buttons
const startGame = document.getElementById('start');
const newCard = document.getElementById('new-card');
const newGame = document.getElementById('new-game');
const stay = document.getElementById('stay');

// dealer
const dealerCards = document.getElementById('dealer-card');
const dealerTotal = document.getElementById('dealer-total');
// DEALER LOGIC
// Dealer first, create a stay button

//new game
newGame.addEventListener('click', beginGame);
// new card
newCard.addEventListener('click', getNewCard);
// startGame functionality
startGame.addEventListener('click', beginGame);

// dealer turn
function displayGameDealer() {
    for (let i = 0; i < dCards.length; i++) {
        dealerCards.textContent += dCards[i] + ' ';
    }
    dealerTotal.textContent = "Total: " + dTotal;
    console.log(dTotal);
    if (dTotal < 21) {
        blackJack = false;
        dealerAuto();
        return;
    }
    else if (dTotal === 21) {
        blackJack === true;
        msg.textContent = "Dealer Wins";
        return;
    }
}
// start by grabbing a random card
function getRandomCard() {
    // use math.random
    let randomCard = Math.floor(Math.random() * 13) + 1;
    if (randomCard > 10) {
        return 10;
    }
    else if (randomCard === 1) {
        return 11;
    }
    else {
        return randomCard;
    }
}

function dealerAuto() {
    if (stillAlive === true && blackJack === false) {
        let dCard = getRandomCard();
        dTotal += dCard;
        dCards.push(dCard);
        displayGameDealer();
    }
}

function getNewCard() {
    if (stillAlive === true && blackJack === false) {
        let card = getRandomCard();
        total += card;
        cards.push(card);
        displayGame();
        
    }
}

function beginGame() {
    stillAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    let dFirstCard = getRandomCard();
    let dSecondCard = getRandomCard();
    cards = [firstCard, secondCard];
    total = firstCard + secondCard;
    dCards = [dFirstCard, dSecondCard];
    dTotal = dFirstCard + dSecondCard;
    displayGameDealer();
    setTimeout(() => {
        displayGame();
    }, 1000)
}

function displayGame() {
    myCards.textContent = 'Cards: '
    for (let i = 0; i < cards.length; i++) {
        myCards.textContent += cards[i] + ' ';
    }
    myTotal.textContent = "Total: " + total
    if (total < 21 && dTotal < 21) {
        msg.textContent = "Do you want to draw another card"
        blackJack = false;
    }
    else if (total === 21) {
        msg.textContent = "Blackjack! Do you want to play again?"
        blackJack = true;
    }
    else {
        msg.textContent = "You lose, try again";
    }
}


