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
  // if (event.key === 'ArrowRight') {

  // } else if (event.key === 'ArrowDown') {
  //   carEl.classList.replace(curPerspective, carData.down);
  //   carData.facing = 'down';
  //   clearInterval(intervalID);
  //   if (carMoving) steerCar(carData.facing);
  // } else if (event.key === 'ArrowLeft') {
  //   carEl.classList.replace(curPerspective, carData.left);
  //   carData.facing = 'left';
  //   clearInterval(intervalID);
  //   if (carMoving) steerCar(carData.facing);
  // } else if (event.key === 'ArrowUp') {
  //   carEl.classList.replace(curPerspective, carData.up);
  //   carData.facing = 'up';
  //   clearInterval(intervalID);
  //   if (carMoving) steerCar(carData.facing);
  // } else
});

function turnCar(direction) {
  const curPerspective = carEl.className;
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
