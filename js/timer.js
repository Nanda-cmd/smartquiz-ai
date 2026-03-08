function startTimer(seconds){

let time=seconds

const interval=setInterval(()=>{

document.getElementById("timer").innerText="Time: "+time

time--

if(time<0){

clearInterval(interval)

finishQuiz()

}

},1000)

}