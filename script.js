window.addEventListener("load", main);

let leafSize;
let counter = 0;
let leftLeaves;
let rightLeaves;

function main() {
    addEventListeners();
    startLeafAnimation();
    leftLeaves = document.querySelectorAll(".leaf-left")
    rightLeaves = document.querySelectorAll(".leaf-right")
}

function addEventListeners() {
    const contactIcon = document.getElementById("contact-icon")
    contactIcon.onclick = openContactText;

    const aboutIcon = document.getElementById("about-icon")
    const aboutMobileIcon = document.getElementById("about-mobile-icon")
    aboutIcon.onclick = openAboutText;
    aboutMobileIcon.onclick = openAboutText;

    const educationLeaf = document.querySelectorAll(".leaf-div1")
    educationLeaf[0].onclick = openEducationText;
    educationLeaf[1].onclick = openEducationText;


    const workLeaf = document.querySelectorAll(".leaf-div2")
    workLeaf[0].onclick = openWorkText;
    workLeaf[1].onclick = openWorkText;

    const musicLeaf = document.querySelectorAll(".leaf-div3")
    musicLeaf[0].onclick = openMusicText;
    musicLeaf[1].onclick = openMusicText;

    const codingLeaf = document.querySelectorAll(".leaf-div4")
    codingLeaf[0].onclick = openCodingText;
    codingLeaf[1].onclick = openCodingText;

    const japaneseLeaf = document.querySelectorAll(".leaf-div5")
    japaneseLeaf[0].onclick = openJapaneseText;
    japaneseLeaf[1].onclick = openJapaneseText;

    const mobileMenuIcon = document.querySelector(".mobile-menu-icon")
    mobileMenuIcon.onclick = openMobileMenu;
}

function startLeafAnimation () {
    setInterval (changeLeafSize, 100);
}

function changeLeafSize() {

    //update border radius variable
    if(counter < 50) {
        leafSize = 10 - counter/10        
    }
    else {
        leafSize = 5 + ((counter - 50)/10)
    }

    // change size of leaves
    for(let i = 0; i < leftLeaves.length; i++) {
        leftLeaves[i].style.borderRadius = "0 " + leafSize + "rem 0 " + leafSize +"rem";
    }
    for(let i = 0; i < rightLeaves.length; i++) {
        rightLeaves[i].style.borderRadius = leafSize + "rem 0 " + leafSize +"rem 0";
    }
    //update counter
    counter ++;
    if(counter == 100) {
        counter = 0;
    }
}

function openMobileMenu() {
    let mobileMenu = document.getElementById("mobile-menu")
    mobileMenu.style.right = 0;
    mobileMenu.onclick = function(){
        mobileMenu.style.right = "-30rem";
    };
}
function openContactText() {
    removeCurrentText();
    let contactText = document.getElementById("contact");
    contactText.classList.add("show-textdiv");
}

function openAboutText() {
    removeCurrentText();
    let aboutText = document.getElementById("about");
    aboutText.classList.add("show-textdiv");
}

function openEducationText() {
    removeCurrentText();
    let educationText = document.getElementById("education");
    educationText.classList.add("show-textdiv");
}

function openWorkText() {
    removeCurrentText();
    let workText = document.getElementById("work");
    workText.classList.add("show-textdiv");
}

function openMusicText() {
    removeCurrentText();
    let musicText = document.getElementById("music");
    musicText.classList.add("show-textdiv");
}

function openCodingText() {
    removeCurrentText();
    let codingText = document.getElementById("coding");
    codingText.classList.add("show-textdiv");
}

function openJapaneseText() {
    removeCurrentText();
    let japaneseText = document.getElementById("japanese");
    japaneseText.classList.add("show-textdiv");
}
function removeCurrentText() {
    const textDivs = document.querySelectorAll(".textdiv");
    for (let i = 0; i < textDivs.length; i++) {
        if (textDivs[i].classList.contains("show-textdiv")) {
            textDivs[i].classList.remove("show-textdiv");
            break;
        }
    }      
}
