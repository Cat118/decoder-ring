const expect = require("chai").expect;
const substitution = require("../src/substitution");

describe("substitution", () => {
    it("Should only include spaces and letters.", () => {
        const expected = 'jrufscpw';
        const actual = substitution("t!hi!@#nk!ful?", "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.equal(expected);
    });
    it("Should maintain spaces should be maintained throughout.", () => {
        const expected = 'elp xhm xf mbymwwmfj dne';
        const actual = substitution('You are an excellent spy', 'xoyqmcgrukswaflnthdjpzibev');
        expect(actual).to.equal(expected);
    });
    
    it("Should actually decode", () => {
        const expected = 'thinkful';
        const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
        expect(actual).to.equal(expected);
    });

    it("Should return false if alphabet parameter must be string of exactly 26 characters.", () => {
        const actual = substitution('thinkful', 'short');
        expect(actual).to.be.false;
    });
    it("Should return false if all of the characters in the alphabet parameter are not unique.", () => {
        const actual = substitution('thinkful', 'abcabcabcabcabcabcabcabcyz');
        expect(actual).to.be.false;
    });
    it('Should return false if input or alphabet is missing', () => {
        const actual = substitution("", "");
        expect(actual).to.be.false;
    });
})
