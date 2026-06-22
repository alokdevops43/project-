const quizzes={

general:[

{

q:"Capital of India?",

a:["Delhi","Mumbai","Pune","Jaipur"],

c:0

},

{

q:"How many continents?",

a:["5","6","7","8"],

c:2

},

{

q:"Largest ocean?",

a:["Atlantic","Indian","Pacific","Arctic"],

c:2

}

],

programming:[

{

q:"JavaScript runs in?",

a:["Browser","Printer","Speaker","Router"],

c:0

},

{

q:"Which creates array?",

a:["{}","[]","()","<>"],

c:1

},

{

q:"DOM means?",

a:[

"Document Object Model",

"Data Object Method",

"Dynamic Output Module",

"None"

],

c:0

}

]

}

let selected=[]

let index=0

let score=0

let timer=15

let interval

const startBtn=document.getElementById("startBtn")

const quizBox=document.getElementById("quizBox")

const result=document.getElementById("result")

startBtn.onclick=()=>{

const cat=document.getElementById("category").value

selected=quizzes[cat]

index=0

score=0

quizBox.classList.remove("hidden")

result.classList.add("hidden")

showQuestion()

}

function showQuestion(){

clearInterval(interval)

timer=15

startTimer()

document.getElementById("timer").innerText=timer

document.getElementById("current").innerText=index+1

document.getElementById("progressBar").style.width=

((index)/selected.length)*100+"%"

const q=selected[index]

document.getElementById("question").innerText=q.q

const answers=document.getElementById("answers")

answers.innerHTML=""

q.a.forEach((text,i)=>{

const btn=document.createElement("button")

btn.className="answer"

btn.innerText=text

btn.onclick=()=>check(btn,i)

answers.appendChild(btn)

})

}

function check(btn,i){

const q=selected[index]

const buttons=document.querySelectorAll(".answer")

buttons.forEach(b=>b.disabled=true)

if(i===q.c){

score++

btn.classList.add("correct")

}

else{

btn.classList.add("wrong")

buttons[q.c].classList.add("correct")

}

clearInterval(interval)

}

document.getElementById("nextBtn").onclick=()=>{

index++

if(index===selected.length){

finish()

return

}

showQuestion()

}

function finish(){

quizBox.classList.add("hidden")

result.classList.remove("hidden")

result.innerHTML=`

<h2>Quiz Finished</h2>

<h3>Score ${score}/${selected.length}</h3>

<button onclick="location.reload()">

Restart

</button>

`

}

function startTimer(){

interval=setInterval(()=>{

timer--

document.getElementById("timer")

.innerText=timer

if(timer===0){

clearInterval(interval)

}

},1000)

}