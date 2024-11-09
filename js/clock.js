const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");     // Be at least 2 characters long otherwise add "0" before
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText =`${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);