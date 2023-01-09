// Typewriter

let i = 0;
let txt = 'I am Angelina'
let speed = 90;

function typeWriter() {
    if (i < txt.length) {
        document.querySelector('#home-text-header').innerHTML += txt.charAt(i);
        i++;
            setTimeout(typeWriter, speed);
    }
}

typeWriter()