var timer;
function updateTimer() {
  document.getElementById("timer").textContent = parseInt(document.getElementById("timer").textContent) + 1;
}
function startTimer() {
  timer = window.setInterval(updateTimer, 1000);
}
