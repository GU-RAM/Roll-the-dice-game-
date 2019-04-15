/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// var scores, roundScore, activePlayer, dice;

// scores = [0, 0];
// roundScore = 0;
// activePlayer = 0;

// dice = Math.floor(Math.random() * 6) +1;

// // document.querySelector('#current-' + activePlayer).textContent = dice;

// document.querySelector('.dice ').style.display = 'none' ;

// function printName(name) {
// 	console.log('name: ' + name);
// }

// var geoLab = function (printer){
// 	printer('geoLab');
// }

// var print = function () {
// 	geoLab(printName);
// };
// setTimeout(print, 2000);

// var guro = (function () {
//     alert('statements');
// })();

// guro

let score;
let roundScore;
let activePlayer; 
let gamePlaying;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
	if (gamePlaying) {
	// random number
	let dice = Math.floor(Math.random() * 6) + 1;

    // roll the dice
	let diceDom = document.querySelector('.dice');
	diceDom.style.display = 'block';
	diceDom.src = 'dice-' + dice +'.png'; 

	if (dice !== 1 ) {
		// add score
		roundScore += dice;
		document.getElementById('current-' + activePlayer).textContent = roundScore;
	} else {
		// next player
		nextPlayer();
	}

}
});

document.querySelector('.btn-hold').addEventListener('click' , () => {
	if (gamePlaying) {
	// add current score to GLBL score
    scores[activePlayer] += roundScore;

    //  update the UI
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

    // check if the player won
	if (scores[activePlayer] >= 10) {
		document.querySelector('#name-' + activePlayer).textContent = 'Winner';
		document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
		document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
		gamePlaying = false;
	} else {
		nextPlayer();
	}
}
});


function nextPlayer() {
	roundScore = 0;
	document.getElementById('current-' + activePlayer).textContent = '0';

	activePlayer === 0? activePlayer = 1: activePlayer = 0; 
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');

	document.querySelector('.dice').style.display = 'none';
	};

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
	scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

	document.getElementById('score-0').textContent = 0;
	document.getElementById('current-0').textContent = 0;
	document.getElementById('score-1').textContent = 0;
	document.getElementById('current-1').textContent = 0;
	document.getElementById('name-0').textContent = 'Player1';
	document.getElementById('name-1').textContent = 'Player2';
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');
	document.querySelector('.player-0-panel').classList.add('active');
};