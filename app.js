const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() { //When a click event occurs
    h1.style.color = "blue";
} 

function handleMouseEnter() { //When the mouse touches h1
    h1.innerText ="Mouse is here!";
}

function handleMouseLeave() { //when the mouse is gone from h1
    h1.innerText = "Mouse is gone!";
}

function handleWindowResize() { //When adjusting the window screen
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() { //When copying something (ctrl+c)
    alert("copier!");
}

function handleWindowOffline() { //When the Wi-Fi is not connected
    alert("Wi-Fi not connected");
}

function handleWindowOnline() { //When the Wi-Fi is connected
    alert("Wi-Fi connected");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
