document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);

const btn = document.querySelector('.btn-primary')
const form = document.querySelector('.prof-form')
const instruct = document.querySelector('.instruct')
const btn2 = document.querySelector('.btn-warning')
const form2 = document.querySelector('.deets-form')

if(btn){
  btn.onclick = () => {
    form.classList.toggle('display')
    instruct.classList.toggle('display')
  }
}

btn2.onclick = () => {
  form2.classList.toggle('display')
}