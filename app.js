const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    h1.className = "active"; // .active of css
}

h1.addEventListener("click", handleTitleClick);
