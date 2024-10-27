const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    const clickedClass = "clicked";
    if(h1.classList.contains(clickedClass)) { //classList: Allows for manipulation of element's class name
        h1.classList.remove(clickedClass);
    } else{
        h1.classList.add(clickedClass);
    }
}

h1.addEventListener("click", handleTitleClick);
