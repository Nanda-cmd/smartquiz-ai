function addMessage(text,type){

const chat = document.getElementById("chatBox")

const div = document.createElement("div")

div.className = "msg " + type

div.innerText = text

chat.appendChild(div)

chat.scrollTop = chat.scrollHeight

}

async function generateQuiz(){

const input = document.getElementById("prompt")

const text = input.value

addMessage(text,"user")

addMessage("AI generating quiz...","ai")

const config = {
topic:text,
difficulty:"Medium",
count:5,
time:5
}

localStorage.setItem("quizConfig",JSON.stringify(config))

setTimeout(()=>{
window.location="quiz.html"
},1200)

}