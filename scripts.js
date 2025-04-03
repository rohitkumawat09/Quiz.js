import questions  from "./questions.js";
console.log(questions);



const startQuizButton = document.querySelector(".screen1 button");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const screen3 = document.querySelector(".screen3");
const questionPara = document.querySelector(".question");
const timerPara = document.querySelector(".timer");
const options = document.querySelectorAll(".options p");
const scoreSpan = document.querySelector(".screen3 span");
let questionNumber = 0;
let timer = 5;
let score = 0;
let interval;

let optionClicked = false;

startQuizButton.addEventListener("click", () => {
  //   screen1.className = "hidden";
  screen1.classList.add("hidden");
  screen2.classList.remove("hidden");

  timerPara.innerText = timer;
  displayQuestionAndOptions();
  

  interval = setInterval(() => {
    if (timer === 1) {
      if (questionNumber >= questions.length - 1) {
        // NO MORE QUESTIONS TO DISPLAY, CLEAR EVERYTHING
        clearInterval(interval);
        screen2.classList.add("hidden");
        screen3.classList.remove("hidden");
        scoreSpan.innerText = score;
      } else {
        //RESET TIMER
        timer = 5;
        timerPara.innerText =   timer;
        //CHANGE QUESTION
        questionNumber++;
        displayQuestionAndOptions();
        optionClicked = false;
      }
    } else {
      timerPara.innerText = --timer;
    }
  }, 1000);
});

// OPTION CLICK MECHANISM

for (let i = 0; i < options.length; i++) {
  options[i].addEventListener("click", (e) => {
    let userAnswer = e.target.innerText;
    if (optionClicked) return;
    optionClicked = true;


    if(typeof questions [questionNumber].answer ==="number")

userAnswer =Number(userAnswer);


      //MATCH WITH CORRECT ANSWER

    
    if (questions[questionNumber].answer === userAnswer) {
      console.log("answer sahi hai");
      score++;
    }
  });
}

function displayQuestionAndOptions() {
  questionPara.innerText = questions[questionNumber].question;
  for (let i = 0; i < options.length; i++) {
    options[i].innerText = questions[questionNumber].options[i];

  }
  optionClicked = false;
}


