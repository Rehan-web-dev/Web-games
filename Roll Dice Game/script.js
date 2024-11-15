const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const score1 = document.getElementById('score1');
const score2 = document.getElementById('score2');
const diceImages = document.querySelectorAll('.dice-images img');
const rollDice = document.getElementById('rollDice');
const diceRoll = document.getElementById('diceRoll');
const winner = document.getElementById('winner');
const restartGame = document.getElementById('restartGame');

let player1Score = 0;
let player2Score = 0;

rollDice.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    diceRoll.textContent = randomNumber;
    
    diceImages.forEach(img => img.style.display = 'none');
    document.getElementById(`dice${randomNumber}`).style.display = 'block';
    
    if (player1.classList.contains('active')) {
        player1Score += randomNumber;
        score1.textContent = player1Score;
        player1.classList.remove('active');
        player2.classList.add('active');
    } else {
        player2Score += randomNumber;
        score2.textContent = player2Score;
        player2.classList.remove('active');
        player1.classList.add('active');
    }
    
    if (player1Score >= 50) {
        winner.textContent = 'Player 1 Wins!';
        rollDice.disabled = true;
    } else if (player2Score >= 50) {
        winner.textContent = 'Player 2 Wins!';
        rollDice.disabled = true;
    }
});

restartGame.addEventListener('click', () => {
    player1Score = 0;
    player2Score = 0;
    score1.textContent = player1Score;
    score2.textContent = player2Score;
    diceRoll.textContent = 0;
    winner.textContent = '';
    rollDice.disabled = false;
    diceImages.forEach(img => img.style.display = 'none');
    player1.classList.add('active');
    player2.classList.remove('active');
});

player1.classList.add('active');