const API_KEY="YOUR_GEMINI_API_KEY"

async function generateQuestions(topic,count,difficulty){

const prompt=`

Generate ${count} MCQ questions about ${topic}

Difficulty: ${difficulty}

Return ONLY JSON

{
"questions":[
{
"question":"",
"options":["","","",""],
"correct":"",
"explanation":""
}
]
}

`

const response=await fetch(

"https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key="+API_KEY,

{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

contents:[{
parts:[{text:prompt}]
}]

})

}

)

const data=await response.json()

return JSON.parse(data.candidates[0].content.parts[0].text)

}