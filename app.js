const calculator = {
    plus: function(a, b){
        return (a+b);
    }, 
    minus: function(a, b){
        return (a-b);
    },
    times: function(a, b){
        return (a*b);
    }, 
    divide: function(a, b){
        return (a/b);
    },
    power: function(a, b){
        return (a**b);
    }, 
}

const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(2, 3);
const timesResult = calculator.times(2, 3);
const divideResult = calculator.divide(2, 3);
const powerResult = calculator.power(2, 3);

console.log(plusResult);
console.log(minusResult);
console.log(timesResult);
console.log(divideResult);
console.log(powerResult);