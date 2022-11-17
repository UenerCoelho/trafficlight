const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalId = null;

const trafficLight = (event) => {
  stopAutomatic();
  turnOn[event.target.id]();
}

const nextIndex = () => {
  // Condicional Ternário, igual a debaixo
  colorIndex = colorIndex < 2 ? ++colorIndex : 0;
  // Condicional padrão
  // if (colorIndex < 2) {
  //   colorIndex++;
  // } else {
  //   colorIndex = 0;
  // }
}

const changeColor = () => {
  const colors = ['red', 'yellow', 'green']
  const color = colors[ colorIndex ];
  turnOn[color]();
  nextIndex();
}

const stopAutomatic = () => {
  clearInterval(intervalId)
}
const turnOn = {
  'red': () => img.src = './assets/img/red.png',
  'yellow': () => img.src = './assets/img/yellow.png',
  'green': () => img.src = './assets/img/green.png',
  'automatic': () => intervalId = setInterval(changeColor, 1000)
}

buttons.addEventListener('click', trafficLight);