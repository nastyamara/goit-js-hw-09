const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.body;


let timerId = null;
stopBtn.disabled = true;


startBtn.addEventListener('click', () => { if (startBtn.classList.contains('disabled')) { return; } timerId = setInterval(changeBodyColor, 1000); startBtn.disabled = true; stopBtn.disabled = false; });
stopBtn.addEventListener('click', () => { clearInterval(timerId); startBtn.classList.remove('disabled'); startBtn.disabled = false; stopBtn.disabled = true; });


function changeBodyColor() {
  body.style.backgroundColor = getRandomHexColor();
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}


