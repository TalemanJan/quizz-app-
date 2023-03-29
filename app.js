var questions = [ 
	{
		question: "how many planets are in our solar system?",
		answer: 9
	},
	{
		question: "what is the position of the earth in our solar system ?",
		answer: 3
	},
	{
		question: "what is the first planet in our solar system?",
		answer: "mercury"
	},
	{
		question: "what is the last planet in our solar system?",
		answer: "pluto"
	},
	{
		question: "what is the biggest planet in our solar system?",
		answer: "jupiter"
	}
]

for(i = 0; i < questions.length; i++) {
	q = questions[i].question
	document.getElementById('question' + [i]).textContent = q
}

function testResults() {
	var correct = 0;
	var incorrect = 0;
	for(i = 0; i < questions.length; i++) {	
		var answer = questions[i].answer
		var guess = document.getElementById('answer' + [i]).value
		var questionSpot = document.getElementById('question' + [i])
		if(answer == guess) {
			questionSpot.className = 'correct'
			correct++
		} else {
			questionSpot.className = 'incorrect'
			incorrect++
		}
	}
	document.getElementById('correct').textContent = correct
	document.getElementById('incorrect').textContent = incorrect
}

