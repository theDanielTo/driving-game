const carPerspective = {
  right: 'face-right',
  down: 'face-down',
  left: 'face-left',
  up: 'face-up'
};

const carEl = document.querySelector('img');

document.addEventListener('keydown', function (event) {
  const curPerspective = carEl.className;
  if (event.key === 'ArrowRight') carEl.classList.replace(curPerspective, carPerspective.right);
  if (event.key === 'ArrowDown') carEl.classList.replace(curPerspective, carPerspective.down);
  if (event.key === 'ArrowLeft') carEl.classList.replace(curPerspective, carPerspective.left);
  if (event.key === 'ArrowUp') carEl.classList.replace(curPerspective, carPerspective.up);
});
