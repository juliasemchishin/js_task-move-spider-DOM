'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const wallRect = wall.getBoundingClientRect();
  const borderWidth = 10;

  const left = wallRect.left + borderWidth;
  const top1 = wallRect.top + borderWidth;
  const right = wallRect.right - borderWidth;
  const bottom = wallRect.bottom - borderWidth;

  if (
    e.clientX < left ||
    e.clientX > right ||
    e.clientY < top1 ||
    e.clientY > bottom
  ) {
    return;
  }

  const coordX = e.clientX - left;
  const coordY = e.clientY - top1;

  const insideWidth = right - left;
  const insideHeight = bottom - top1;

  let spiderCenterX = coordX - spider.clientWidth / 2;
  let spiderCenterY = coordY - spider.clientHeight / 2;

  spiderCenterX = Math.max(
    0,
    Math.min(spiderCenterX, insideWidth - spider.clientWidth),
  );

  spiderCenterY = Math.max(
    0,
    Math.min(spiderCenterY, insideHeight - spider.clientHeight),
  );

  spider.style.left = `${spiderCenterX}px`;
  spider.style.top = `${spiderCenterY}px`;
});
