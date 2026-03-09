const API_KEY="PASTE_YOUR_GEMINI_KEY"

async function generateQuestions(topic,count,difficulty){

const prompt = `
Generate ${count} multiple choice questions about ${topic}.
Difficulty: ${difficulty}.

Return STRICT JSON like this:

{
"questions":[
{
"question":"...",
"options":["A","B","C","D"],
"correct":"A",
"explanation":"..."
}
]
}
`

const response = await fetch(
"https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key="+API_KEY,
{
method:"POST",
headers:{ "Content-Type":"application/json"},
body:JSON.stringify({
contents:[{parts:[{text:prompt}]}]
})
}
)

const data = await response.json()

const text = data.candidates[0].content.parts[0].text

const clean = text.replace(/```json|```/g,'')

return JSON.parse(clean)

}