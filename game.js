const buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];

let started = false;

let level = 0;

$(document).on("keydown", function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").on("click", function () {
  let userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);

  animatePress(userChosenColour);

  let lastIndex = userClickedPattern.length - 1;

  checkAnswer(lastIndex);
});

function nextSequence() {
  userClickedPattern = [];
  // update level
  level += 1;
  $("#level-title").text("Level " + level);

  // create random number for the sequence
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  let randomChosenColours = buttonColours[randomNumber];

  gamePattern.push(randomChosenColours);

  $("#" + randomChosenColours)
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColours);
}

function playSound(name) {
  var audio = new Audio("./sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  // add animation
  $("#" + currentColour).addClass("pressed");

  // remove animation after 100ms delay
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("right");

    // check if finished
    if (userClickedPattern.length === gamePattern.length) {
      // call new sequence
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("wrong");
    let wrong = new Audio("./sounds/wrong.mp3");
    wrong.play();

    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    // restart
    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
