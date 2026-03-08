function saveResult(score,total){

let history=JSON.parse(localStorage.getItem("history"))||[]

history.push({

score,
total,
date:new Date().toLocaleDateString()

})

localStorage.setItem("history",JSON.stringify(history))

}