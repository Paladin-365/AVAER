let i = 2;
let f = 2;
let r = 0;
let d = 0;
let co = 0;
let bossHealth = 29;
let bossShield = 5;
let stagger = 0;
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function randomButton() {	
	const btn = document.getElementById('hiddenButton');
	const maxX = window.innerWidth - btn.offsetWidth - 100;
	const maxY = window.innerHeight - btn.offsetHeight - 100;
	const randomX = Math.floor(Math.random() * maxX);
	const randomY = Math.floor(Math.random() * maxY);
	
	btn.style.left = randomX + 'px';
	btn.style.top = randomY + 'px';
}

function hide_pg1() {
	firstPage.classList.add('hidden');
	secondPage.classList.remove('hidden');	
}

function hide_pg3() {
	thirdPage.classList.add('hidden');
	fourthPage.classList.remove('hidden');
}

function chance() {
	i = Math.floor(Math.random() * 10)+1;
	if (i == 3) {
		secondPage.classList.add('hidden');
		thirdPage.classList.remove('hidden');
	}
}

function changeButton() {
	f = Math.floor(Math.random() * 7)+1;
	if (f == 7) {
		textButton.textContent = ':D'
	} else {
		textButton.textContent = 'I change!'
	}
}

function hide_pg4() {
	if (f == 7) {
		fourthPage.classList.add('hidden');
		fifthPage.classList.remove('hidden');
	} else {
		alert("Try again! This is here so spam clicking doesn't work.")
	}
}

function moveTheButton() {
	const btn2 = document.getElementById('moveButton');
	const maxX2 = window.innerWidth - btn2.offsetWidth - 100;
	const maxY2 = window.innerHeight - btn2.offsetHeight - 100;
	const randomX2 = Math.floor(Math.random() * maxX2);
	const randomY2 = Math.floor(Math.random() * maxY2);
	
	btn2.style.left = randomX2 + 'px';
	btn2.style.top = randomY2 + 'px';
}

function hide_pg5() {
	fifthPage.classList.add('hidden');
	sixthPage.classList.remove('hidden');
	demo.textContent = '';
	correct.classList.add('overflowButton');
	incorrect.classList.add('overflowButton');
	startOver.classList.add('hidden');
	startOver2.classList.add('hidden');
}

function areYouSure() {
	if (r == 0) {
		demo.textContent = 'Hey, hold on a sec. Are you sure you want to pick that one?';
		r += 1;
		d = 0;
	} else if (r == 1) {
		demo.textContent = "Are you REALLY sure you want to pick that one? I'll give you a hint, I don't think that's the right answer...";
		r += 1;
	} else if (r == 2) {
		demo.textContent = "Maybe just stop, and think it over. I'm telling you, you are VERY LIKELY WRONG.";
		r += 1;
	} else if (r == 3) {
		demo.textContent = "Alright, fine. I'll just tell you. That's the wrong answer. Pick the other one.";
		r += 1;
	} else if (r == 4) {
		demo.textContent = "Stop it! Just pick the right answer!";
		r += 1;
	} else if (r == 5) {
		demo.textContent = "Fine. Last warning: Are you really sure you want to do that?";
		r += 1;
	} else if (r == 6) {
		demo.textContent = "I warned you. Have fun starting over.";
		correct.classList.remove('overflowButton');
		incorrect.classList.remove('overflowButton');
		correct.classList.add('hidden');
		incorrect.classList.add('hidden');
		startOver.classList.remove('hidden');
		r -= 6;
	}
}

function areYouSure2() {
	if (d == 0) {
		demo.textContent = "Wow! Good job! You're good at math!";
		d += 1;
		r = 0;
	} else if (d == 1) {
		demo.textContent = "Yep. That's right. I said that.";
		d += 1;
	} else if (d == 2) {
		demo.textContent = "I know you want to move on, but that wouldn't be annoying enough.";
		d += 1;
	} else if (d == 3) {
		demo.textContent = "Yep. Just keep clicking the button.";
		d += 1;
	} else if (d == 4) {
		demo.textContent = "Good job. Just a couple more times.";
		d += 1;
	} else if (d == 5) {
		demo.textContent = "One more. You're almost there!";
		d += 1;
	} else if (d == 6) {
		demo.textContent = "Ha! You got it wrong! Now you have to go back to the beginning!";
		correct.classList.remove('overflowButton');
		correct.classList.add('hidden');
		incorrect.classList.remove('overflowButton');
		incorrect.classList.add('hidden');
		startOver2.classList.remove('hidden');
		d -= 6;
	}
}

function theyTrickedHim() {
	startOver2.classList.add('hidden');
	nextPuzzle.classList.remove('hidden');
	demo.textContent = "Gottem. I bet you thought I was serious!";
}

function startOVER() {
	sixthPage.classList.add('hidden');
	firstPage.classList.remove('hidden');
}

function Skip() {
	firstPage.classList.add('hidden');
	seventhPage.classList.remove('hidden');
}

function hide_pg6() {
	sixthPage.classList.add('hidden');
	seventhPage.classList.remove('hidden');
}

async function staggerBoss() {
	if (!seventhPage.classList.contains('hidden')) {
		stagger += 1;
		stg.textContent = ('The Boss is tired! Attack!');
		await wait(3000);
		stagger -= 1;
		bossShield = 5;
		document.getElementById('finalBoss').style.backgroundColor='rgba(255 225 87/0.5)';
		shield.textContent = ('5');
		stg.textContent = ('');
	}
}

function finalBossButton() {
	if (stagger === 0) {
	if (bossHealth > 0 || bossShield > 0) {
		const btn3 = document.getElementById('finalBoss');
		const maxX3 = window.innerWidth - btn3.offsetWidth - 100;
		const maxY3 = window.innerHeight - btn3.offsetHeight - 100;
		const randomX3 = Math.floor(Math.random() * maxX3);
		const randomY3 = Math.floor(Math.random() * maxY3);
	
		btn3.style.left = randomX3 + 'px';
		btn3.style.top = randomY3 + 'px';
	}
	}
}

function finalBossHealth() {
	if (bossHealth > 0 && bossShield === 0) {
		bossHealth -= 1;
		console.log(bossHealth);
		health.textContent = (bossHealth + 1);
	} else if (bossShield > 0) {
		bossShield -= 1;
		shield.textContent = (bossShield);
		if (bossShield === 0) {
			document.getElementById('finalBoss').style.backgroundColor="rgb(150, 125, 125)";
		}
	} else if (bossHealth === 0) {
		seventhPage.classList.add('hidden');
		eighthPage.classList.remove('hidden');
	}
}

window.onload = randomButton;
start.onclick = hide_pg1;
Button.onclick = chance;
hiddenButton.onclick = hide_pg3;
setInterval(changeButton, 750);
setInterval(moveTheButton, 600);
textButton.onclick = hide_pg4;
moveButton.onclick = hide_pg5;
correct.onclick = areYouSure2;
skip.onclick = Skip;
startOver.onclick = startOVER;
incorrect.onclick = areYouSure;
startOver2.onclick = theyTrickedHim;
nextPuzzle.onclick = hide_pg6;
setInterval(finalBossButton, 400);
setInterval(staggerBoss, 10000);
finalBoss.onclick = finalBossHealth;