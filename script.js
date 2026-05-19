// =========================
// ACTIVE NAVIGATION MENU
// =========================

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {

    link.addEventListener("click", function(){

        navLinks.forEach(item => {

            item.classList.remove("active");

        });

        this.classList.add("active");

    });

});


// =========================
// BACKGROUND COLOR CHANGE
// =========================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector("nav");

    const body = document.body;

    const features = document.querySelector("#features").offsetTop;

    const courses = document.querySelector("#courses").offsetTop;

    const contact = document.querySelector("#contact").offsetTop;

    const scrollPosition = window.scrollY;


    // HOME SECTION → LIGHT PINK

    if(scrollPosition < features - 150){

        navbar.style.background =
        "rgba(255,240,245,0.9)";

        body.style.background =
        "linear-gradient(135deg,#ffe4ec,#fff1f2)";

    }


    // FEATURES SECTION → LIGHT GREEN

    else if(scrollPosition >= features - 150 &&
            scrollPosition < courses - 150){

        navbar.style.background =
        "linear-gradient(90deg,#bbf7d0,#86efac,#4ade80)";

        body.style.background =
        "linear-gradient(135deg,#dcfce7,#bbf7d0)";

    }


    // COURSES SECTION → LIGHT BLUE

    else if(scrollPosition >= courses - 150 &&
            scrollPosition < contact - 150){

        navbar.style.background =
        "linear-gradient(90deg,#93c5fd,#60a5fa,#2563eb)";

        body.style.background =
        "linear-gradient(135deg,#dbeafe,#bfdbfe)";

    }


    // CONTACT SECTION → LIGHT PURPLE

    else{

        navbar.style.background =
        "linear-gradient(90deg,#d8b4fe,#c084fc,#9333ea)";

        body.style.background =
        "linear-gradient(135deg,#f3e8ff,#e9d5ff)";

    }

});


// =========================
// BUTTON ALERTS
// =========================

document.querySelector(".btn1").addEventListener("click", () => {

    alert("Explore Courses Feature Coming Soon 🚀");

});

document.querySelector(".btn2").addEventListener("click", () => {

    alert("Demo Video Will Be Available Soon 🎥");

});


// =========================
// CONTACT FORM
// =========================

document.querySelector(".send-btn").addEventListener("click", () => {

    alert("Message Sent Successfully ✅");

});


// =========================
// TYPING EFFECT
// =========================

const text = "🚀 Upgrade Your Skills Faster";

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


// =========================
// CONSOLE MESSAGE
// =========================

console.log("SkillWave Website Loaded Successfully 🚀");