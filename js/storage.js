function saveResult(score,total){

let history=JSON.parse(localStorage.getItem("history"))||[]

history.push({

score,
total,
date:new Date().toLocaleDateString()

})

localStorage.setItem("history",JSON.stringify(history))

localStorage.setItem("lastScore",score)
localStorage.setItem("lastTotal",total)

}

function loadResult(){

const score=localStorage.getItem("lastScore")
const total=localStorage.getItem("lastTotal")

document.getElementById("score").innerText="Score: "+score+"/"+total

const acc=(score/total)*100

document.getElementById("accuracy").innerText="Accuracy: "+acc+"%"

}