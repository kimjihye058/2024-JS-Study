const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //Variables that contain only strings are capitalized

function onLoginSubmit(event) {
    event.preventDefault();     // Prevent default behavior in browser
    loginForm.classList.add(HIDDEN_CLASSNAME);  // add calss 'hidden' in form
    const username = loginInput.value;      
    localStorage.setItem("username", username); // saving Username
    // greeting.innerText = "Hello " + username;   // combining Strings 1
    greeting.innerText = `Hello ${username}`;   // combining Strings 2
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
