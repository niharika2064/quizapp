const questions = [
	{
		question:"what does HTML stand for?",
		answers:[
			{ text:"Hyper Text Markup Language", correct: true},
			{ text:"Home Tool Markup Language", correct: false },
			{ text:"Hyperlinks and Text Markup Language", correct: false },
			{ text:"Home Text Markup Language", correct: false },
		]
	},
	{
		question:"who is making the Web standards?",
		answers:[
			{ text:"Google", correct: false },
			{ text:"Microsoft", correct: false },
			{ text:"The World wide Web Consortium", correct: true },
			{ text:"mozilla", correct: false },
		]
	},
	{
		question:"choose the correct HTML element for the largest heading:?",
		answers:[
			{ text:'h1', correct: true },
			{ text:"h6", correct: false },
			{ text:"heading", correct: false },
			{ text:"head", correct: false },
		]
	},
	{
		question:"choose the correct HTML element to define important text?",
		answers:[
			{ text:"b", correct: false },
			{ text:"strong", correct: true },
			{ text:"i", correct: false },
			{ text:"important", correct: false },
		]			
	},
	{
		question:"which character is used to indicate an end tag?",
		answers:[
			{ text:"<", correct: false },
			{ text:"*", correct: false },
			{ text:"^", correct: false },
			{ text:"/", correct: true },
		]
	},
    {
        question:"what is css?",
		answers:[
			{ text:"Cascading Style Sheet", correct: true },
			{ text:"Cascading Storng Sheet", correct: false },
			{ text:"Cascading Sheet Style", correct: false },
			{ text:"Cascading Storage Sheet", correct: false },
		]			
	},
    {
        question:"what are the different types of selectors in css?",
		answers:[
			{ text:"5", correct: false },
			{ text:"7", correct: false },
			{ text:"6", correct: true },
			{ text:"8", correct: false },
		]			
	},
    {
        question:"In which year css was developed ?",
		answers:[
			{ text:"1995", correct: false },
			{ text:"1997", correct: true },
			{ text:"1996", correct: false},
			{ text:"1998", correct: false },
		]			
	}
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
	currentQuestionIndex = 0;
	score = 0;
	nextButton.innerHTML = "Next";
	showQuestion();
}
function showQuestion(){
	resetState();
	let currentQuestion = questions[currentQuestionIndex];
	let questionNo = currentQuestionIndex + 1;
	questionElement.innerHTML = questionNo + ". "+ currentQuestion.question;

	currentQuestion.answers.forEach(answer =>{
		const button = document.createElement("button");
		button.innerHTML = answer.text;
		button.classList.add("btn");
		answerButtons.appendChild(button);
		if(answer.correct){
		button.dataset.correct = answer.correct;
		}
		button.addEventListener("click",selectAnswer);
	});
}
function resetState(){
		nextButton.style.display = "none";
		while(answerButtons.firstChild){
			answerButtons.removeChild(answerButtons.firstChild);
}
}
 
function selectAnswer(e){
	const selectedBtn = e.target;
	const isCorrect = selectedBtn.dataset.correct === "true";
	if(isCorrect){
		selectedBtn.classList.add("correct");
		score++;
	}else{
		selectedBtn.classList.add("incorrect");
	}
 
	Array.from(answerButtons.children).forEach(button =>{
		if(button.dataset.correct === "true"){
			button.classList.add("correct");
		}
		button.disabled = true;
	});
	nextButton.style.display = "block";
}

function showScore()
{
	resetState();
	questionElement.innerHTML = 'your score '+score+' out of '+questions.length +'!';
	nextButton.innerHTML = "Play Again";
	nextButton.style.display = "block";
}
function handleNextButton(){
	currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
		showQuestion();
	}else{
		showScore();
	}
}


nextButton.addEventListener("click", ()=>{
	if(currentQuestionIndex < questions.length){
		handleNextButton();
	}
	else{
		startQuiz();
}
});
startQuiz(); 
