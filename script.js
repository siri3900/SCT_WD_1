// ===============================
// SKILLWAVE WEBSITE JAVASCRIPT
// ===============================


// NAVBAR ACTIVE LINK

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {

    link.addEventListener("click", function(){

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


// BUTTON CLICK ALERTS

const exploreBtn = document.querySelector(".btn1");
const demoBtn = document.querySelector(".btn2");

exploreBtn.addEventListener("click", () => {
    alert("Explore Courses Feature Coming Soon 🚀");
});

demoBtn.addEventListener("click", () => {
    alert("Demo Video Will Be Available Soon 🎥");
});


// CONTACT FORM

const sendBtn = document.querySelector(".send-btn");

sendBtn.addEventListener("click", () => {

    let name = document.querySelector("input[type='text']").value;

    let email = document.querySelector("input[type='email']").value;

    let message = document.querySelector("textarea").value;

    if(name === "" || email === "" || message === ""){

        alert("Please Fill All Fields ❌");

    }
    else{

        alert("Message Sent Successfully ✅");

    }

});


// SCROLL ANIMATION

const cards = document.querySelectorAll(".card, .feature-card");

window.addEventListener("scroll", () => {

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < window.innerHeight - 100){

            card.style.opacity = "1";
            card.style.transform = "translateY(0px)";

        }

    });

});


// INITIAL CARD STYLE

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(80px)";
    card.style.transition = "all 1s";

});


// TYPING EFFECT

const text = "Upgrade Your Skills Faster";

let index = 0;

function typingEffect(){

    if(index < text.length){

        document.querySelector(".tag").innerHTML += text.charAt(index);

        index++;

        setTimeout(typingEffect,100);

    }

}

document.querySelector(".tag").innerHTML = "";

typingEffect();


// DARK MODE TOGGLE

const logo = document.querySelector(".logo");

logo.addEventListener("dblclick", () => {

    document.body.classList.toggle("dark-mode");

});


// DARK MODE STYLES

const style = document.createElement("style");

style.innerHTML = `

.dark-mode{
    background:linear-gradient(135deg,#0f172a,#1e1b4b);
    color:white;
}

.dark-mode nav{
    background:#1e293b;
}

.dark-mode .card,
.dark-mode .feature-card,
.dark-mode .contact-box,
.dark-mode .float-box{
    background:#1e293b;
    color:white;
}

.dark-mode section p,
.dark-mode .hero-text p{
    color:#cbd5e1;
}

.dark-mode input,
.dark-mode textarea{
    background:#334155;
    color:white;
}

`;

document.head.appendChild(style);


// COUNTER ANIMATION

let counts = document.querySelectorAll(".count");

counts.forEach(counter => {

    counter.innerText = "0";

    let updateCounter = () => {

        let target = +counter.getAttribute("data-target");

        let current = +counter.innerText;

        let increment = target / 100;

        if(current < target){

            counter.innerText = `${Math.ceil(current + increment)}`;

            setTimeout(updateCounter,30);

        }
        else{

            counter.innerText = target;

        }

    };

    updateCounter();

});


// CONSOLE MESSAGE

console.log("SkillWave Website Loaded Successfully 🚀");