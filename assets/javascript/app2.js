var correct = 0
var incorrect = 0

function setup() {
    var countdown = 60;
  $("#clock").text(countdown);
  $("#startScreen").show();
  $("#questions").hide();
  $("#endGame").hide();
  correct = 0;
  incorrect = 0;
};

var countdown = 60;
function timer() {
  countdown--;
  $("#clock").text(countdown);
  if (countdown == 0) {
    clearInterval(interval);
    gameOver();
  };
};

function startGame() {
  interval = setInterval("timer();", 1000);
  $("#startScreen").hide();
  $("#questions").show();
  $("#endGame").hide();
}


function gameOver() {
  $("#questions").hide();
  $("#endGame").show();
  if ($("input[name='answer1']:checked").val() == "50 MPH") {
    correct++
  } else {
    incorrect++
  }
  if ($("input[name='answer2']:checked").val() == "12 Years") {
    correct++
  } else {
    incorrect++
  }
  if ($("input[name='answer3']:checked").val() == "9 Lbs.") {
    correct++
  } else {
    incorrect++
  }
  if ($("input[name='answer4']:checked").val() == "HELL YEAH") {
    correct++
  } else {
    incorrect++
  }

  var infoHtml = "<div>Correct: " + correct + "</div><div>Incorrect: " + incorrect + "</div>" 
  $("#info").html(infoHtml)
}