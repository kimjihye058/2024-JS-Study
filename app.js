const title = document.querySelector("div.hello:first-child h1");

console.dir(title);

function handleTitleClick() { //When a click event occurs
    title.style.color = "blue";
} 

function handleMouseEnter() { //When the mouse touches h1
    title.innerText ="Mouse is here!";
}

function handleMouseLeave() { //when the mouse is gone from h1
    title.innerText = "Mouse is gone!";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);