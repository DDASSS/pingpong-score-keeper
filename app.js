const p1 = {
	score: 0,
	button: document.querySelector('#p1Btn'),
	display: document.querySelector('#p1Display')
};
const p2 = {
	score: 0,
	button: document.querySelector('#p2Btn'),
	display: document.querySelector('#p2Display')
};
const resetBtn = document.querySelector('#reset');

const winScoreSelect = document.querySelector('#winScoreSelect');

let winningScore = 3;
let gameOver = false;

function updateScores(p1, p2) {
	if (!gameOver) {
		p1.score += 1;

		if (p1.score === winningScore) {
			gameOver = true;
			p1.display.classList.add('has-text-success');
			p2.display.classList.add('has-text-danger');
			p1.button.disabled = true;
			p2.button.disabled = true;
		}
		p1.display.textContent = p1.score;
	}
}

p1.button.addEventListener('click', function() {
	updateScores(p1, p2);
});

p2Btn.addEventListener('click', function() {
	updateScores(p2, p1);
});

winScoreSelect.addEventListener('change', function() {
	winningScore = parseInt(this.value);
	reset();
});

resetBtn.addEventListener('click', reset);

function reset() {
	gameOver = false;
	for (let p of [ p1, p2 ]) {
		p.score = 0;
		p.display.textContent = p.score;
		p.display.classList.remove('has-text-success', 'has-text-danger');
		p.button.disabled = false;
	}
}
