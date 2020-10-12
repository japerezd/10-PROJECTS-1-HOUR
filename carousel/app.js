const images = document.querySelectorAll('.image-container img');
const container = document.querySelector('.image-container');
console.log(images, container);

let index = 0;

function carousel(){
    index++;
    if(index === images.length) index = 0;
    container.style.transform = `translateX(${-index * 500}px)`;
       
}

setInterval(carousel, 2000);

// carousel();