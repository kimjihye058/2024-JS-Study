const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    if(h1.style.color ===  "blue"){ // In === case, make sure that the values on the right and left sides match.
        h1.style.color = "tomato";
    } else{
        h1.style.color = "blue";
    }
}

h1.addEventListener("click", handleTitleClick);
