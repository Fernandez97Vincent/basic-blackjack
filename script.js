let cards = [];
let total = 0;
let blackJack = false;
let stillAlive = false;


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
    
}
