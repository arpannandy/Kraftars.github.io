var typed = new Typed('#element', {
    strings: ['DIGITAL MARKETING SERVICES', 'GRAPHIC DESIGN', 'SEARCH ENGINE OPTIMISATION', 'SOCIAL MEDIA MARKETING', 'WEB DESIGN', 'BRANDING AGENCY', 'WEBSITE CONTENT'],
    typeSpeed: 40,
    smartBackspace: true,
    loop: true,
    loopCount: Infinity,
    fadeOut: true,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 500,
});

// gsap scroll trigger
gsap.to(".header", {
    backgroundColor: "#1b1f2c",
    height: "80px",
    duration: 0.5,
    scrollTrigger: {
        trigger: ".header",
        scroller: "body",
        start: "top -12%",
        end: "top -13%",
        scrub: 2
    }
})

gsap.to(".main", {
    backgroundColor: "#1b1f2c",
    scrollTrigger: {
        trigger: ".main",
        scroller: "body",
        start: "top -40%",
        end: "top -80%",
        scrub: 2
    }
})

//gsap nav
gsap.from("#main-logo", {
    y: -30,
    opacity: 0,
    delay: 0.5,
    duration: 1,
    stagger: 0.2
})

gsap.from("#navbar li", {
    y: -30,
    opacity: 0,
    delay: 0.5,
    duration: 1,
    stagger: 0.2
})


gsap.from(".call-action", {
    y: -30,
    opacity: 0,
    delay: 0.5,
    duration: 1,
    stagger: 0.2
})

// services
// gsap.from(".services h3",{
//     x:-100,
//     opacity:0,
//     duration:0.5,
//     scrollTrigger:{
//         trigger:".services h3",
//         scroller:"body",
//         markers:true,
//         start:"top 50%",
//         end:"top 0",
//         scrub:2,
//     }
// })
var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page4",
        scroller: "body",
        start: "top 50%",
        end: "top -50%",
        scrub: 2,
    }
})
tl2.from(".services", {
    y: 30,
    opacity: 0,
    duration: 0.5,
})
tl2.from(".elem.line1.left", {
    x: -120,
    opacity: 0,
    duration: 1.5,
}, "same1")
tl2.from(".elem.line1.right", {
    x: 120,
    opacity: 0,
    duration: 1.5,
}, "same1")


tl2.from(".elem.line2.left", {
    x: -120,
    opacity: 0,
    duration: 1.5,
}, "same2")
tl2.from(".elem.line2.right", {
    x: 120,
    opacity: 0,
    duration: 1.5,
}, "same2")

tl2.from(".elem.line3.left", {
    x: -120,
    opacity: 0,
    duration: 1.5,
}, "same3")
tl2.from(".elem.line3.right", {
    x: 120,
    opacity: 0,
    duration: 1.5,
}, "same3")
 

tl2.from(".elem.line4.left", {
    x: -120,
    opacity: 0,
    duration: 1.5,
}, "same4")


document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollToPlugin)
    //discover
    const discover_t1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".slide",
            start: "top 20%",
            scrub: 2,
            ease: "ease"
        }
    })
    discover_t1.to(".slide1", {
        y: 220
    })
    discover_t1.to(".slide2", {
        y: 220
    })
    discover_t1.to(".slide3", {
        y: 220
    })
    discover_t1.to(".slide4", {
        y: 220
    })
    const gridWrapper = utils.toArray(".grid-items");

    grid - wrapper.array.forEach(wrapper => {
        //select all element within the current wrapper
        const boxes = wrapper.querySelectorAll('.box');
        //create gsap animation with box element
        boxes.array.forEach(box => {
            // create gsap animation
            gsap.from(".box", {
                y: 500,
                duration: 0.5,
                scrollTrigger: {
                    trigger: ".box",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 4,
                }
            })

        });

    });

});



// image section
gsap.to("#image-section2", {
    clipPath: "circle(100% at 50% 50%)",
    scrollTrigger: {
        trigger: "#image-section > .container",
        start: "top top",
        end: "bottom bottom",
        scrub: 2,
        pin: true,
        onEnter: () => {
            document.body.classList.add("dark-theme")
        },
        onLeaveBack: () => {
            document.body.classList.remove("dark-theme")
        }
    }
})

// project gsap
gsap.to(".project_num",{
    y: 200,
    opacity: 5,
    duration: 1,
    delay: 0.5,
    
    scrollTrigger: {
        trigger: ".project_num",
        scroller: "body",
        start: "top 40%",
        end: "top -10%",
        scrub: 2
    }
})

Shery.textAnimate(".heading h1" /* Element to target.*/, {
    //Parameters are optional.
    style: 1,
    delay:0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  });


gsap.from("#anim",{
    y:30,
    opacity:0,
    ease:Expo,
    duration:2,
    stagger: 0.2
})

// Shery.imageEffect(".main_titles img",{
//     style:3,
//     debug: true
// })
// Shery.imageEffect(".clientimg img",{
//     style:3,
//     debug: true
// })

Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.imageMasker(".main_titles img" /* Element to target.*/, {
    //Parameters are optional.
    mouseFollower: true,
    text: "Kraftars",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
    stagger: 0.2
  });
  
  Shery.imageMasker(".c_img" /* Element to target.*/, {
    //Parameters are optional.
    mouseFollower: true,
    text: "Kraftars",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
    stagger: 0.2
  });

 

// Toggle button functionality
// const toggleButton = document.getElementById('toggle-button');
// const navbar = document.getElementById('navbar');

// toggleButton.addEventListener('click', () => {
//     navbar.classList.toggle('active');
// });

// function toggleMenu() {
//     console.log("Clicked");
//     const menu = document.querySelector('.nav_menu');
//     menu.classList.toggle('active');
//     document.querySelector(".home1").style.marginTop = "100px";
// }
function toggleMenu() {
    console.log("Menu toggled");
    const menu = document.querySelector(".nav_menu");
    menu.classList.toggle("active");
  
    if (window.innerWidth <= 768) {
      const home = document.querySelector(".home1");
      if (menu.classList.contains("active")) {
        home.style.marginTop = "100px";
      } else {
        home.style.marginTop = "0";
      }
    }
  }
  document.addEventListener("click", function (event) {
    const menu = document.querySelector(".nav_menu");
    const toggleBtn = document.querySelector(".toggle-btn");
    if (!menu.contains(event.target) && !toggleBtn.contains(event.target)) {
      if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        const home = document.querySelector(".home1");
        home.style.marginTop = "0"; 
      }
    }
  });
  


document.querySelector('.explore-btn').addEventListener('click', function () {
    alert('Explore more about us!');
});

document.querySelector('.quote-btn').addEventListener('click', function () {
    alert('Request a quote now!');
});





//   brands
var copy = document.querySelector(".companylogos-slide").cloneNode(true);
document.querySelector(".companylogos").appendChild(copy);



let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
