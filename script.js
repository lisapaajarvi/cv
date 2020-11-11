window.addEventListener("load", main);

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
    aboutIcon.onclick = openAboutText;

    const educationLeaf = document.querySelector(".leaf-div1")
    educationLeaf.onclick = openEducationText;


}
let leafSize;
let counter = 0;
let leftLeaves;
let rightLeaves;

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
    counter ++;
    if(counter == 100) {
        counter = 0;
    }
}

function openContactText() {
    removeCurrentText();
    let contactText = document.getElementById("contact");
    contactText.classList.add("show-textdiv");
}
    //leftLeaves.forEach(changeLeftLeafSize)
function openAboutText() {
    removeCurrentText();
    let aboutText = document.getElementById("about");
    aboutText.classList.add("show-textdiv");
}

function openEducationText(event) {
    removeCurrentText();
    let educationText = document.getElementById("education");
    educationText.classList.add("show-textdiv");
    event.target.style.opacity = 1;
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

/*
function openLeafDiv2(event) {
    let leafDiv2 = event.target
    leafDiv2.style.opacity = 1;
    leafDiv2.style.borderRadius = "8rem 0 8rem 0"
    let textDiv1 = document.querySelector(".div3")
    textDiv1.style.visibility = "visible";
} */