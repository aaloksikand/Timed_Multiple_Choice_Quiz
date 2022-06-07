

//     ACCEPTANCE CRITERIA

//     GIVEN I am taking a code quiz //div- code quiz
//     WHEN I click the start button //div- start button
//     THEN a timer starts and I am presented with a question //div- question box
//     WHEN I answer a question //div- answer box with answer choices
//     THEN I am presented with another question  //array of questions
//     WHEN I answer a question incorrectly  //correct answer choices
//     THEN time is subtracted from the clock  //clock
//     WHEN all questions are answered or the timer reaches 0
//     THEN the game is over
//     WHEN the game is over
//     THEN I can save my initials and score  -->


// <!-- MOCK UP DESCRIPTION
//     1. View high scores in top left
//     2.  Timer in top right
//     3.  Centered bolded "Coding Quiz Challenge"
//     4.  Centered paragraph describing quiz
//     5.  Start Button
//     6.  On Start - Timer Runs
//     7.  On Start-  First Question
//     8.  On Question- Four Options in same style
//     9.  On Answer Click/Hover, Answer Background Changes Color 
//     10. On Answer, Correct/Incorrect Feedback received
//     11. On Answer, Timer Penalty Received/Skipped
//     12. On Time Up, Score Received
//     13. On Time Up, Enter Initial Form Rendered
//     14. On Initial Submission, High Scores Page Displayed
//     15. On High Scores Page, List of Stored High Scores Displayed
//     16. On High Scores Page, Clear High Scores Option Displayed
//     17. On High Scores Page, Go Back Option Returns to Exam -->

// <!-- Potential Tools 
// 1.  Traversing the DOM
//     e.g. var headerDiv = document.getElementById('header');
// 2.  Change syle by accessing style's object's properties
//     e.g. headerDiv.children[0].style.color = 'white';
// 3.  Set Attirbutes
//     -->
var body = document.body;
var mainHeading = document.createElement("h1");// <h1> </h1> //Title Screen, Question Title, Game Result, High Scores//
var mainContainer = document.createElement("div"); //// <main box></main box> //Description of Game, Question w/Answers, Your Score, Stored Scores//
var mainText = document.createElement("p"); 
var buttonOne = document.createElement("div");// <Button One></Button One> //Start Game, Start Over, Submit Initials, Reset Scores
var buttonTwo = document.createElement("div"); // <Button Two></Button Two> //View High Scores, Timer, Start Over, Start Over
var buttonOneTitle = document.createElement("h2");// It took me forever and a day to realize I had to create this because I was trying to creteText to a div first;
var buttonTwoTitle = document.createElement("h2");// It took me forever and a day to realize I had to create this because I was trying to creteText to a div first;
var multipleChoice = 
{
qustionNumber: [1,2,3,4,5,6,7,8,9,10],
question: ["1?","2?", "3?", "4?", "5?", "6?", "7?", "8?", "9?", "10?"],
choiceA: ["blah1a", "blah2a", "blah3a", "blah4a", "blah5a", "blah6a", "blah7a", "blah8a", "blah9a", "blah10a"],
choiceB: ["blah1b", "blah2b", "blah3b", "blah4b", "blah5b", "blah6b", "blah7b", "blah8b", "blah9b", "blah10b"],
choiceC: ["blah1c", "blah2c", "blah3c", "blah4c", "blah5c", "blah6c", "blah7c", "blah8c", "blah9c", "blah10c"],
choiceD: ["blah1d", "blah2d", "blah3d", "blah4d", "blah5d", "blah6d", "blah7d", "blah8d", "blah9d", "blah10d"],
questionAnswer: ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "a10",]
};
var gameStarter = document.querySelector("#gameStarter")
var userScore;

body.appendChild(mainHeading);  //No matter what phase of the game we are in, this will always be rendered.
body.appendChild(mainContainer);  //No matter what phase of the game we are in, this will always be rendered.
body.appendChild(buttonOne); //No matter what phase of the game we are in, this will always be rendered.
body.appendChild(buttonTwo); //No matter what phase of the game we are in, this will always be rendered.
mainContainer.appendChild(mainText);
buttonOne.appendChild(buttonOneTitle);
buttonTwo.appendChild(buttonTwoTitle);

//I would like to set style attributes for these four universal elements now.
mainHeading.setAttribute("style", "background: blue; color: white;");
mainContainer.setAttribute("style", "background-color: blue; color: white;");
mainText.setAttribute("style", "background-color: blue; color: white;");
buttonOne.setAttribute("style", "background-color: blue; color: white;");
buttonTwo.setAttribute("style", "background-color: blue; color: white;");
buttonOneTitle.setAttribute("style", "background-color: blue; color: white;");
buttonTwoTitle.setAttribute("style", "background-color: blue; color: white;");

mainHeading.textContent = "This is Javapardy!!!";
mainText.textContent = "Click 'Start Quiz' and answer as many questions you can correctly before time lapses to earn the high score.  An incorrect answer will result in a three second time penalty.  Good luck!";
buttoneOneTitle = "Start Game";
buttonTwoTitle = "High Scores";
// function countdown()
// {
//     var timeLeft = 60;
//     var userScore = setInterval(function ()
//     {
//         if (timeLeft > 1)
//         {
//         timerEl.textContent = timeLeft;
//         timeLeft--;
//         }
//         else {
//             // Once `timeLeft` gets to 0, set `timerEl` to an empty string
//             timerEl.textContent = '';
//             // Use `clearInterval()` to stop the timer
//             clearInterval(timeInterval);
//             // Call the `displayMessage()` function
//             displayMessage();
//           }
//     }, 1000);
// }

//
// function quizLoop()
// { 
//     for (var i = 0; i < multipleChoice.length; i++)    
// login = document.createElement('h2');
//     var profile = document.createElement('p');
//     login.textContent = data[i].login;
//     profile.textContent = data[i].url;
//     userContainer.append(login);
//     userContainer.append(issueTitle);

// }

// gameStarter.addEventListener("click", function() //we need to make an event listener on click game
// {

//     countdown()  //as soon as startButton is clicked timer starts;


// }
// )
//question 1 with answers choices appears
//when answer choice is clicked
//user is given feedback regarding correct or incorrect
//if correct go to next question
//if incorrect deduct a few seconds of time and goto next question
//keep running until all questions are over or timer if up
//at that point run gameOver function
//on gameOver function
//post time








