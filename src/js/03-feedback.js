import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');
const input = document.querySelector('.feedback-form input');

form.addEventListener(`input`, throttle(onFormInput, 500));
form.addEventListener(`submit`, onFormSubmit);

const formData = {};

getSavedMessage();

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(`feedback-form-state`, JSON.stringify(formData));
  // console.log(formData);
}

function onFormSubmit(event) {
  event.preventDefault();
  event.target.reset();
  localStorage.removeItem(`feedback-form-state`);
}

function getSavedMessage() {
  const savedMessage = JSON.parse(localStorage.getItem(`feedback-form-state`));
  // console.log(savedMessage);

  if (savedMessage) {
    input.value = savedMessage.email;
    textarea.value = savedMessage.message;
  }
}
