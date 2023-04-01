// let notarial = document.getElementById('notarial');
// let legalize = document.getElementById('legalize');
// let apostille = document.getElementById('apostille');

// notarial.addEventListener('click', (e) => {
//   if (e.target !== notarial) {
//     return
//   }
//   if (getComputedStyle(notarial).height == '23px') {
//     notarial.style.height = 'fit-content';
//   }
//   else {
//     notarial.style.height = '23px';
//   }
// });

// legalize.addEventListener('click', (e) => {
//   if (e.target !== legalize) {
//     return
//   }
//   if (getComputedStyle(legalize).height == '23px') {
//     legalize.style.height = 'fit-content';
//   }
//   else {
//     legalize.style.height = '23px';
//   }
// });

// apostille.addEventListener('click', (e) => {
//   if (e.target !== apostille) {
//     return
//   }
//   if (getComputedStyle(apostille).height == '23px') {
//     apostille.style.height = 'fit-content';
//   }
//   else {
//     apostille.style.height = '23px';
//   }
// });

let clientsFrame = document.querySelector('.clients-frame');
let clients = document.querySelector('.clients');
let main = document.querySelector('.main');
let clientsContainer = document.querySelector('.clients-container');

let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');

let temp = Math.floor((parseInt(getComputedStyle(main).width) - 20 - parseInt(getComputedStyle(prev).width) * 2) / 150);

clientsFrame.style.width = temp * 150 + 'px';

window.onresize = () => {
  if (window.innerWidth < 1280) {
    clients.style.width = window.innerWidth - 60 + 'px';
  }
  else {
    clients.style.width = '100%';
  }
  let temp = Math.floor((parseInt(getComputedStyle(main).width) - 20 - parseInt(getComputedStyle(prev).width) * 2) / 150);
  clientsFrame.style.width = temp * 150 + 'px';
};

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