const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    clock.innerText =`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock();     // time came out right away
setInterval(getClock, 1000);