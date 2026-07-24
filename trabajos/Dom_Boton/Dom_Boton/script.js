const btnColor = document.querySelector(".btn");
const bodyColor = document.querySelector("body");

const colores = ["green", "white", "blue", "red", "orange", "purple", "black", "grey"];
let count = 0;

bodyColor.style.background = "grey";
btnColor.addEventListener("click", cambiarColor);

function cambiarColor(){
    console.log("Si cambia de color");
    const color = parseInt(Math.random() * colores.length);
    bodyColor.style.background = colores[color];
    count++;
}