let points = 0;
let pointsPerTick = 1;
let timeInterval = 1000;
let upgradePrice = 50;
let intervalUpgradePrice = 50;
let upgradeBtn = document.getElementById("upgrade-ppt-btn");
let upgradeIntervalBtn = document.getElementById("upgrade-time-interval-btn");

function keyPressHandler(event) {
  if (event.code === "Space") {
    increasePoints();
  }
}

function increasePoints() {
  points += pointsPerTick;
  document.getElementById("points").innerText = points;
}

function upgradePointsPerTick() {
  if (points >= upgradePrice) {
    points -= upgradePrice;
    upgradePrice *= 2;
    ++pointsPerTick;

    let pps = (1000 * pointsPerTick) / timeInterval;
    pps = Math.round(pps * 100) / 100;

    document.getElementById("upgrade-ppt-price").innerText = upgradePrice;
    document.getElementById("points-per-second").innerText = pps;
    document.getElementById("points").innerText = points;
  }
}

function upgradeTimeInterval() {
  if (points >= intervalUpgradePrice) {
    points -= intervalUpgradePrice;
    intervalUpgradePrice *= 2;
    timeInterval *= 0.8;

    let pps = (1000 * pointsPerTick) / timeInterval;
    pps = Math.round(pps * 100) / 100;

    document.getElementById(
      "upgrade-time-interval-price"
    ).innerText = intervalUpgradePrice;
    document.getElementById("points-per-second").innerText = pps;
    document.getElementById("points").innerText = points;

    clearInterval(interval);
    interval = setInterval(increasePoints, timeInterval);
  }
}

document.onkeypress = keyPressHandler;
upgradeBtn.onclick = upgradePointsPerTick;
upgradeIntervalBtn.onclick = upgradeTimeInterval;

let interval = setInterval(increasePoints, timeInterval);
