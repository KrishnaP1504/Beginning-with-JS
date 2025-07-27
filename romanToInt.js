/**
 * @param {string} s The Roman numeral string.
 * @return {number} The integer conversion.
 */
const romanToInt = function(s) {
    // Map to store the integer values of Roman numerals.
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const currentVal = romanMap[s[i]];
        const nextVal = romanMap[s[i + 1]];

        // If the current numeral is smaller than the next one, subtract it.
        // This handles cases like IV (4) and IX (9).
        if (nextVal > currentVal) {
            result -= currentVal;
        } else {
            // Otherwise, add the current numeral's value.
            result += currentVal;
        }
    }

    return result;
};

// --- Example Usage ---
console.log(`III = ${romanToInt('III')}`);        // Output: III = 3
console.log(`LVIII = ${romanToInt('LVIII')}`);    // Output: LVIII = 58
console.log(`MCMXCIV = ${romanToInt('MCMXCIV')}`);// Output: MCMXCIV = 1994