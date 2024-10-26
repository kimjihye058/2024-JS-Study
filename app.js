const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() { //When a click event occurs, this function is executed
    console.log("title was clicked");
} 

title.addEventListener("click", handleTitleClick);    // listening CLICK somebody title
