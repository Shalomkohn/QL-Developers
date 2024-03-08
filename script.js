
// On scroll
window.onscroll = () => {
    let scrollPosition = document.documentElement.scrollTop
    navbarEffectFunc(scrollPosition);
    handleScrollAnimation(scrollPosition)
    handleHeroFadeOnScroll(scrollPosition)
};

// Navbar Position
let lastPosition = 0
let positionWhenScrolledUp = null;

const navbarEffectFunc = (newPosition) => {

    let scrolledUp = newPosition > lastPosition;
    if (scrolledUp && newPosition > positionWhenScrolledUp + 120) {
        document.getElementById("navbar").style.top = "-150px";
    }
    if (newPosition > 150 && !scrolledUp) {
        document.getElementById("navbar").style.top = "0";
        positionWhenScrolledUp = newPosition;
    }

    if (newPosition < 20) {
        document.getElementById("navbar").style.backgroundColor = "transparent";

    } else {
        document.getElementById("navbar").style.backgroundColor = "rgba(0,0,0, 0.3)";
    }
    lastPosition = document.documentElement.scrollTop;
}

// Three Boxes Botton 

document.querySelectorAll(".three-boxes-expand-btn").forEach(button => {
    button.addEventListener("click", () => toggleBox(button))
});

function toggleBox(button) {
    let box = button.parentElement.parentElement;
    if (box.classList.contains("closed")) {
        box.classList.remove("closed")
    } else {
        box.classList.add("closed")
    }
}

// Slick slider

$('.main-slider').slick({
    dots: true,
    infinite: true,
    speed: 1200,
    fade: true,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3200,
    responsive: [
        {
            breakpoint: 1500,
            settings: {
                centerPadding: "150px",
            }
        },
        {
            breakpoint: 750,
            settings: {
                centerPadding: "0",
            }
        }
    ]
});

$('.project-slider').slick({
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1500,
            settings: {
                centerPadding: "150px",
            }
        },
        {
            breakpoint: 750,
            settings: {
                centerPadding: "0",
            }
        }
    ]
});


// Scroll Animation Elements sliding into view

function isElementInViewport(element, timeAdjustment) {
    const rect = element.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);

    return (
        rect.bottom - timeAdjustment <= windowHeight
    );
}

// function handleHeroFadeOnScroll(scrollPosition) {
//     if(window.location.pathname === '/portfolio.html') return
//     let heroContent = document.querySelector("#heroContent")
//     if (scrollPosition > 150) {
//         heroContent.style.opacity = 0
//     } else {
//         heroContent.style.opacity = 1
//     }
// }

function handleScrollAnimation() {
    let boxes = document.querySelectorAll(".box")
    boxes.forEach(box => {
        if (isElementInViewport(box, 200)) {
            box.classList.add("show")
        } else {
            return
        }
    })

    let hiddenWords = document.querySelectorAll(".animation-hide-container h5")
    hiddenWords.forEach(words => {
        if (isElementInViewport(words, 0)) {
            words.classList.add("show")
        } else {
            return
        }
    })

}

// Invest Section Parallax background 

  

// Smooth scrolling

document.querySelectorAll('.anchor').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href') === '/portfolio.html') return

        if(window.location.pathname === '/portfolio.html') return
        
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });

            document.querySelector(".header .menu-btn").checked = false
        }
    });
});
