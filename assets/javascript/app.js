
var timerMinutes = 4;
var timerSeconds = 59;
var timeLeft = null;
timerId = null;

function setup(){

    timerId = setInterval("handleTimer();", 1000);

    $("#timer-minutes").html(timerMinutes);
    $("#timer-seconds").html(timerSeconds);
};

function handleTimer(){
    timerSeconds--;
    $("#timer-seconds").html(timerSeconds);
    console.log("tick");


    if(timerSeconds == -1){

        timerMinutes--;
        timerSeconds = 59;
        console.log("minus a minute");
        $("#timer-seconds").html("59");
        $("#timer-minutes").html(timerMinutes);
    };

    if(timerMinutes == 0){
        console.log("YOU LOSE!");
        alert("Time is up! Game Over!");
    }

};



// var timeSince = 0;
//         var stopWatchSince = 0;
//         timerId = null;
//         var stopWatchSeconds = 0;
//         var stopWatchMinutes = 0;
//         var stopwatchtimeID=0;

//         function setup(){
//             timerId = setInterval("handleTimer();", 1000);
//             console.log(timerId);
//         };

//         function handleTimer(){
//             timeSince++
//             // console.log("tick!", timeSince);
//             $('.time-output').html(timeSince);
//         };

//         function handleStopWatchTime(){
//             stopWatchSeconds++
//             if(stopWatchSeconds == 60){
//                 stopWatchMinutes++;
//                 stopWatchSeconds = 0;
//             }

//             $(".stopwatch-seconds-output").html(stopWatchSeconds);
//             $(".stopwatch-minutes-output").html(stopWatchMinutes);
//             if(stopWatchSeconds <= 9){
//                 $(".stopwatch-seconds-output").html("0" + stopWatchSeconds);
//             }
//             if(stopWatchMinutes <= 9){
//                 $(".stopwatch-minutes-output").html("0" + stopWatchMinutes);
//             }
//         };



//         function startStopWatch(){
//             stopwatchtimeID = setInterval("handleStopWatchTime();", 1000);
//             //console.log(stopwatchtimeID);
//             console.log(stopWatchSeconds);
//         };

//         function stopStopWatch(){
//             clearInterval(stopwatchtimeID);
//         };

//         function resetStopWatch(){
//             stopWatchSeconds=00;
//             stopWatchMinutes=00;
//             $(".stopwatch-seconds-output").html(00);
//             $(".stopwatch-minutes-output").html(00);
//         };


//     </script>
// </head>
// <body onload="setup();">

//     <!-- <div>
//         It has been <span class="time-output"></span> Seconds
//     </div> -->
//     <br>
//     <div class="stopwatch">
//         <div class="stopwatchbuttons">
//             <button onclick="startStopWatch();" class="stopwatch-but">Start</button>
//             <button onclick="stopStopWatch();" class="stopwatch-but">Stop</button>
//             <button onclick="resetStopWatch();" class="stopwatch-but">Reset</button><br>
//         </div>
//     <div class="stopwatch-output">
//         <span class="stopwatch-minutes-output stopwatch-stat">00</span> :
//         <span class="stopwatch-seconds-output stopwatch-stat">00</span>
//     </div>
// </body>
// </html>