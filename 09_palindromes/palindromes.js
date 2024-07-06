const palindromes = function (str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
