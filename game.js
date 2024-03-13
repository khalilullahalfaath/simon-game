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
  let userChosenColour = this.attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);

  animatePress(userChosenColour);
});

function nextSequence() {
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
