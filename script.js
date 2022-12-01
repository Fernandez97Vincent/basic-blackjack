let cards = [];
let total = 0;
let blackJack = false;
let stillAlive = false;

let myCards = document.getElementById('myCards');
let myTotal = document.getElementById('myTotal');

// buttons
let startGame = document.getElementById('start');


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
    myTotal.textContent = total
}


