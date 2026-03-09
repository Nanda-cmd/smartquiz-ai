function startTimer(seconds){

let time=seconds

const timer=setInterval(()=>{

document.getElementById("timer").innerText="Time "+time

time--

if(time<0){

clearInterval(timer)

finishQuiz()

}

},1000)

}