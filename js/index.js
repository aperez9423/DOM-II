// Your code goes here
const headingsList = document.querySelectorAll('h2');

headingsList[0].addEventListener('mouseover',(event) => {
    headingsList[0].style.color = 'red';
});

const images = document.querySelectorAll('img');

images[0].addEventListener('click', (event) => {
    images[0].style.transform = 'scale(1.5)';
    images[0].style.transition = 'transform 1s'
});

images[0].addEventListener('dblclick', (event) => {
    images[0].style.transform = 'scale(1)';
    images[0].style.transition = 'transform 1s'
});

const body = querySelector('body');

window.addEventListener('click', () => {
    document.body.style = 'color: white; background-color = black';
});




