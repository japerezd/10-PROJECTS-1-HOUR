const changer = document.querySelector('#changer');

changer.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor(){
    document.body.style.background = colorGenerator();
    console.log(colorGenerator());
}

function colorGenerator(){
    let hue = Math.floor(Math.random()*361);
    let saturation = Math.floor(Math.random()*101);
    let lightness = Math.floor(Math.random()*101);
    return `hsl(${hue},${saturation}%,${lightness}%)`;
}