window.addEventListener("load", main);

function main() {
    addEventListeners();
}

function addEventListeners() {
let contactIcon = document.getElementById("contact-icon")
contactIcon.onclick = openContactPage;
let aboutIcon = document.getElementById("about-icon")
aboutIcon.onclick = openAboutPage;

    //    let leafDiv2 = document.querySelector(".div2")
//    leafDiv2.onclick = openLeafDiv2;

 //   let leafDiv4 = document.getElementsByClassName("div4");
 //   leafDiv4.onclick = openLeafDiv4;
}

function openContactPage() {
    removeCurrentPage();
    let contactPage = document.getElementById("contact");
    contactPage.classList.add("show-textdiv");
}

function openAboutPage() {
    removeCurrentPage();
    let aboutPage = document.getElementById("about");
    aboutPage.classList.add("show-textdiv");
}

function removeCurrentPage() {
    const pages = document.querySelectorAll(".textdiv");
    for (let i = 0; i < pages.length; i++) {
        if (pages[i].classList.contains("show-textdiv")) {
            pages[i].classList.remove("show-textdiv");
            break;
        }
    }      
}

/*
function openLeafDiv2(event) {
    let leafDiv2 = event.target
    leafDiv2.style.opacity = 1;
    leafDiv2.style.borderRadius = "8rem 0 8rem 0"
    let textDiv1 = document.querySelector(".div3")
    textDiv1.style.visibility = "visible";
} */