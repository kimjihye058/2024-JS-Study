const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    h1.classList.toggle("clicked"); // toggle function checks whether the class name exists
}

h1.addEventListener("click", handleTitleClick);
