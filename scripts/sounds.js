// variables

const meow = new Audio('sound/meow.mp3');
const playMeow = document.querySelector('.animateintro3');

// meow sound on cartoon cat

playMeow.addEventListener('mouseover', function() {
    meow.play();
})

playMeow.addEventListener('mouseleave', function() {
    meow.pause();
})