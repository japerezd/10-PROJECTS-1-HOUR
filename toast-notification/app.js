const container = document.querySelector('.container');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    createNotification();
});

function createNotification(){
    const notification = document.createElement('div');
    notification.classList.add('toast');
    notification.style.background = randomColors();
    if(notification.style.background.includes('black')) notification.style.color = 'white';
    container.appendChild(notification);
    notification.innerHTML = 'You clicked there';
    setTimeout(()=>{
        notification.remove();
    },2500);
}

function randomColors(){
    const colors = ['red','blue','cyan','yellow','green','black','purple','gray'];
    let random = Math.random() * (colors.indexOf('red') - (colors.length - 1)) + colors.indexOf('gray');
    let randomFloor = Math.floor(random);
    return colors[randomFloor];
}