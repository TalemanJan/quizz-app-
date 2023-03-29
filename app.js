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


