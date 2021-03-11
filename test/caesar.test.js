//If the shift value is not present, equal to 0, less than -25, or greater than 25, the function should return false.
//Spaces should be maintained throughout, as should other non-alphabetic symbols.
//Capital letters can be ignored.
//If a letter is shifted so that it goes "off" the alphabet (e.g. a shift of 3 on the letter "z"), it should wrap around to the front of the alphabet (e.g. "z" becomes "c").
const { expect } = require("chai");
const caesar = require("../src/caesar");

//These tests should test that the following are TRUE

describe("caesar", () => {
  it(" should return false if shift isn't present ", () => {
    //If the shift value is not present, the function should return false.
    const actual = caesar("thinkful", undefined, true);
    const expected = false;
    expect(actual).to.equal(expected);
  });
  it(" should return false if shift is equal to 0", () => {
    //If the shift value is equal to 0, the function should return false.
    const actual = caesar("thinkful", 0, true);
    const expected = false;
    expect(actual).to.equal(expected);
  });
  it(" should return false if shift is less than -25", () => {
    //If the shift value is less than -25, the function should return false.
    const actual = caesar("thinkful", -26, true);
    // less than -25
    const expected = false;
    expect(actual).to.equal(expected);
  });
  it(" should return false if shift is greater than 25 ", () => {
    //If the shift value is greater than 25, the function should return false
    const actual = caesar("thinkful", 26, true);
    // greater than 25
    const expected = false;
    expect(actual).to.equal(expected);
  });
  it("should ignore capital letters", () => {
    // if capital letters in the input, should ignore them
    const actual = caesar("AcE", 1, true);
    const expected = "bdf";
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces and symbols in message while encoding", () => {
    // maintain spaces and symbols
    const actual = caesar("This is a secret message!", 8, true);
    const expected = "bpqa qa i amkzmb umaaiom!";
    expect(actual).to.equal(expected);
  });
  it("should wrap around the alphabet if the shift goes past the end of the alphabet when encoding", () => {
    //wrap around at end of alphabet
    const actual = caesar("zebra", 2, true);
    const expected = "bgdtc";
    expect(actual).to.equal(expected);
  });
  it("should wrap around alphabet if the shift is negative when encoding", () => {
    const actual = caesar("This is a secret", -8, true);
    const expected = "lzak ak s kwujwl";
    expect(actual).to.equal(expected);
  });
  it("should decode if encode = false", () => {
    const actual = caesar("wklqnixo", 3, false);
    const expected = "thinkful";
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces and symbols in message while decoding", () => {
    const actual = caesar("bpqa qa i amkzmb umaaiom!", 8, false);
    const expected = "this is a secret message!";
    expect(actual).to.equal(expected);
  });
  it("should ignore capital letters while decoding", () => {
    const actual = caesar("BdF", 1, false);
    const expected = "ace";
    expect(actual).to.equal(expected);
  });
  it("should wrap around alphabet if decoding", () => {
    const actual = caesar("a", 8, false);
    const expected = "s";
    expect(actual).to.equal(expected);
  });
  it("should allow for negative shift to shift to the right when decoding", () => {
    const actual = caesar("a", -1, false);
    const expected = "b";
    expect(actual).to.equal(expected);
  });
  it("should wrap around and negative shift to the right when decoding", () => {
    const actual = caesar("z", -1, false);
    const expected = "a";
    expect(actual).to.equal(expected);
  });
});
