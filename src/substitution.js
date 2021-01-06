const alphabetCode = (char) => (char.toLowerCase().charCodeAt(0)) - HIGHER_LETTER + ALPH_LENGTH; // Converts charactor to lowercase & converts it into a Javascript Character Code.

// Global Variable Declartions
const HIGHER_LETTER = 'z'.charCodeAt(0);
const LOWER_LETTER = 'a'.charCodeAt(0);
const ALPH_LENGTH = 26;
const SPACE = alphabetCode(' ');

// input refers to the inputted text to be encoded or decoded.
// alphabet refers to substitution alphabet.
// encode refers to whether you should encode or decode the message.
function substitution(input, alphabet, encode = true) {
    if (alphabet.length !== ALPH_LENGTH || !input) { // Check it see if alphabet if actual length of the alphabet
        return false;

    } else { // Here we'll compare letters to see if we have any duplicates
        for (let letter in alphabet) {
            if (alphabet.slice(letter + 1).includes(alphabet[letter])) {
                return false;
            }
        }
    }
    let returnString = '';
    const inArray = [...input]; // Spread our input into an array
    if (encode) {
        for (let i = 0; i < input.length; i++) { // Encode our input
            if(input[i].toLowerCase().charCodeAt(0) >= LOWER_LETTER && input[i].toLowerCase().charCodeAt(0) <= HIGHER_LETTER || input[i].charCodeAt(0) === ' '.charCodeAt(0) )
                alphabetCode(inArray[i]) === SPACE ? returnString += ' ' : returnString += alphabet[alphabetCode(inArray[i]) - 1];
        }
    } else {
        const alphabetArray = [...alphabet]
        for (let i = 0; i < input.length; i++) { // Decode out output by returning a letter based on index position
            let indexPosition = 0;
            for (let letter in alphabetArray) {
                if (alphabetArray[letter] === inArray[i]){
                    indexPosition = letter;
                    indexPosition++; // Increment by one to get the alphabet position number
                }
            }
            alphabetCode(inArray[i]) === SPACE ? returnString += ' ' : returnString += String.fromCharCode(indexPosition + LOWER_LETTER - 1)
        }
    }
    return returnString;
}
module.exports = substitution;
