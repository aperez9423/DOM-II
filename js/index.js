// Your code goes here
const headingsList = document.querySelectorAll('h2');

headingsList[0].addEventListener('mouseenter',(event) => {
    headingsList[0].style.color = 'red';
});

headingsList[0].addEventListener('mouseleave',(event) => {
    headingsList[0].style.color = 'black';
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

images[1].addEventListener('mousedown', (event) => {
    images[1].style.border = 'thick solid hotpink';
});


images[2].addEventListener('mousedown', (event) => {
    images[2].style.border = 'thick solid hotpink';
});

images[3].addEventListener('mousedown', (event) => {
    images[3].style.border = 'thick solid hotpink';
});

images[1].addEventListener('mouseup', (event) => {
    images[1].style.border = 'thick solid white';
});

images[2].addEventListener('mouseup', (event) => {
    images[2].style.border = 'thick solid white';
});

images[3].addEventListener('mouseup', (event) => {
    images[3].style.border = 'thick solid white';
});

const nav = document.querySelectorAll('a');

document.addEventListener ('keydown', (event) => {
    nav[2].style.visibility = 'hidden';
});

document.addEventListener ('keyup', (event) => {
    nav[2].style.visibility = 'visible';
});

nav.forEach((element) => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
    })
});

const heading = document.querySelector('h1');

window.addEventListener('scroll', () => {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    heading.style.color = 'purple';
});

window.addEventListener('resize', (event) => {
    document.body.style.color = 'purple';
    event.stopPropagation();
});





