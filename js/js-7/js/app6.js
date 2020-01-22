'use strict';
// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то outline инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.
const validation = document.querySelector('#validation-input');
const length = Number(validation.dataset.length);

validation.addEventListener('blur', e => {
  validation.classList.add('invalid');
  e.currentTarget.value.length === length
    ? validation.classList.replace('invalid', 'valid')
    : validation.classList.replace('valid', 'invalid');
});
