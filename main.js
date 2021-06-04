const carData = {
  right: 'face-right',
  down: 'face-down',
  left: 'face-left',
  up: 'face-up',
  facing: 'right',
  xPos: 0,
  yPos: 0
};
const carEl = document.querySelector('img');
let intervalID = null;
let carMoving = false;

document.addEventListener('keydown', function (event) {

  const curPerspective = carEl.className;
  if (event.key === 'ArrowRight') {
    carEl.classList.replace(curPerspective, carData.right);
    carData.facing = 'right';
  } else if (event.key === 'ArrowDown') {
    carEl.classList.replace(curPerspective, carData.down);
    carData.facing = 'down';
  } else if (event.key === 'ArrowLeft') {
    carEl.classList.replace(curPerspective, carData.left);
    carData.facing = 'left';
  } else if (event.key === 'ArrowUp') {
    carEl.classList.replace(curPerspective, carData.up);
    carData.facing = 'up';
  } else if (event.key === ' ') {
    if (!carMoving) {
      startCar(carData.facing);
      carMoving = true;
    } else {
      clearInterval(intervalID);
      carMoving = false;
    }

  }
});

function startCar(direction) {
  const styleDirection = (direction === 'left' || direction === 'right') ? 'left' : 'top';
  const position = (direction === 'right' || direction === 'left') ? 'xPos' : 'yPos';
  const pxMove = (direction === 'left' || direction === 'up') ? -4 : 4;

  intervalID = setInterval(function () {
    carData[position] += pxMove;
    carEl.style[styleDirection] = carData[position].toString() + 'px';
  }, 16);
}
