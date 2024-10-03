// JavaScript Document
console.log("hi");

const menuOpenButton = document.querySelector("nav:nth-of-type(1) button");

const deNav = document.querySelector("nav:nth-of-type(2)");

menuOpenButton.onclick = openMenu;

function openMenu() {
    console.log('hi')
  deNav.classList.toggle("toonMenu");
}



const menuSluitButton = document.querySelector("nav:nth-of-type(2) button");

menuSluitButton.onclick = sluitMenu;

function sluitMenu() {
  deNav.classList.remove("toonMenu");
}