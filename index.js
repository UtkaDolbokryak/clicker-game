let points = 0;
let pointsPerClick = 1;
function keyPresskHandler(event) {
  if (event.code === "Space") {
    //points = points + pointsPerClick;
    points += pointsPerClick;
    document.getElementById("points").innerText = points;
  }
}

function increasePoints() {
  points += pointsPerClick;
  document.getElementById("points").innerText = points;
}

document.addEventListener("keypress", keyPresskHandler);
setInterval(increasePoints, 1000);
