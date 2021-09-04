const quizData = [
    {
        question: 'How old is a Statue of Liberty?',
        a: '142',
        b: '146',
        c: '148',
        d: '130',
        correct: 'b'
    },
    {
        question: 'How many teeth does a saltwater crocodile have?',
        a: '60',
        b: '62',
        c: '63',
        d: '64',
        correct: 'a'
    },
    {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Hey,Tim Marston Lovingston',
        c: 'Hard To Maldunction love',
        d: 'Hostile tango marked land',
        correct: 'a'
    }   
]
const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a-text');
const b_text = document.getElementById('b-text');
const c_text = document.getElementById('c-text');
const d_text = document.getElementById('d-text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
function deselectAnswers(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}
function selectOne (){
    
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked){
            answer = answerEl.id;
        }
    });
        return answer;
}

submitBtn.addEventListener("click", () => {
   
    const answer = selectOne();
    console.log(answer);
    if (answer)  { 
          
        if (answer === quizData[currentQuiz].correct){
            score++;
           
        }          
        currentQuiz++;     
          
           if (currentQuiz < quizData.length){
              loadQuiz();
            }  else {
                 quiz.innerHTML = `<h2>You answered correctly ${score}/ ${quizData.length} questions! </h2> <button onclick="location.reload() ">Reload!</button>`
                }
    } 
    if (answer === undefined){
        changebackground();
        setTimeout(changeBack, 2000);
    }
   
});

function changebackground(){
	document.getElementById('submit').style.backgroundColor = 'red' ;
    document.getElementById('submit').innerText = 'Choose at least ONE answer';
    
}
function changeBack(){
   
    document.getElementById('submit').style.backgroundColor = 'purple' ;
    document.getElementById('submit').innerText = 'Submit';
    
}
