import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};

// console.log(refs.body);
// console.log(refs.startBtn);
// console.log(refs.stopBtn);

let timer = null;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomColour = array => {
  return array[randomIntegerFromInterval(0, 5)];
  // console.log(array[randomIntegerFromInterval(0, 5)]);
};

const changeBodyColour = () => {
  refs.body.style.backgroundColor = `${getRandomColour(colors)}`;
};

const randomColourStarter = () => {
  if (refs.startBtn.classList.contains('is-active')) {
    // console.log('already started');
    return;
  }
  refs.startBtn.classList.add('is-active');
  timer = setInterval(changeBodyColour, 1000);
  // setInterval(changeBodyColour, 1000);
  // console.log('color-changing starts');
};

const randomColourStopper = () => {
  if (refs.startBtn.classList.contains('is-active')) {
    refs.startBtn.classList.remove('is-active');
  }
  clearInterval(timer);
  // console.log('color-changing stops');
};

refs.startBtn.addEventListener('click', randomColourStarter);
refs.stopBtn.addEventListener('click', randomColourStopper);
