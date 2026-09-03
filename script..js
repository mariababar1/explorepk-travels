// ======================================
// ExplorePK Travels - Script.js
// Part 1
// ======================================

// ==============================
// Mobile Menu Toggle
// ==============================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

    // Close menu after clicking link

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });

}

// ==============================
// Navbar Scroll Effect
// ==============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 80) {

        navbar.style.background = "rgba(10,10,10,.92)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

    }

    else {

        navbar.style.background = "rgba(0,0,0,.35)";
        navbar.style.boxShadow = "none";

    }

});

// ==============================
// Active Navigation
// ==============================

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.pageYOffset >= sectionTop &&
            window.pageYOffset < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ==============================
// Smooth Scroll
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ==============================
// Search Form Validation
// ==============================

const searchForm = document.getElementById("searchForm");

if (searchForm) {

    searchForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const destination = document.getElementById("destination").value;
        const days = document.getElementById("days").value;
        const budget = document.getElementById("budget").value;

        if (!destination || !days || !budget) {

            alert("Please select Destination, Duration and Budget.");

            return;

        }

        alert(
            "Great Choice!\n\n" +
            "Destination : " + destination +
            "\nDuration : " + days +
            "\nBudget : " + budget +
            "\n\nOur luxury travel team will help you choose the perfect package."
        );

    });

}

// ==============================
// Newsletter Form
// ==============================

const newsletterForm = document.getElementById("newsletterForm");

if (newsletterForm) {

    newsletterForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const email = document.getElementById("email").value.trim();

        if (email === "") {

            alert("Please enter your email address.");

            return;

        }

        alert("Thank you for subscribing to ExplorePK Travels!");

        newsletterForm.reset();

    });

}
// ======================================
// ExplorePK Travels - Script.js
// Part 2
// ======================================

// ==============================
// Testimonial Auto Slider
// ==============================

const testimonials = document.querySelectorAll(".testimonial");

let currentTestimonial = 0;

function showTestimonial(index) {

    testimonials.forEach(item => {

        item.classList.remove("active");

    });

    if (testimonials[index]) {

        testimonials[index].classList.add("active");

    }

}

if (testimonials.length > 0) {

    showTestimonial(currentTestimonial);

    setInterval(() => {

        currentTestimonial++;

        if (currentTestimonial >= testimonials.length) {

            currentTestimonial = 0;

        }

        showTestimonial(currentTestimonial);

    }, 4000);

}

// ==============================
// Counter Animation
// ==============================

const counters = document.querySelectorAll(".count");

let counterStarted = false;

function startCounter() {

    if (counterStarted) return;

    const counterSection = document.querySelector(".counter");

    if (!counterSection) return;

    const trigger = counterSection.getBoundingClientRect().top;

    if (trigger < window.innerHeight - 120) {

        counterStarted = true;

        counters.forEach(counter => {

            const target = +counter.dataset.target;

            let count = 0;

            const speed = target / 150;

            function updateCounter() {

                count += speed;

                if (count < target) {

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(updateCounter);

                }

                else {

                    counter.innerText = target;

                }

            }

            updateCounter();

        });

    }

}

window.addEventListener("scroll", startCounter);
window.addEventListener("load", startCounter);

// ==============================
// Scroll To Top Button
// ==============================

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (!scrollBtn) return;

    if (window.scrollY > 350) {

        scrollBtn.style.display = "block";

        scrollBtn.style.opacity = "1";

    }

    else {

        scrollBtn.style.opacity = "0";

        setTimeout(() => {

            if (window.scrollY <= 350) {

                scrollBtn.style.display = "none";

            }

        }, 250);

    }

});

if (scrollBtn) {

    scrollBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

// ==============================
// Loader
// ==============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (!loader) return;

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

        loader.style.transition = "0.6s";

    }, 1200);

});

// ==============================
// Fade In Animation
// ==============================

const revealElements = document.querySelectorAll(

    ".destination-card, .package-card, .why-card, .gallery img, .counter-box"

);

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            revealObserver.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.15

});

revealElements.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "all .7s ease";

    revealObserver.observe(item);

});
// ======================================
// ExplorePK Travels - Script.js
// Part 3 (Final)
// ======================================

// ==============================
// Gallery Image Zoom
// ==============================

const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        const overlay = document.createElement("div");
        overlay.className = "gallery-overlay";

        overlay.innerHTML = `
            <span class="gallery-close">&times;</span>
            <img src="${img.src}" class="gallery-preview">
        `;

        document.body.appendChild(overlay);

        document.body.style.overflow = "hidden";

        overlay.addEventListener("click", () => {

            overlay.remove();
            document.body.style.overflow = "auto";

        });

    });

});

// ==============================
// Button Ripple Effect
// ==============================

const buttons = document.querySelectorAll(

".btn1,.btn2,.book-btn,.package-btn,#newsletterForm button,#searchForm button"

);

buttons.forEach(button => {

    button.addEventListener("click", function(e){

        const circle = document.createElement("span");

        const diameter = Math.max(this.clientWidth,this.clientHeight);

        circle.style.width = circle.style.height = diameter + "px";

        circle.style.left = e.offsetX - diameter/2 + "px";

        circle.style.top = e.offsetY - diameter/2 + "px";

        circle.classList.add("ripple");

        const ripple = this.querySelector(".ripple");

        if(ripple){

            ripple.remove();

        }

        this.appendChild(circle);

    });

});

// ==============================
// Hero Parallax Effect
// ==============================

const heroVideo = document.querySelector(".hero video");

window.addEventListener("scroll",()=>{

    if(heroVideo){

        heroVideo.style.transform =
        `translateY(${window.pageYOffset*0.25}px)`;

    }

});

// ==============================
// Navbar Hide / Show
// ==============================

let lastScroll = 0;

window.addEventListener("scroll",()=>{

    const current = window.pageYOffset;

    if(current > lastScroll && current > 150){

        navbar.style.top = "-90px";

    }

    else{

        navbar.style.top = "0";

    }

    lastScroll = current;

});

// ==============================
// Image Hover Animation
// ==============================

const cards = document.querySelectorAll(

".destination-card,.package-card"

);

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transition=".4s";
        card.style.transform="translateY(-12px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0)";

    });

});

// ==============================
// Console Message
// ==============================

console.log("%cExplorePK Travels",
"color:#f4b400;font-size:22px;font-weight:bold;");

console.log("Luxury Travel Website Loaded Successfully.");

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        setTimeout(() => {

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";

        },1800);

    }

});