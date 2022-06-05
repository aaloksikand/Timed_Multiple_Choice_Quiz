// <!-- USER STORY 
//     AS A coding boot camp student
//     I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
//     SO THAT I can gauge my progress compared to my peers

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


// <!-- Possible Skeleton HTML for Basic Acceptance Criteria Version
// <main>
// <h1> </h1> //Title Screen, Question Title, Game Result, High Scores//
// <main box></main box> //Description of Game, Question w/Answers, Your Score, Stored Scores//
// <Button One></Button One> //Start Game, Start Over, Submit Initials, Reset Scores
// <Button Two></Button Two> //View High Scores, Timer, Start Over, Start Over

// Potential Javascript
// I would like to demonstrate my understanding of javascript by creating all html elements in javascript.
// I would like to demonstrate my revulsion for CSS by also stylizing all elements in javascript
// Potential Javascript variable
// var body = document.body;
// var mainContainer = document.createlement("div")
// var mainHeading = document.createElement("h1")
// var buttonOne = document.createElement("div")
// var buttonTwo = document.createElement("div")
// var multipleChoice = 
//{
    // qustionNumber: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    // question: 1?, 2?, 3?, 4?, 5?, 6?, 7?, 8?, 9?, 10?
    // choiceA: blah1a, blah2a, blah3a, blah4a, blah5a, blah6a, blah7a, blah8a, blah9a, blah10a
    // choiceB: blah1b, blah2b, blah3b, blah4b, blah5b, blah6b, blah7b, blah8b, blah9b, blah10b
    // choiceC: blah1c, blah2c, blah3c, blah4c, blah5c, blah6c, blah7c, blah8c, blah9c, blah10c
    // choiceD: blah1d, blah2d, blah3d, blah4d, blah5d, blah6d, blah7d, blah8d, blah9d, blah10d
    // questionAnswer: a1, a2, a3, a4, a5, a6, a7, a8, a9, a10
    // }
//lets play with some interesting functions

//Potential Javascript Functions
//we need to run a function as soon as the Start Game button gets clicked
//function startGame(); 
//as soon as startButton is clicked
//timer starts
//question 1 with answers choices appears
//when answer choice is clicked
//user is given feedback regarding correct or incorrect
//if correct go to next question
//if incorrect deduct a few seconds of time and goto next question
//keep running until all questions are over or timer if up
//at that point run gameOver function
//on gameOver function
//post time




