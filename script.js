let cards = [];
let total = 0;
let blackJack = false;
let stillAlive = false;

let myCards = document.getElementById('myCards');
let myTotal = document.getElementById('myTotal');
let msg = document.getElementById('msg');
// buttons
let startGame = document.getElementById('start');
let newCard = document.getElementById('new-card');
let newGame = document.getElementById('new-game');

//new game
newGame.addEventListener('click', beginGame);
// new card
newCard.addEventListener('click', getNewCard);
// startGame functionality
startGame.addEventListener('click', beginGame);
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

function getNewCard() {
    if (stillAlive === true && blackJack === false) {
        let card = getRandomCard()
        total += card;
        cards.push(card);
        displayGame();
    }
}

function beginGame() {
    stillAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    total = firstCard + secondCard;
    displayGame();
}

function displayGame() {
    myCards.textContent = 'Cards: '
    for (let i = 0; i < cards.length; i++) {
        myCards.textContent += cards[i] + ' ';
    }
    myTotal.textContent = "Total: " + total
    if (total < 21) {
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


