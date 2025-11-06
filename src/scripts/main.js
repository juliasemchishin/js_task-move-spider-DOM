'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const wallRect = wall.getBoundingClientRect();
  const wallStyle = window.getComputedStyle(wall);

  const borderLeftWidth = parseFloat(wallStyle.borderLeftWidth);
  const borderTopWidth = parseFloat(wallStyle.borderTopWidth);

  const left = wallRect.left + borderLeftWidth;
  const top1 = wallRect.top + borderTopWidth;

  let coordX = e.clientX - left - spider.clientWidth / 2;
  let coordY = e.clientY - top1 - spider.clientHeight / 2;

  if (coordX < 0) {
    coordX = 0;
  }

  if (coordY < 0) {
    coordY = 0;
  }

  if (coordX > wallRect.width - spider.clientWidth) {
    coordX = wallRect.width - spider.clientWidth - borderLeftWidth * 2;
  }

  if (coordY > wallRect.height - spider.clientHeight) {
    coordY = wallRect.height - spider.clientHeight - borderLeftWidth * 2;
  }

  if (e.target === wall) {
    spider.style.top = coordY + 'px';
    spider.style.left = coordX + 'px';
  }
});
