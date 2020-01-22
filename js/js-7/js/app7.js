'use strict';

// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.\



const range = document.querySelector('input#font-size-control');

const text = document.querySelector('span#text');

range.addEventListener('input', e=>{
  const fontSize = 6 + Number(e.currentTarget.value) / 4;
  text.style.fontSize = `${fontSize}px`;
})
