
var timerMinutes = 4;
var timerSeconds = 59;
var timeLeft = null;
timerId = null;
var correctAnsCount = 0;
var incorrectAnswers = 0;

let qNumber = 0;
let question = "";
let answerA = "";
let answerB = "";
let answerC = "";
let answerD = "";
let e ="";


var myQuestions = [
    {
        qHead: "Question #1",
        question: "What is the top speed of a Mountain Lion?",
        answers: {
            a: '50 MPH',
            b: '40 MPH',
            c: '30 MPH',
            d: '25 MPH'
        },
        correctAnswer: 'a'
    },
    {
        qHead: "Question #2",
        question: "What is the average lifespan of a Mountain Lion in the wild?",
        answers: {
            a: '15 years',
            b: '12 years',
            c: '23 years',
            d: '8 years'
        },
        correctAnswer: 'b'
    },
    {
        qHead: "Question #3",
        question: "How many pounds of meat does an adult Mountain Lion require each day?",
        answers: {
            a: '5 lbs.',
            b: '7 lbs.',
            c: '9 lbs.',
            d: '15 lbs.'
        },
        correctAnswer: 'c'
    },
    {
        qHead: "Question #4",
        question: "Are Mountain Lions Dangerous?",
        answers: {
            a: 'No',
            b: 'A little bit',
            c: 'Yeah...kinda',
            d: 'HELL YEAH'
        },
        correctAnswer: 'd'
    }
];


function setup(){
    timerId = setInterval("handleTimer();", 1000);
    showStart;
    $("#timer-minutes").html(timerMinutes);
    $("#timer-seconds").html(timerSeconds);
    showStart();
};

//display start button
function showStart(){
    $("#startDiv").html("<button onclick=showQuestions(); onclick=hideStart();>Start Quiz</button> ");
};

//hide start button
function hideStart(){
    $("#startDiv").hide();
};


//dislay questions
function showQuestions(){
    //console.log("start button clicked");
    hideStart();
    $(".answer-choice").click(checkAnswer);
    //forloop to output each questions
    for (i=0; i<myQuestions.length;i++){
        var answerA = "<button class=answer-choice onclick=checkAnswer(event);>" + myQuestions[i].answers.a + "</button><br>";
        var answerB = "<button class=answer-choice onclick=checkAnswer(event);>" + myQuestions[i].answers.b + "</button><br>";
        var answerC = "<button value=c class=answer-choice onclick=checkAnswer(event);>" + myQuestions[i].answers.c + "</button><br>";
        var answerD = "<div class=answer-choice value=d onclick=checkAnswer(event);>" + myQuestions[i].answers.d + "</div><br>";
        var question = "<div class='question-text'>" + myQuestions[i].question + "</div>"
        
        $("#questionsDiv").append("<div class='question-header'>" + myQuestions[i].qHead + question + answerA + answerB + answerC + answerD);
       //console.log(myQuestions[i].qHead); 

    };
};

function showSubmitBtn(){
    $("#submit-button").html("<button type='submit' onclick='showResults();'>Submit Quiz</button>");
};

//create eventlistener to watch clicks
$(".answer-choice").click(
   
);

//see if clicked answer is correct

function checkAnswer(event){
    //PSUEDOCODE: Somehow make it so clicking on one asnwer clears the selection of any other answers on that same question

    let clickedDiv = event.currentTarget;
    //console.log(clickedDiv);
    //PSUEDOCODE: get the answer checker working 
    if (clickedDiv == myQuestions[qNumber].correctAnswer
        ){
        correctAnsCount++;
        //console.log('correct count increased');
        $(clickedDiv).css('background-color','green');
    } else{
        $(clickedDiv).css('background-color','red');
        //console.log('incorrect');

    }
};

function showResults(){

};



function handleTimer(){
    timerSeconds--;
    $("#timer-seconds").html(timerSeconds);
    //console.log("tick");


    if(timerSeconds == -1){

        timerMinutes--;
        timerSeconds = 59;
        //console.log("minus a minute");
        $("#timer-seconds").html("59");
        $("#timer-minutes").html(timerMinutes);
    };
    if(timerSeconds <= 9){
        //console.log("minus a minute");
        $("#timer-seconds").html("0"+timerSeconds);
    };

    if(timerMinutes == 0 && timerSeconds == 0){
        console.log("Time's up!");
        alert("Time is up!");
    }

};
