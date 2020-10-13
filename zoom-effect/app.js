const image = document.querySelector('img');
const container = document.querySelector('.container');

container.addEventListener('mousemove',zoom);
container.addEventListener('mouseleave', quitZoom);

function zoom(e){
    let x = e.pageX - e.target.offsetLeft;
    let y = e.pageY - e.target.offsetTop;
    console.log(x, y);
    image.style.transformOrigin = `${x}px ${y}px`;
    image.style.transform = 'scale(2)';
}

function quitZoom(){
    image.style.transformOrigin = 'center center';
    image.style.transform = 'scale(1)';
}