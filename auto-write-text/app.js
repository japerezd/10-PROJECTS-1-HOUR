// const text = 'This is a test :)';
const text = document.querySelector('#text-input');
const div = document.querySelector('#text-div');
let index = 0;

function writeText(){
    const valueTex = text.value;
    div.innerText = valueTex.slice(0,index);
    index++;
    console.log(index);
if(index > valueTex.length) index = 0;
}

setInterval(writeText, 100);