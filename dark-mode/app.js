const toggle = document.querySelector('#toggle');
const divDarkMode = document.querySelector('.div-dark-mode');

toggle.addEventListener('change', darkMode);

function darkMode(){
    document.body.classList.toggle('active-dark-mode');
    divDarkMode.classList.toggle('active');
}