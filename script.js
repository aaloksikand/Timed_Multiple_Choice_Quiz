//     WHEN all questions are answered or the timer reaches 0
//     THEN the game is over
//     WHEN the game is over
//     THEN I can save my initials and score  -->
var body = document.body;
var mainHeading = document.createElement("h1");// <h1> </h1> //Title Screen, Question Title, Game Result, High Scores//
var mainContainer = document.createElement("div"); //// <main box></main box> //Description of Game, Question w/Answers, Your Score, Stored Scores//
var mainText = document.createElement("p"); 
var buttonOne = document.createElement("button");// <Button One></Button One> //Start Game, Start Over, Submit Initials, Reset Scores
var buttonTwo = document.createElement("button"); // <Button Two></Button Two> //View High Scores, Timer, Start Over, Start Over
var multipleChoice = 
{
question: ["1?","2?", "3?", "4?", "5?", "6?", "7?", "8?", "9?", "10?"],
choiceA: ["blah1a", "blah2a", "blah3a", "blah4a", "blah5a", "blah6a", "blah7a", "blah8a", "blah9a", "blah10a"],
choiceB: ["blah1b", "blah2b", "blah3b", "blah4b", "blah5b", "blah6b", "blah7b", "blah8b", "blah9b", "blah10b"],
choiceC: ["blah1c", "blah2c", "blah3c", "blah4c", "blah5c", "blah6c", "blah7c", "blah8c", "blah9c", "blah10c"],
choiceD: ["blah1d", "blah2d", "blah3d", "blah4d", "blah5d", "blah6d", "blah7d", "blah8d", "blah9d", "blah10d"],
questionAnswer: ["1?", "2?", "3?", "4?", "5?", "6?", "7?", "8?", "9?", "10?",]
};

body.appendChild(mainHeading);  
body.appendChild(mainContainer);  
body.appendChild(buttonOne); 
body.appendChild(buttonTwo); 
mainContainer.appendChild(mainText);

mainHeading.setAttribute("style", "background: blue; color: white;");
mainContainer.setAttribute("style", "background-color: blue; color: white;");
mainText.setAttribute("style", "background-color: blue; color: white;");
buttonOne.setAttribute("style", "background-color: blue; color: white;");
buttonTwo.setAttribute("style", "background-color: blue; color: white;");

mainHeading.textContent = "This is Javapardy!!!";
mainText.textContent = "Click 'Start Quiz' and answer as many questions you can correctly before time lapses to earn the high score.  An incorrect answer will result in a three second time penalty.  Good luck!";
buttonOne.textContent = "Start Game";
buttonTwo.textContent = "High Scores";

function countdown()  
{
    var timeLeft = 60;
    var timeInterval = setInterval (function () 
    {
        if (timeLeft > 0)
        {
            buttonTwo.textContent = timeLeft;
            timeLeft--;
        }
        // else if 
        // {
        //     // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        //     timerEl.textContent = '';
        //     // Use `clearInterval()` to stop the timer
        //     clearInterval(timeInterval);
        //     // Call the `displayMessage()` function
        //     displayMessage();
        // }
        // else
        // {
        //     gameover()
        // }

     }, 1000);
}

function quizLoop()
{ 
var index = 0
var listAnswers = document.createElement("div");
var choice1 = document.createElement("button");
var choice2 = document.createElement("button");
var choice3 = document.createElement("button");
var choice4 = document.createElement("button");

mainText.textContent = "";

listAnswers.appendChild(choice1);
listAnswers.appendChild(choice2);
listAnswers.appendChild(choice3);
listAnswers.appendChild(choice4);
mainText.appendChild(listAnswers);

mainHeading.textContent = multipleChoice.question[index];
choice1.textContent = multipleChoice.choiceA[index];
choice2.textContent = multipleChoice.choiceB[index];
choice3.textContent = multipleChoice.choiceC[index];
choice4.textContent = multipleChoice.choiceD[index];

choice1.addEventListener("click", function()
{
if (choice1.textContent === multipleChoice.questionAnswer[index]) 
{
    console.log("Correct");
}
else
{
    "Incorrect"
    timeLeft = timeLeft-3;
}
index++
mainHeading.textContent = multipleChoice.question[index];
choice1.textContent = multipleChoice.choiceA[index];
choice2.textContent = multipleChoice.choiceB[index];
choice3.textContent = multipleChoice.choiceC[index];
choice4.textContent = multipleChoice.choiceD[index];
}
)

choice2.addEventListener("click", function()
{
    index++
    mainHeading.textContent = multipleChoice.question[index];
    choice1.textContent = multipleChoice.choiceA[index];
    choice2.textContent = multipleChoice.choiceB[index];
    choice3.textContent = multipleChoice.choiceC[index];
    choice4.textContent = multipleChoice.choiceD[index];
}
)

choice3.addEventListener("click", function()
{
index++
mainHeading.textContent = multipleChoice.question[index];
choice1.textContent = multipleChoice.choiceA[index];
choice2.textContent = multipleChoice.choiceB[index];
choice3.textContent = multipleChoice.choiceC[index];
choice4.textContent = multipleChoice.choiceD[index];
}
)

choice4.addEventListener("click", function()
{
index++
mainHeading.textContent = multipleChoice.question[index];
choice1.textContent = multipleChoice.choiceA[index];
choice2.textContent = multipleChoice.choiceB[index];
choice3.textContent = multipleChoice.choiceC[index];
choice4.textContent = multipleChoice.choiceD[index];
}
)

}

buttonOne.addEventListener("click", function()  //we need to make an event listener on click game
{
   countdown() //on click start timer
   quizLoop()
}
)
console.log(buttonTwo)
//at that point run gameOver function
//on gameOver function
//post time








