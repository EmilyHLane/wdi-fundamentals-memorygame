//console.log("Up and running!");

//cards array with rank, suit, image face up
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

//cards in play array. cards (rank - king/queen) added here by flipCard function
var cardsInPlay = [];

var checkForMatch = function() {
	//check if flipped cards match eachother and show alert
	if (cardsInPlay[0] === cardsInPlay[1] || cardsInPlay[0] === cardsInPlay[2] || cardsInPlay[0] === cardsInPlay[3]) {
		console.log(cardsInPlay);
		alert("You found a match!");
		//location.reload();
	} else {
		alert("Sorry, try again.");
	}
};

//function called when user clicks on a card
var flipCard = function() {
	//assign the data id (array index) to card flipped and save as cardId
	var cardId = this.getAttribute('data-id');
	//add rank (king/queen) of card flipped to the cardsinplay array
	cardsInPlay.push(cards[cardId].rank);
	//run this function to check for matching flipped cards
	//change image source for card flipped, get image src from cards array
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length >= 2) {
		checkForMatch();
	} else {
		alert("flip another card");
	};
};

//first function called - creates board with backs of cards, assigns data-id (index number) to each card in cards array
var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	};
};

createBoard();


