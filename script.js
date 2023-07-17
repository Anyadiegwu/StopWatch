var startTime;
var running = false;
var elapsedTime = 0;
var timerInterval;

function start() {
  if (!running) {
    startTime = new Date().getTime();
    running = true;
    timerInterval = setInterval(update, 10);
  }
}

function pause() {
  if (running) {
    running = false;
    clearInterval(timerInterval);
  }
}

function reset() {
  if (!running) {
    clearInterval(timerInterval);
    elapsedTime = 0;
    document.getElementById("display").innerHTML = "00:00:00.000";
  }
}

function update() {
  if (running) {
    var currentTime = new Date().getTime();
    elapsedTime += (currentTime - startTime);
    startTime = currentTime;

    var hours = Math.floor(elapsedTime / 3600000);
    var minutes = Math.floor((elapsedTime % 3600000) / 60000);
    var seconds = Math.floor((elapsedTime % 60000) / 1000);
    var milliseconds = elapsedTime % 1000;

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    milliseconds = (milliseconds < 10) ? "00" + milliseconds : (milliseconds < 100) ? "0" + milliseconds : milliseconds;

    document.getElementById("display").innerHTML = hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  }
}
