// first section

const introductiontl = gsap.timeline()
    .to(".animateintro1", {scale: 2, ease:"back", duration:1})
    .to(".animateintro2", {scale: 1.1, ease:"back", duration:1})
    .to(".animateintro3", {rotation: 360, duration: 2})
    .from(".animateintro4", {opacity: 0, duration: 1})

// scroll reveal

// ScrollReveal({ reset: true });

// ScrollReveal().reveal(".fadein", {
//     duration: 5000,
//     move: 0
// })

// gsap.to(".animateintro1", {
//     scale: 2,
//     duration: 1,
//     ease:"back"
// })

// practising with greensock

// const tl = gsap.timeline()
//     .from(".title", {xPercent:-150, ease:"back", duration:1})
//     .from(".cartooncat", {xPercent:150, ease:"back", duration:1})