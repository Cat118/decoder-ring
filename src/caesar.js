// Global Variable Declartions
const LOWER_CHAR_CODE = 97;
const HIGHER_CHAR_CODE = 122;
const ALPHABET_LENGTH = 26;

const charPos = (char, shift = 0) => char.charCodeAt(0) + shift; // Converts character into it's key code plus shift

const letterShift = (char, shift = 0, alphabetLength = 0) => String.fromCharCode(charPos(char, shift) + alphabetLength); // Converts charactor to string based on it's key code 

const argsCriteria = (input , shift) => !input || !shift || shift === 0 || shift < -25 || shift > 25;// Checks to see if shift meets the correct criteria
function caesar(input, shift, encode = true) {
    if (argsCriteria(input, shift)) { // Check's to see if we can run the full function
        return false;
    }
    input = input.toLowerCase(); // Changes our entire input into lowercase

    !encode ? shift *= -1 : shift *= 1  // Intialize shift's positive/negative effects

    let returnString = '';

    for (const char of input) {
        if (char.charCodeAt(0) < LOWER_CHAR_CODE || char.charCodeAt(0) > HIGHER_CHAR_CODE) { // Add special characters
            returnString += char;
        } else if (charPos(char, shift) < LOWER_CHAR_CODE) { // +++ Wraps letter around from a to z
            returnString += letterShift(char, shift, ALPHABET_LENGTH)
        } else if (charPos(char, shift) > HIGHER_CHAR_CODE) { // --- Wraps letter around from z to a
            returnString += letterShift(char, shift, -ALPHABET_LENGTH)
        } else { // return letter based on shift
            returnString += letterShift(char, shift);
        }
    }
    return returnString;
}

module.exports = caesar;
