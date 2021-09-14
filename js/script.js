const scrollProgress = document.getElementById('scroll-progress');
const height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', () => {
  const scrollTop =
    document.body.scrollTop || document.documentElement.scrollTop;
  scrollProgress.style.width = `${(scrollTop / height) * 100}%`;
});



// HAMBURGER

$('.hamburger').on('click', function(){
  $('.hamburger .ham').toggleClass('active')
  $('.nav-links').toggleClass('active')

$('.nav-header').toggleClass('active')
})


$('.nav-links').on('click', function(){
  $('.hamburger .ham').toggleClass('active')
  $('.nav-links').toggleClass('active')
})





// CARDS

const line = $('.line')
const line2 = $('.line2')

const social = $('#social')
const token = $('#token')
const crowd = $('#crowd')
const goods = $('#goods')

const socialTxt = $('.social-txt')
const tokenTxt = $('.tokens-txt')
const crowdTxt = $('.crowd-txt')
const goodsTxt = $('.goods-txt')


social.on('click', function(){
    social.addClass('active')
    token.removeClass('active')
    crowd.removeClass('active')
    goods.removeClass('active')

    socialTxt.addClass('active')
    tokenTxt.removeClass('active')
    crowdTxt.removeClass('active')
    goodsTxt.removeClass('active')



    line.css('left', '15.5rem')
    line.css('right', 'calc(100% - 15.5rem)')
    line.css('transition', 'none')

    setTimeout(() => {
        line.css('right', '50%')
        line.css('transition', 'all .4s linear')
    },200)

    line2.css('height', 0)
    line2.css('transition', 'none')
    
    setTimeout(() => {        
        line2.css('height', 70)
        line2.css('transition', 'all .2s linear')
    }, 600)
})
token.on('click', function(){
    social.removeClass('active')
    token.addClass('active')
    crowd.removeClass('active')
    goods.removeClass('active')

    socialTxt.removeClass('active')
    tokenTxt.addClass('active')
    crowdTxt.removeClass('active')
    goodsTxt.removeClass('active')

    // line.css('left', '47.8rem')
    // line.css('right', '50%')

    // line2.css('height', 70)

    line.css('left', '47.8rem')
    line.css('right', 'calc(100% - 47.8rem)')
    line.css('transition', 'none')

    setTimeout(() => {
        line.css('right', '50%')
        line.css('transition', 'all .4s linear')
    },200)

    line2.css('height', 0)
    line2.css('transition', 'none')
    
    setTimeout(() => {        
        line2.css('height', 70)
        line2.css('transition', 'all .2s linear')
    }, 600)
})
crowd.on('click', function(){
    social.removeClass('active')
    token.removeClass('active')
    crowd.addClass('active')
    goods.removeClass('active')

    socialTxt.removeClass('active')
    tokenTxt.removeClass('active')
    crowdTxt.addClass('active')
    goodsTxt.removeClass('active')

    // line.css('left', '50%')
    // line.css('right', '47.6rem')

    // line2.css('height', 70)

    line.css('left', 'calc(100% - 47.6rem)')
    line.css('right', '47.6rem')
    line.css('transition', 'none')

    setTimeout(() => {
        line.css('left', '50%')
        line.css('transition', 'all .4s linear')
    },200)

    line2.css('height', 0)
    line2.css('transition', 'none')
    
    setTimeout(() => {        
        line2.css('height', 70)
        line2.css('transition', 'all .2s linear')
    }, 600)
})
goods.on('click', function(){
    social.removeClass('active')
    token.removeClass('active')
    crowd.removeClass('active')
    goods.addClass('active')

    socialTxt.removeClass('active')
    tokenTxt.removeClass('active')
    crowdTxt.removeClass('active')
    goodsTxt.addClass('active')

    // line.css('left', '50%')
    // line.css('right', '15rem')

    // line2.css('height', 70)

    line.css('left', 'calc(100% - 15rem)')
    line.css('right', '15rem')
    line.css('transition', 'none')

    setTimeout(() => {
        line.css('left', '50%')
        line.css('transition', 'all .4s linear')
    },200)

    line2.css('height', 0)
    line2.css('transition', 'none')
    
    setTimeout(() => {        
        line2.css('height', 70)
        line2.css('transition', 'all .2s linear')
    }, 600)
})



// CARDS GO TO PLATFORM-EXTEND ON CLICK ON SMALLER DEVICES
const x = window.matchMedia("(max-width: 1370px)")

const cards = document.querySelectorAll('#platform .card')

function myFunction(x) {
    if (x.matches) { // If media query matches      
        cards.forEach(card => {
            card.addEventListener('click', responsive)
        })
    } else {
        cards.forEach(card => {
            card.removeEventListener('click', responsive)
        })
    }
  }

  function responsive() {
    location.href = '#platform-extend'
  }
  
  myFunction(x) // Call listener function at run time
  
  x.addEventListener('change', myFunction)





// TIMELINE
console.clear();

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);
// gsap.defaults({ease: "none"});

// const pulses = gsap.timeline({
//   defaults: {
//     duration: 0.05, 
//     autoAlpha: 1, 
//     scale: 2, 
//     transformOrigin: 'center', 
//     ease: "elastic(2.5, 1)"
//   }})

const main = gsap.timeline({defaults: {duration: 1},
  scrollTrigger: {
    trigger: "#svg",
    scrub: true,
    start: "top center",
    // markers: true,
    end: "60% center"
  }})
.from(".theLine", {drawSVG: 0}, 0)


const main2 = gsap.timeline({defaults: {duration: 1},
  scrollTrigger: {
    trigger: "#svgMD",
    scrub: true,
    start: "top center",
    // markers: true,
    end: "60% center"
  }})
.from(".theLineMD", {drawSVG: 0}, 0)

const main3 = gsap.timeline({defaults: {duration: 1},
  scrollTrigger: {
    trigger: "#svgTBL",
    scrub: true,
    start: "top center",
    // markers: true,
    end: "60% center"
  }})
.from(".theLineTBL", {drawSVG: 0}, 0)

const main4 = gsap.timeline({defaults: {duration: 1},
  scrollTrigger: {
    trigger: "#svgSM",
    scrub: true,
    start: "top center",
    // markers: true,
    end: "60% center"
  }})
.from(".theLineSM", {drawSVG: 0}, 0)

const main5 = gsap.timeline({defaults: {duration: 1},
  scrollTrigger: {
    trigger: "#svgXSM",
    scrub: true,
    start: "top center",
    // markers: true,
    end: "60% center"
  }})
.from(".theLineXSM", {drawSVG: 0}, 0)



// AOS
AOS.init();


// SLIDER
const swiper = new Swiper('.swiper', {
    // loop: true,  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20
          },
        600: {
            slidesPerView: 2,
            spaceBetween: 20
          },
        800: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1440: {
            slidesPerView: 5,
            spaceBetween: 20,
        }
      }
  })



// TYPEIT
new TypeIt("#heading", {
    speed: 90,
    startDelay: 900,
    waitUntilVisible: true,
    deleteSpeed: 200,
  }).type("Welcme", { delay: 300 })
  .move(-1)
  .move(-1)
  .type("o")
  .move(null, { to: "END" })
  .type(" to")
  .pause(300)
  .break({ delay: 500 })
  .type("SupeeWa", { delay: 200 })
  .move(-2)
  .delete(1)
  .type("r")
  .move(null, { to: "END" })
  .type("ll Platform")
  .go()