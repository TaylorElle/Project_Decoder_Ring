const { expect } = require("chai");
const polybius = require("../src/polybius");

describe("polybius", () => {
  // maintain spaces
  it("should maintain spaces when decoding", () => {
    const actual = polybius("3251131343 2543241341", false);
    const expected = "hello world";
    expect(actual).to.equal(expected);
  });
  // ignore capital letters
  it("should ignore capital letters and maintain spaces when encoding", () => {
    const actual = polybius("Hello world");
    const expected = "3251131343 2543241341";
    expect(actual).to.equal(expected);
  });
  // when decoding, number of characters in string (not including spaces) should be even. if not, return false
  it("should return false if when decoding, the characters (not including spaces) are not even", () => {
    const actual = polybius("44324233521254134", false);
    const expected = false;
    expect(actual).to.equal(expected);
  });
  // when encoding, output should be a string
  it("should return a string when encoding", () => {
    const actual = polybius("thinkful", true);
    const expected = "4432423352125413";
    expect(actual).to.equal(expected);
  });
  //when decoding, i & j should both be shown
  it("should show i AND j if decoding", () => {
    const actual = polybius("4432423352125413", false);
    const expected = "th(i/j)nkful";
    expect(actual).to.equal(expected);
  });
  // when encoding, i and j share a space
  it(" should have i and j share a space when encoding", () => {
    const actual = polybius("jiffy");
    const expected = "4242121245";
    expect(actual).to.equal(expected);
  });
  /*
  //only spaces and letters are included in the input
  it ("should only have spaces and letters in the input", ()=> {
      const actual = polybius();
      const expected = ;
      expect(actual).to.equal(expected);
  })
  */
});
