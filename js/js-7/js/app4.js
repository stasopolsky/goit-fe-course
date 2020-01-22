
'use strict';

// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let value = 0;
const counterValue = document.querySelector('span#value');

const decrement = document.querySelector(' button[data-action="decrement"]');

const increment = document.querySelector(' button[data-action="increment"]');

decrement.addEventListener('click', ()=>{
  value -=1;
  return(counterValue.textContent = value);
});

increment.addEventListener('click', ()=>{
  value +=1;
  return(counterValue.textContent = value);
});
