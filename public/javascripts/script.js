const btn = document.querySelector('.btn-primary')
const form = document.querySelector('.prof-form')
const instruct = document.querySelector('.instruct')
const btn2 = document.querySelector('.btn-warning')
const form2 = document.querySelector('.deets-form')
const input = document.querySelectorAll('.deets-input')
const label = document.querySelectorAll('.deets-label')

for(let i=0;i<label.length;i++){
	label[i].onclick = () => {
		input[i].classList.toggle('display')
	}
}

if(btn){
  btn.onclick = () => {
    form.classList.toggle('display')
    instruct.classList.toggle('display')
  }
}

btn2.onclick = () => {
  form2.classList.toggle('display')
}

label.onclick = () => {
  input.classList.toggle('display')
}