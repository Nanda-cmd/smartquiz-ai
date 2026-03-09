let questions=[]
let current=0
let score=0
let selected=null

async function initQuiz(){

const config = JSON.parse(localStorage.getItem("quizConfig"))

const data = await generateQuestions(
config.topic,
config.count,
config.difficulty
)

questions=data.questions

document.getElementById("loader").classList.add("hidden")
document.getElementById("quizCard").classList.remove("hidden")

startTimer(config.time*60)

renderQuestion()

}

function renderQuestion(){

selected=null

const q=questions[current]

document.getElementById("question").innerText=q.question

const optionsDiv=document.getElementById("options")

optionsDiv.innerHTML=""

q.options.forEach(opt=>{

const div=document.createElement("div")
div.className="option"
div.innerText=opt

div.onclick=function(){

selected=opt

if(opt===q.correct){
score++
}

document.getElementById("explanation").innerText=q.explanation

}

optionsDiv.appendChild(div)

})

updateProgress()

}

function nextQuestion(){

if(current<questions.length-1){

current++
renderQuestion()

}else{

finishQuiz()

}

}

function updateProgress(){

const percent=((current+1)/questions.length)*100
document.getElementById("progress").style.width=percent+"%"

}

function finishQuiz(){

saveResult(score,questions.length)

window.location.href="result.html"

}