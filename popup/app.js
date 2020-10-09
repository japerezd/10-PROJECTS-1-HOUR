const open = document.querySelector('#open');
const close = document.querySelector('#close');
const container = document.querySelector('.popup-container');

open.addEventListener('click', openPopup);
close.addEventListener('click', closePopup);

function openPopup(){
    container.classList.add('active');
}

function closePopup(){
    container.classList.remove('active');
}