const carPerspective = {
  right: 360,
  down: 90,
  left: 180,
  up: 270
};

const carEl = document.querySelector('img');

document.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowRight') {
    carEl.style.transform = 'rotate(' + carPerspective.right + 'deg)';
  } else if (event.key === 'ArrowDown') {
    carEl.style.transform = 'rotate(' + carPerspective.down + 'deg)';
  } else if (event.key === 'ArrowLeft') {
    carEl.style.transform = 'rotate(' + carPerspective.left + 'deg)';
  } else {
    carEl.style.transform = 'rotate(' + carPerspective.up + 'deg)';
  }
});
