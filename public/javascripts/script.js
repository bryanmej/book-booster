document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);

const btn = document.querySelector('.btn')
const form = document.querySelector('.prof-form')
const instruct = document.querySelector('.instruct')

btn.onclick = () => {
  form.classList.toggle('display')
  instruct.classList.toggle('display')
}
