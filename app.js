const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function LoginBtnClick() {
    console.log(loginInput.value);        // click시 value가 저장됨
    console.log("click");       // click시 "click"이라고 console에 찍음
}

loginButton.addEventListener("click", LoginBtnClick);