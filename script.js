let clientsFrame = document.querySelector('.clients-frame');
let clients = document.querySelector('.clients');
let main = document.querySelector('.main');
let clientsContainer = document.querySelector('.clients-container');

let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');

if (prevButton) {


  let temp = Math.floor((parseInt(getComputedStyle(main).width) - 20 - parseInt(getComputedStyle(prevButton).width) * 2) / 150);

  clientsFrame.style.width = temp * 150 + 'px';

  window.onresize = () => {
    if (window.innerWidth < 1280) {
      clients.style.width = window.innerWidth - 60 + 'px';
    }
    else {
      clients.style.width = '100%';
    }
    let temp = Math.floor((parseInt(getComputedStyle(main).width) - 20 - parseInt(getComputedStyle(prevButton).width) * 2) / 150);
    clientsFrame.style.width = temp * 150 + 'px';
  }

  let offset = 0;
  clientsContainer.style.left = offset + 'px';
  prevButton.disabled = true;

  prevButton.addEventListener('click', () => {
    offset += 150;
    clientsContainer.style.left = offset + 'px';
    if (offset >= 0) {
      prevButton.disabled = true;
    }
    else {
      prevButton.disabled = false;
    }
    nextButton.disabled = false;
  });

  nextButton.addEventListener('click', () => {
    offset -= 150;
    clientsContainer.style.left = offset + 'px';
    if (offset <= - clientsContainer.children.length * 150 + parseInt(getComputedStyle(clientsFrame).width)) {
      nextButton.disabled = true;
    }
    else {
      nextButton.disabled = false;
    }
    prevButton.disabled = false;
  });
}


let mobileMenu = document.querySelector('.mobile-menu');
let burger = document.getElementById('burger-button');
burger.addEventListener('click', () => {
  mobileMenu.style.right = '0';
});

let close = document.getElementById('close-button');
close.addEventListener('click', () => {
  mobileMenu.style.right = '100vw';
});