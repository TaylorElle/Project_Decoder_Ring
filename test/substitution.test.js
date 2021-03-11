const { expect } = require("chai");
const substitution = require("../src/substitution");

describe("substitution", () => {
  // alphabet should be exactly 26 characters. if it isn't, return false
  it("should return false if there are not exactly 26 letters of alphabet", () => {
    const input = "thinkful";
    const alphabet = "short";
    const expected = false;
    const actual = substitution(input, alphabet, true);
    expect(actual).to.equal(expected);
  });
  // all of the characters in the alphabet parameter must be unique (only used once). if not, return false
  it("should return false if the all the of alphabet characters are not unique", () => {
    const input = "thinkful";
    const alphabet = "abcabcabcabcabcabcabcabcyz";
    const expected = false;
    const actual = substitution(input, alphabet, true);
    expect(actual).to.equal(expected);
  });
  // capital letters should be ignored
  it("should ignore capital letters", () => {
    const input = "Thinkful";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const expected = "jrufscpw";
    const actual = substitution(input, alphabet, true);
    expect(actual).to.equal(expected);
  });
  //spaces should be maintained
  it("should maintain spaces and symbols in message", () => {
    const input = "you are an excellent spy";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const expected = "elp xhm xf mbymwwmfj dne";
    const actual = substitution(input, alphabet, true);
    expect(actual).to.equal(expected);
  });
  // input and alphabet can have spaces and sybmols
  it("can include spaces and special characters in the input", () => {
    const input = "message";
    const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
    const expected = "y&ii$r&";
    const actual = substitution(input, alphabet, true);
    expect(actual).to.equal(expected);
  });
  //should decode if encode === false
  it("should decode if encode is false", () => {
    const input = "y&ii$r&";
    const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
    const expected = "message";
    const actual = substitution(input, alphabet, false);
    expect(actual).to.equal(expected);
  });
});
