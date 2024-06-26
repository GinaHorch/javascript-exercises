const leapYears = function(year) {
    if (typeof year !== 'number' || !Number.isInteger(year)){
        return "ERROR";
    }
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log(leapYears(1996));
console.log(leapYears(1997));
console.log(leapYears(34992));
console.log(leapYears(1900));
console.log(leapYears(1600));
console.log(leapYears(700));

// Do not edit below this line
module.exports = leapYears;
