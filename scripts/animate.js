// first section

const introductiontl = gsap.timeline()
    .to(".animateintro1", {scale: 2, ease:"back", duration:1})
    .to(".animateintro2", {scale: 1.1, ease:"back", duration:1})
    .to(".animateintro3", {rotation: 360, duration: 2})
    .from(".animateintro4", {opacity: 0, duration: 1})