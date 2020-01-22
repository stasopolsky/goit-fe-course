
'use strict';


// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ing = document.querySelector('#ingredients');

function addLi(liTitle) {
  const li = document.createElement('li');
  li.textContent = liTitle;
  ing.appendChild(li);
  return li;
}

const result = ingredients.forEach(elem=>addLi(elem));

console.log(ing);
