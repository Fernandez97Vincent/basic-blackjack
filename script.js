let cards = [];
// dealer should have their own array of cards
let dCards = [];
let total = 0;
let dTotal = 0;
let blackJack = false;
let stillAlive = false;
// notes to self -------------------------
/*
dealer shouldn't render new cards unless player hits STAY
Dealer has to get new card under 16 -- automated
once dealer total > 16 -- stop game
once dealer stops, render out the winner

------------------ for credits ---------------
1000 base credits - player can choose bets 
*/

let myCards = document.getElementById('myCards');
let myTotal = document.getElementById('myTotal');
let msg = document.getElementById('msg');
let msgDealer = document.getElementById('msg2');
let tokens = document.getElementById('tokens');
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
// should add turns, use stay button for that
stay.addEventListener('click', dealerAuto);

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

function dealerGetRandom() {
    let dRandom = Math.floor(Math.random() * 13) + 1;
    if (dRandom > 10) {
        return 10;
    }
    else if (dRandom === 1) {
        return 11;
    }
    else {
        return dRandom;
    }
}

// call dealer auto once user hits stay button
function dealerAuto() {
    if (dTotal < 17 && blackJack === false) {
        let dCard = dealerGetRandom();
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
    let dFirstCard = dealerGetRandom();
    let dSecondCard = dealerGetRandom();
    cards = [firstCard, secondCard];
    total = firstCard + secondCard;
    dCards = [dFirstCard, dSecondCard];
    dTotal = dFirstCard + dSecondCard;
    displayGameDealer();
    setTimeout(() => {
        displayGame();
    }, 1000)
}

// function useTokens() {
//     tokens.innerHtml = '100';
//     let tokens = 100;
//     --tokens;
//     return tokens;
// }

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
        msg.textContent = "Dealer wins, try again";
    }
}

// dealer turn
function displayGameDealer() {
    dealerCards.textContent = 'Cards: '
    for (let i = 0; i < dCards.length; i++) {
        dealerCards.textContent += dCards[i] + ' ';
    }
    dealerTotal.textContent = "Total: " + dTotal;
    console.log(dTotal);
    // for loop to automate the dealerGetRandom
    
    if (dTotal < 17 && total > dTotal) {
        // dealerAuto();
        blackJack = false;
        dealerAuto();
        

    }
    else if (dTotal === 21) {
        blackJack = true;
        msg.textContent = "Dealer Wins";
     
    }

    else {
        msgDealer.textContext = "Player wins!"
    }
}

