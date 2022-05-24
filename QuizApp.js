const quizData = [
     {
          question: 'How old is Tom ?',
          a: '10',
          b: '15',
          c: '27',
          d: '50',
          correct: 'c'

     },
     {
          question: 'Who is he President of US ?',
          a: 'Thomas Jame',
          b: 'Ivan Pop',
          c: 'Florin Rogires',
          d: 'Donald Trump',
          correct: 'd'

     },
     {
          question: 'What is the most popolar destination in the worlds ?',
          a: 'France',
          b: 'Italy',
          c: 'Korea',
          d: 'Japan',
          correct: 'c'

     },
     {
          question: 'What does HTML stand for ?',
          a: 'HyperText Markup Language',
          b: 'Cascading Style Sheet',
          c: 'Application Programing Interface',
          d: 'Name Convention',
          correct: 'a'

     },
     {
          question: 'What is the most used programing language in 2019 ?',
          a: 'Java',
          b: 'C++',
          c: 'Python',
          d: 'JavaScript',
          correct: 'd'

     },
     {
          question: 'What is the most used framework in 2020 ?',
          a: 'React JS',
          b: 'Angular JS',
          c: 'CakePHP',
          d: 'Ruby on Rails',
          correct: 'c'

     }
]


const question = document.getElementById("question");
const aText = document.getElementById("a_text");
const bText = document.getElementById("b_text");
const cText = document.getElementById("c_text");
const dText = document.getElementById("d_text");
const submitBtn = document.querySelector(".submit-btn");
const answerEls = document.querySelectorAll(".answer");
const scoreEL = document.getElementById("score");
const quizHeader = document.querySelector(".quiz-header");
let currentQuiz = 0;
let currentScore = 0;

loadQuiz();

function loadQuiz() {
     deselected();

     const currentQuizData = quizData[currentQuiz];
     question.innerHTML = currentQuizData.question;
     aText.innerHTML = currentQuizData.a;
     bText.innerHTML = currentQuizData.b;
     cText.innerHTML = currentQuizData.c;
     dText.innerHTML = currentQuizData.d;
     


}

function getSelected() {
     let myAnswer = undefined;

     answerEls.forEach(answerEl => {
          if (answerEl.checked) {
               myAnswer = answerEl.id;
          }
     });

     //      for(let i =0 ;i< answerEls.length;i++){
     //           if(answerEls[i].checked){
     //              myAnswer = answerEls[i].getAttribute("id")

     //           }
     //      }
     //     return myAnswer;
     return myAnswer;
}


function deselected() {
     answerEls.forEach(answerEl => {
          answerEl.checked = false;
     })
}


submitBtn.addEventListener("click", () => {

     const answer = getSelected();

     if (answer) {
          if (answer === quizData[currentQuiz].correct) { // check   
               currentScore++;
          }
          currentQuiz++;
          if (currentQuiz < quizData.length) {
               loadQuiz();
          }
          else {
               scoreEL.textContent = ` ${currentScore}/6`;
               alert(`You finished!! Press here to see the result`);
               // Create a button Reload when click, NOT F5
               //... .innerHTML = `<button onclick ="location.reload()">Reload</button>`;
               
          }
     }
    
      
})
