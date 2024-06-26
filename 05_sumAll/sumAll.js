const sumAll = function(start, end) {
    let sum = 0;
    if (start > end) {
        [start, end] = [end, start];
    } if (start < 0 || end < 0 || typeof start !== 'number' || typeof end !== 'number') {
        return "ERROR";
    }
    for (let i = start; i <= end; i++) {
     sum += i;
    }
    return sum;
 }

 console.log(sumAll(1, 4));
 console.log(sumAll(1, 4000));
 console.log(sumAll(123, 1));
 console.log(sumAll(-10, 4));
 console.log(sumAll(10, "90"));
 console.log(sumAll(10, [90, 1]));

// Do not edit below this line
module.exports = sumAll;
