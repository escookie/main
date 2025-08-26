document.addEventListener('DOMContentLoaded', () => {
    const arrowLeft = document.querySelector('#publish > .arrow.left > img');
    const arrowRight = document.querySelector('#publish > .arrow.right > img');
    const boxesContainer = document.querySelector('.overflow');
    let boxes = Array.from(boxesContainer.children);
    let isAnimating = false;
    const boxWidth = boxes[0].offsetWidth + 20; // 박스 너비와 margin 포함
    const duration = 500;

    const animateBoxes = (direction) => {
      if (isAnimating) return;
      isAnimating = true;

      if (direction === 'right') {
        boxesContainer.style.transition = `transform ${duration / 1000}s ease`;
        boxesContainer.style.transform = `translateX(-${boxWidth}px)`;

        setTimeout(() => {
          boxesContainer.style.transition = 'none';
          boxesContainer.style.transform = 'none';
          boxesContainer.appendChild(boxes.shift());
          boxes.push(boxesContainer.lastElementChild);
          isAnimating = false;
        }, duration);
      } else {
        boxesContainer.insertBefore(boxes.pop(), boxesContainer.firstElementChild);
        boxes.unshift(boxesContainer.firstElementChild);
        boxesContainer.style.transition = 'none';
        boxesContainer.style.transform = `translateX(-${boxWidth}px)`;

        setTimeout(() => {
          boxesContainer.style.transition = `transform ${duration / 1000}s ease`;
          boxesContainer.style.transform = 'none';
          setTimeout(() => isAnimating = false, duration);
        }, 0);
      }
    };

    arrowRight.addEventListener('click', () => animateBoxes('right'));
    arrowLeft.addEventListener('click', () => animateBoxes('left'));
  });