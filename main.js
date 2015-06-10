var timer;
function updateTimer() {
  document.getElementById("timer").textContent = parseInt(document.getElementById("timer").textContent) + 1;
}
function startTimer() {
  timer = window.setInterval(updateTimer, 1000);
  document.getElementById("problem-div").style.display = "";
  document.getElementById("start-timer").disabled = "disabled";
}
function submitAnswer() {
  // body...
}
function isTouchDevice() {
  return !!('ontouchstart' in window);
}
function getGCD(a, b) {
    if (b == 0) {
      return a;
    }
    return getGCD(b, a % b);
}
function initializeSkrollr() {
  if (!isTouchDevice()) {
    var containers = document.getElementsByClassName("container");
    for (var i = 0; i < containers.length; i++) {
      containers[i].setAttribute("data--45p-top-top", "-webkit-transform: scale(1, 1) rotate3d(0, 0, 0, 0deg) translate(0%, 0%); opacity: 1.0;");
      containers[i].setAttribute("data-0-top-bottom", "-webkit-transform: scale(0, 0) rotate3d(135, 225, 225, 135deg) translate(0%, 0%); opacity: 1.0;");
      containers[i].setAttribute("data-0-bottom-top", "-webkit-transform: scale(1, 1) rotate3d(0, 0, 0, 0deg) translate(-17%, -10%); opacity: 0.3;");
      containers[i].setAttribute("data-0-bottom-bottom", "-webkit-transform: scale(1, 1) rotate3d(0, 0, 0, 0deg) translate(0%, 0%); opacity: 1.0;");
    }
    skrollr.init();
  }

}
