const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const userClickedPattern = [];

function nextSequence() {
  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $(document).ready(() => {
    setInterval(() => {
      $(`#${randomChosenColour}`).fadeIn();
      $(`#${randomChosenColour}`).fadeOut();
      playSound(randomChosenColour);
    }, 500);
  });
}

$('div[type="button"]').click(function (e) {
  const userChosenColour = e.target.id;
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  console.log(userClickedPattern);
});

function playSound(name) {
  let audio = new Audio(`./sounds/${name}.mp3`);
  audio.play();
}

function animatePress(currentColour) {
  $(`#${currentColour}`).addClass("pressed");
  setTimeout(function () {
    $(`#${currentColour}`).removeClass("pressed");
    //....and whatever else you need to do
  }, 100);
}
