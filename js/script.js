// Questions Array:
var quizQuestions = [
    {
        question: "Commonly used data types DO NOT Include:",
        userAnswer: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        correctAnswer: 2
    },
    {
        question: "The condition of an if / else statement is enclosed within ______.",
        userAnswer: ["1. quotes", "2. curly brackets", "3.parantheses", "4. square brackets"],
        correctAnswer: 1
    },
    {
        question: "Arrays in JavaScript can be used to store ______.",
        userAnswer: ["1. numbers & strings", "2. other arrays", "3. booleans", "4. all of the above"],
        correctAnswer: 2
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        userAnswer: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
        correctAnswer: 1
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        userAnswer: ["1. JavaScript", "2. terminal / bash", "3. for loops", "4. console log"],
        correctAnswer: 2
    }];

    var secondsLeft = 75;
    var timerCountdown = true;
    var timerStart = false;
    var timeEl = document.getElementById("timer");
    var timeLeft = document.getElementById("timeLeft");
    var startButton = document.getElementById("startButton");
    var welcomePage = document.getElementById("welcomePage");
    var quizInterface = document.getElementById("quizInterface");
    var questionHeading = document.getElementById("questionHeading");
    var answerA = document.getElementById("answerA");
    var answerB = document.getElementById("answerB");
    var answerC = document.getElementById("answerC");
    var answerD = document.getElementById("answerD");
    var answerResult = document.getElementById("answerResult");
    var correctAnswer = document.getElementById("correctAnswer");
    var quizDone = document.getElementById("quizDone");
    var scoresPage = document.getElementById("scoresPage");
    var userInitials = document.getElementById("userInitials");
    var viewScore = document.getElementById("viewScore");
    var scoreList = document.getElementById("scoreList");
    var finalScore = document.getElementById("finalScore");

    var scoreBin = "";
    var highScores = [];
    var userScore = 0;
    
    let rng = 0;

function quizTimer() {
    if (timerStart) 
    secondsLeft--;
    if(secondsLeft<= 0) {
    secondsLeft = 0;    
    }
    timeEl.textContent = secondsLeft;
}
var countdownInterval = setInterval(quizTimer, 1000);


startButton.addEventListener("click", function(){
    welcomePage.style.display = "none";
    quizInterface.style.display = "block";
    timeLeft.style.display = "block";
    timerStart = true;
    questionPrompts();
})

function questionPrompts() {
    questionHeading.textContent = quizQuestions[rng].question;
    answerA.textContent = quizQuestions[rng].userAnswer[0];
    answerB.textContent = quizQuestions[rng].userAnswer[1];
    answerC.textContent = quizQuestions[rng].userAnswer[2];
    answerD.textContent = quizQuestions[rng].userAnswer[3];
}

answerA.addEventListener('click', function(event) {
    event.stopPropagation();
    correctAnswer = quizQuestions[rng].correctAnswer;
    console.log("corectAnswer " + correctAnswer);
    if (0 === correctAnswer) { 
        answerResult.innerHTML = "Correct!";
        setTimeout(function() {
            answerResult.textContent;
            },
            1000
        );
        userScore++;  
    } else {
        secondsLeft -= 10;
        answerResult.textContent = "Wrong!";
        setTimeout(function() {
            answerResult.textContent = "";
                },
                1000
            );
    }
    if (rng >= quizQuestions.length -1) {
    finishedPrompt();
    } else {
        rng++ 
        questionPrompts();
    };
});

answerB.addEventListener('click', function(event) {
    event.stopPropagation();
    correctAnswer = quizQuestions[rng].correctAnswer;
    console.log("corectAnswer " + correctAnswer);
    if (1 === correctAnswer) { 
        answerResult.textContent = "Correct!";
        setTimeout(function() {
            answerResult.textContent = "";
            },
            1000
        );
        userScore++;   

    } else {
        secondsLeft -= 10;
        answerResult.textContent = "Wrong!";
        setTimeout(function() {
            answerResult.textContent = "";
                },
                1000
            );
    }
    if (rng >= quizQuestions.length -1) {
    finishedPrompt();
    } else {
        rng++ 
        questionPrompts();
    };
});

answerC.addEventListener('click', function(event) {
    event.stopPropagation();
    correctAnswer = quizQuestions[rng].correctAnswer;
    console.log("corectAnswer " + correctAnswer);
    if (2 === correctAnswer) { 
        answerResult.textContent = "Correct!";
        setTimeout(function() {
            answerResult.textContent = " ";
            },
            1000
        );
        userScore++;
    } else {
        secondsLeft -= 10;
        answerResult.textContent = "Wrong!";
        setTimeout(function() {
            answerResult.textContent = " ";
                },
                1000
            );
    }
    if (rng >= quizQuestions.length -1) {
    finishedPrompt();
    } else {
        rng++ 
        questionPrompts();
    };
});

answerD.addEventListener('click', function(event) {
    event.stopPropagation();
    correctAnswer = quizQuestions[rng].correctAnswer;
    console.log("corectAnswer " + correctAnswer);
    if (3 === correctAnswer) { 
        answerResult.textContent = "Correct!";
        setTimeout(function() {
            answerResult.textContent;
            },
            1000
        );
        userScore++;    
    } else {
        secondsLeft -= 10;
        answerResult.textContent = "Wrong!";
        setTimeout(function() {
            answerResult.textContent = "";
                },
                1000
            );
    }
    if (rng >= quizQuestions.length -1) {
    finishedPrompt();
    } else {
        rng++ 
        questionPrompts();
    };
});

function finishedPrompt() {
    quizInterface.style.display = "none";
    quizDone.style.display = "block";
    timerStart = false;
    finalScore.textContent = userScore;
}

function saveHighscore() {
    // get value of input box
    console.log(userInitials.value, userScore)
    localStorage.setItem("initialscores", userInitials.value);
    localStorage.setItem("userscores", userScore);
    // get saved scores from localstorage, or if not any, set to empty array
    var highscores = window.localStorage.getItem("userscores", "initialscores") || [];
    // format new score object for current user
   

    // save to localstorage by pushing to the newScore object to the highscores array
    // call the next function that generates the HTML from the local storage data
  }
initialButton.addEventListener("click", saveHighscore);

initialButton.addEventListener("click", scoresPrompt);

// function scoreRender() {
//     highscores.value = scoreList;
// }
// function submitScore() {
//     highScores.push(document.getElementById("userInitials").value + " " + userScore);
//     scoresPrompt();
// }


// function renderScores() {
// localStorage.setItem("score",JSON.stringify(answerResult));
// localStorage.setItem("initials", JSON.stringify(userInitials));

// var highscoreInput = JSON.parse(localStorage.getItem("score"));
// var highscoreInput = JSON.parse(localStorage.getItem("initials"));

// }
function scoresPrompt() {
    viewScore.style.display = "none";
    timeLeft.style.display = "none";
    quizDone.style.display = "none";
    scoresPage.style.display = "block";
    
//     scoreBin= "";
    
//     for(let i=0; i<highScores.length; i++){
//         scoreBin = scoreBin + " " + highScores[i];
//    }
   scoreList.textContent = highScores.value;
}

function clearScores() {
    highScores = [];
}

function goBack() {
    secondsLeft = 75;
    timerStart = false;
    timerCountdown = true;
    rng = 0;
    userScore = 0;

    
}
