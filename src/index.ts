import "./style.scss";
import logoImg from "./logo.webp"

const user = "Hello world";

console.log(user);

const img = document.createElement("img");
img.src = logoImg;

document.getElementById("imgContainer").appendChild(img);

const numberA: number = 1;