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

index++

if(index<questions.length){

showQuestion()

}else{

finishQuiz()

}

}

options.appendChild(btn)

})

}