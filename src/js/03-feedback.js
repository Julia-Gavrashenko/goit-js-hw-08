import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea');
const input = document.querySelector('.feedback-form input');

form.addEventListener(`input`, throttle(onFormInput, 500));
form.addEventListener(`submit`, onFormSubmit);

let formData = {};

getSavedMessage();

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(`feedback-form-state`, JSON.stringify(formData));
  console.log(formData);
}

function onFormSubmit(event) {
  const elements = event.currentTarget.elements;
  const email = elements.email.value;
  const message = elements.message.value;

  if (email === `` || message === ``) {
    const message = alert`Enter your data`;
    return false;
  }
  event.preventDefault();
  event.target.reset();
  localStorage.removeItem(`feedback-form-state`);
}

function getSavedMessage() {
  const savedMessage = localStorage.getItem(`feedback-form-state`);

  if (savedMessage) {
    formData = JSON.parse(savedMessage);

    Object.entries(formData).forEach(([key, value]) => {
      form.elements[key].value = value;
    });
  }
}
