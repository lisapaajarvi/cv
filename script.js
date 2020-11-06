window.onload = main;

function main() {
    addEventListeners();
}

function addEventListeners() {
    let leafDiv1 = document.getElementsByClassName("div1");
    console.log(leafDiv1);
    leafDiv1.onclick = openLeafDiv1();

 //   let leafDiv2 = document.getElementsByClassName("div2");
 //   leafDiv2.onclick = openLeafDiv2;
}

function openLeafDiv1() {
    let leafDiv1 = document.getElementsByClassName("div1");
    leafDiv1.classList.add("open");
    console.log(leafDiv1);

}