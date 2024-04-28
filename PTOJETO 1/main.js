const inputName = document.getElementById('name');
const inputMail = document.getElementById('email');
const inputCPF = document.getElementById('cpf');
const form = document.getElementById('form');
const commentPost = document.getElementById('commentPost');

form.addEventListener('submit', function(event) {
  event.preventDefault()
  let p = document.createElement('p');
  p.classList = 'p-2 d-flex text-wrap flex-wrap';
  p.innerHTML = `<strong>${inputName.value}: </strong> &nbsp  ${inputName.value}`;
  commentPost.appendChild(p);
   inputName.focus();
   
});