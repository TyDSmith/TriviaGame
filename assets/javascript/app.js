
var timerMinutes = 4;
var timerSeconds = 59;
var timeLeft = null;
timerId = null;
var correctAnswers = 0;
var incorrectAnswers = 0;


var myQuestions = [
    {
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
    $("#timer-minutes").html(timerMinutes);
    $("#timer-seconds").html(timerSeconds);
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

    if(timerMinutes == 0){
        console.log("Time's up!");
        alert("Time is up!");
    }

};

function showResults(){

};
