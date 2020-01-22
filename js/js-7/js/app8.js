'use strict';

// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.


// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>
let inputValue;

function getRandomColor() {
  let color = function() {
    return Math.floor(Math.random()*256);
  };
  return `rgb(${color()},${color()},${color()})`;
}

const input = document.querySelector('div#controls>input');

const render = document.querySelector('button[data-action="render"]');

const destroy = document.querySelector('button[data-action="destroy"]');

const box = document.querySelector('#boxes');


input.addEventListener('input', e => {
  inputValue = e.currentTarget.value;
});




const createBoxes = amount => {
  const widthAndHeight = 30;
  const step = 10;
  const result = [];
  for(let i = 0; i < amount; i+=1) {
    const div = document.createElement('div');
    div.style.width = widthAndHeight+i*step + 'px';
    div.style.height = widthAndHeight+i*step + 'px';
    div.style.marginBottom = '3px';
    div.style.backgroundColor = getRandomColor();
    result.push(div.outerHTML);
  }
  return result.join('');
};

const destroyBoxes = () => {
  box.innerHTML = '';
};

render.addEventListener('click', e => {
  box.insertAdjacentHTML('beforeend', `${createBoxes(inputValue)}`);
});

destroy.addEventListener('click', e => destroyBoxes());
