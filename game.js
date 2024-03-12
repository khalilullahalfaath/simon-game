const buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];

function nextSequence() {
  // create random number for the sequence
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  let randomChosenColours = buttonColours[randomNumber];

  gamePattern.push(randomChosenColours);

  $("#" + randomChosenColours)
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  var audio = new Audio("./sounds/" + randomChosenColours + ".mp3");

  audio.play();
}

// function makeSound(key) {
//   switch (key) {
//     case "green":
//       let greenAudio = new Audio("./sounds/green.mp3");
//       greenAudio.play();
//       break;
//     case "blue":
//       let blueAudio = new Audio("./sounds/blue.mp3");
//       blueAudio.play();
//       break;
//     case "red":
//       let redAudio = new Audio("./sounds/red.mp3");
//       redAudio.play();
//       break;
//     case "yellow":
//       let yellowAudio = new Audio("./sounds/yellow.mp3");
//       yellowAudio.play();
//       break;

//     default:
//       console.log(key);
//   }
// }
