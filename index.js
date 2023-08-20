const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];

function nextSequence() {
  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $(document).ready(() => {
    setInterval(() => {
      $(`#${randomChosenColour}`).fadeIn();
      $(`#${randomChosenColour}`).fadeOut();
      let audio = new Audio(`./sounds/${randomChosenColour}.mp3`);
      audio.play();
    }, 500);
  });
}
nextSequence();
