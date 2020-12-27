const intro = document.querySelector('.intro')
const video = intro.querySelector('video')
const text = intro.querySelector('h1')
const text2 = intro.querySelector('h2')

const section = document.querySelector('section')
const end = section.querySelector('h1')

//scroll magic
const controller = new ScrollMagic.Controller()

let scene = new ScrollMagic.Scene({
        duration: 14000,
        triggerElement: intro,
        triggerHook: 0
    })
    .addTo(controller)
    .setPin(intro)
    .addIndicators()

//Text Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 })



//Video Animation
let accelamount = 0.1
let scrollpos = 0
let delay = 0

scene.on('update', e => {
    scrollpos = e.scrollPos / 1000 //to have second
})

setInterval(() => {
    delay += (scrollpos - delay) * accelamount
    video.currentTime = delay
}, 33.33)