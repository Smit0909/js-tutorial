let body = document.querySelector('body');
let buttons = document.querySelectorAll('.button');    

buttons.forEach(button => {
    button.addEventListener('click', () => {
        body.style.backgroundColor = button.getAttribute('id');
    })
});