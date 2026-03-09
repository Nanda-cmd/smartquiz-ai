function saveResult(score,total){

let history = JSON.parse(localStorage.getItem("history")) || []

history.push({
score:score,
total:total,
date:new Date().toLocaleDateString()
})

localStorage.setItem("history",JSON.stringify(history))
localStorage.setItem("lastScore",score)
localStorage.setItem("lastTotal",total)

}

function loadResult(){

const score = Number(localStorage.getItem("lastScore"))
const total = Number(localStorage.getItem("lastTotal"))

document.getElementById("score").innerText =
"Score: "+score+"/"+total

let acc=0

if(total>0){
acc=Math.round((score/total)*100)
}

document.getElementById("accuracy").innerText =
"Accuracy: "+acc+"%"

}