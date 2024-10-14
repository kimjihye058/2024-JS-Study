const age = parseInt( prompt("How old are you?") );
// NaN이 console에 나온다면 Not a Number임(= 숫자가 아님)

console.log(isNaN(age));
// isNaN: 값이 숫자인지 아닌지 boolean으로 나타냄
// 숫자라면 false, 숫자가 아니라면 true
