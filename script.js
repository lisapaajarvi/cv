window.addEventListener("load", main);

function main() {
    addEventListeners();
    startLeafAnimation();
}

function addEventListeners() {
    const contactIcon = document.getElementById("contact-icon")
    contactIcon.onclick = openContactText;

    const aboutIcon = document.getElementById("about-icon")
    aboutIcon.onclick = openAboutText;

    const educationLeaf = document.querySelector(".leaf-div1")
    educationLeaf.onclick = openEducationText;


}
let leafSize = 10;

function startLeafAnimation () {
    setInterval (changeLeafSize, 50);
}


function changeLeafSize() {
    //update border radius variable
    let leftLeaves = document.querySelectorAll(".leaf-left")
    if(leafSize >= 5) {
    leafSize -= 0.01;
    }
    // change size of leaves
    leftLeaves[0].style.borderRadius = "0 " + leafSize + "rem 0 " + leafSize +"rem";

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