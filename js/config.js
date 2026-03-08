function startQuiz(){

const topic=document.getElementById("topic").value

const difficulty=document.getElementById("difficulty").value

const count=document.getElementById("count").value

const time=document.getElementById("time").value

const config={

topic,
difficulty,
count,
time

}

localStorage.setItem("quizConfig",JSON.stringify(config))

window.location.href="quiz.html"

}