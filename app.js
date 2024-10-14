const age = parseInt( prompt("How old are you?") );
// NaN이 console에 나온다면 Not a Number임(= 숫자가 아님)

if(isNaN(age)) {
    //condition === true
    console.log("Please write a number.");
} else if(age < 18) {
    console.log("You are too young.");
} else if(age >= 18 && age <= 50) {
    console.log("You can drink.");
} else {
    console.log("You can drink.");
}
