const carData = {
  right: 'face-right',
  down: 'face-down',
  left: 'face-left',
  up: 'face-up',
  facing: 'right',
  xPos: 0,
  yPos: 0
};
const gameScreen = document.querySelector('body');
const gamePrompt = document.querySelector('.prompt');
const carSelectMenu = document.querySelector('#car-select');
const startBtn = document.querySelector('.start-btn');
let carEl = null;
let intervalID = null;
let carMoving = false;

startBtn.addEventListener('click', function (event) {
  gamePrompt.classList.add('hidden');
  carEl = document.createElement('img');
  carEl.className = 'car face-right';
  carEl.src = 'images/f1.svg';
  carEl.alt = 'F1 Racecar';
  gameScreen.appendChild(carEl);
  document.addEventListener('keydown', carControls);
});

function carControls(event) {
  const direction = event.key.slice(5).toLowerCase();
  if (event.key === ' ') {
    if (!carMoving) {
      steerCar(carData.facing);
      carMoving = true;
    } else {
      clearInterval(intervalID);
      carMoving = false;
    }
  } else turnCar(direction);
}

function turnCar(direction) {
  const curPerspective = 'face-' + carData.facing;
  carEl.classList.replace(curPerspective, carData[direction]);
  carData.facing = direction;
  clearInterval(intervalID);
  if (carMoving) steerCar(carData.facing);
}

function steerCar(direction) {
  const styleDirection = (direction === 'left' || direction === 'right') ? 'left' : 'top';
  const position = (direction === 'right' || direction === 'left') ? 'xPos' : 'yPos';
  const pxMove = (direction === 'left' || direction === 'up') ? -4 : 4;

  intervalID = setInterval(function () {
    carData[position] += pxMove;
    carEl.style[styleDirection] = carData[position].toString() + 'px';
  }, 16);
}
