window.onload = main;

function main() {
    addEventListeners();
}

function addEventListeners() {
    let leafDiv2 = document.querySelector(".div2")
    leafDiv2.onclick = openLeafDiv2;

 //   let leafDiv4 = document.getElementsByClassName("div4");
 //   leafDiv4.onclick = openLeafDiv4;
}

function openLeafDiv2(event) {
    let leafDiv2 = event.target
    leafDiv2.id = "open";
}