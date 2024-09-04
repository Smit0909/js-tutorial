let startBtn = document.querySelector("#start");
let stopBtn = document.querySelector("#stop");
let body = document.querySelector("body");
let intervalId;

let bgChange = function () {
  color = randHexNum();
  body.style.backgroundColor = color;
};

let startChange = function () {
  if (!intervalId) {
    intervalId = setInterval(bgChange, 1000);
  }
};

startBtn.addEventListener("click", startChange);

stopBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
});

function randHexNum() {
  return "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
}
