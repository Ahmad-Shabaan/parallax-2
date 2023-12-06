let bg = document.getElementById("bg");
let leftTree = document.getElementById("tree-left");
let rightTree = document.getElementById("tree-right");
let leftGate = document.getElementById("gate-left");
let rightGate = document.getElementById("gate-right");
let grass = document.getElementById("grass");
let txtHeader = document.getElementById("txtHeader");

window.addEventListener("scroll", () => {
  let val = window.scrollY;
  leftTree.style.left = `${-val * 0.5}px`;
  rightTree.style.left = `${val * 0.5}px`;
  txtHeader.style.top = `${val * 1.1}px`;
  
  rightGate.style.top = `${val * 1.1}px `;
  leftGate.style.top = `${val * 1.1}px`;
  leftGate.style.left = `calc(${val * 0.5}px - 20%)`;
  rightGate.style.left = `calc(${-val * 0.5}px + 20%)`;
});
