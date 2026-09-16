// ================= MOBILE MENU =================

const menu = document.querySelector(".menu");
const nav = document.querySelector("#nav");

menu.addEventListener("click", () => {

    nav.classList.toggle("open");

});


// Close menu after clicking link

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

    });

});



// ================= SCROLL REVEAL =================

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold:0.12
    }

);


document.querySelectorAll(".reveal").forEach(element => {

    observer.observe(element);

});



// ================= ACTIVE NAV =================

const sections = document.querySelectorAll(
    "main section[id]"
);

const navLinks = document.querySelectorAll(
    "nav a"
);


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        if(window.scrollY >= sectionTop){

            current = section.id;

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if(
            link.getAttribute("href")
            === "#" + current
        ){

            link.classList.add("active");

        }

    });

});



// ================= CURSOR GLOW =================

const cursor =
    document.querySelector(".cursor");


window.addEventListener("mousemove", event => {

    cursor.style.left =
        event.clientX + "px";

    cursor.style.top =
        event.clientY + "px";

});



// ================= CONTACT FORM =================

const form =
    document.querySelector("#contactForm");

const message =
    document.querySelector("#formMessage");


form.addEventListener("submit", event => {

    event.preventDefault();

    const name =
        document.querySelector("#name").value;

    message.innerText =
        `Thanks ${name}! Your message has been received.`;

    form.reset();

});



// ================= YEAR =================

document.querySelector("#year").innerText =
    new Date().getFullYear();