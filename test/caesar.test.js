const expect = require("chai").expect;
const caesar = require("../src/caesar");

describe("caesar", () => {
    it("Should shift so that it goes off the alphabet (e.g. a shift of 3 on the letter z).", () => {
        const expected = 'wklqnixo';
        const actual = caesar("thinkful", 3 );
        expect(actual).to.equal(expected);
    });

    it("Should shift so that it goes off the alphabet a shift of -3 on the letter a).", () => {
        const expected = 'qefkhcri'
        const actual = caesar("thinkful", -3 );
        expect(actual).to.equal(expected);
    });
    it("Should actually decodes.", () => {
        const expected = 'thinkful';
        const actual = caesar("wklqnixo", 3, false );
        expect(actual).to.equal(expected);
    });

    it("Should maintain spaces throughout, as should other non-alphabetic symbols.", () => {
        const expected = 'bpqa !qa @i #amkzmb umaaiom!';
        const actual = caesar('This !is @a #secret message!', 8);
        expect(expected).to.equal(actual);
    });
    it("Should ignore Capital letters.", () => {
        const expected = 'this is a secret message!';
        const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
        expect(actual).to.equal(expected);
    });

    it("Should return false if the shift value is not present or equal to 0.", () => {
        const actual = caesar('thinkful');
        expect(actual).to.be.false;
    });
    it("Should return false if the shift value is greater than 25.", () => {
        const actual =caesar('thinkful', 99);
        expect(actual).to.be.false;
    });
    it("Should return false if the shift is less than -25.", () => {
        const actual = caesar('thinkful', -26);
        expect(actual).to.be.false;
    });
    it("Should return false if shift is 0.", () => {
        const actual = caesar('thinkful', 0);
        expect(actual).to.be.false;
    });
    it('Should return false if input or shift value is missing', () => {
        const actual = caesar()
        expect(actual).to.be.false;
    })
})
