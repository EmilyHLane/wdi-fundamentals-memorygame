//console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[2];
var cardTwo = cards[3];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);

if (cardOne === cardTwo) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}

