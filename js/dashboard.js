function loadDashboard(){

const history = JSON.parse(localStorage.getItem("history")) || []

document.getElementById("attempts").innerText = history.length

let totalScore = 0
let totalQuestions = 0

history.forEach(h => {
totalScore += h.score
totalQuestions += h.total
})

let avg = 0

if(totalQuestions > 0){
avg = Math.round((totalScore / totalQuestions) * 100)
}

document.getElementById("avg").innerText = avg + "%"

const labels = history.map((_,i)=>"Quiz "+(i+1))
const scores = history.map(h=>h.score)

new Chart(document.getElementById("scoreChart"),{
type:"line",
data:{
labels:labels,
datasets:[{
label:"Scores",
data:scores,
borderColor:"#6366F1",
fill:false
}]
}
})

}