function loadHistory(){

const history=JSON.parse(localStorage.getItem("history"))||[]

const container=document.getElementById("history")

history.forEach(item=>{

const div=document.createElement("div")

div.innerHTML=`
Score: ${item.score}/${item.total}
Date: ${item.date}
`

container.appendChild(div)

})

}