const age = parseInt( prompt("How old are you?") );
// NaN이 console에 나온다면 Not a Number임(= 숫자가 아님)

if (isNaN(age)  || age < 0) {
    //condition === true
    console.log("Please write a real positive number.");
} else if (age < 18) {
    console.log("You are too young.");
} else if (age >= 18 && age <= 50) {
    console.log("You can drink.");
} else if (age > 50 && age <= 80) {
    console.log("You should exercise.");
} else if (age === 100) {
    console.log("wow you are wise!");
} else if (age > 80) {
    console.log("You can do whatever you want!");
}

// OR(||) operator
// true || true === true
// false || true === true
// true || false === true
// false || false === false

// AND(&&) operator
// true && true === true
// false && true === false
// true && false === false
// false && false === false

