let questions=[]
let index=0
let score=0

async function loadQuiz(){

const config=JSON.parse(localStorage.getItem("quizConfig"))

const data=await generateQuestions(config.topic,config.count,config.difficulty)

questions=data.questions

showQuestion()

startTimer(config.time*60)

}

function showQuestion(){

const q=questions[index]

document.getElementById("question").innerText=q.question

const options=document.getElementById("options")

options.innerHTML=""

q.options.forEach(option=>{

const btn=document.createElement("button")

btn.innerText=option

btn.onclick=function(){

if(option===q.correct){

score++

}

document.getElementById("explanation").innerText=q.explanation

}

options.appendChild(btn)

})

updateProgress()

}

function nextQuestion(){

index++

if(index<questions.length){

showQuestion()

}else{

finishQuiz()

}

}

function updateProgress(){

const percent=((index+1)/questions.length)*100

document.getElementById("progress").style.width=percent+"%"

}

function finishQuiz(){

saveResult(score,questions.length)

window.location.href="result.html"

}