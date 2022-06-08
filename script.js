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
question: ["Question 1: Arrays in JavaScript are defined by which of the following statements?","Which of the following methods/operation does javascript use instead of == and !=?", "Which method receives the return value of setInterval() to cancel future invocations?", "The unordered collection of properties, each of which has a name and a value is called _________", "The type that specifies what kind of event occurred is ____________", "Which JavaScript method is used to write on browser's console?", "In JavaScript, single line comment begins with ___.", "What is the default value of an uninitialized variable?", "JavaScript objects are written with _____", "Which property is used to get the length of a string in JavaScript?"],
choiceA: ["It is an ordered list of values", "JavaScript uses equalto()", "clearInvocation()", "String", "event type", "console.write()", "#", "0", "round brackets ()", "strlen"],
choiceB: ["It is an ordered list of objects", "JavaScript uses equals() and notequals() instead", "cancelInvocation()", "Object", "event target", "console.output()", "/*", "undefined", "curly brackets {}", "len"],
choiceC: ["It is an ordered list of string", "JavaScript uses bitwise checking", "clearInterval()", "Serialized Object", "both event type and even target", "console.log()", "$", "null", "double quotes", "length"],
choiceD: ["It is an ordered list of functions", "JavaScript uses === and !== instead", "clear()", "Array", "interface", "console.writeHTML()", "//", "NaN", "square brackets []", "Length"],
questionAnswer: ["It is an ordered list of values", "JavaScript uses === and !== instead", "clearInterval()", "Object", "event type", "console.log()", "//", "undefined", "curly brackets {}", "length",]
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








