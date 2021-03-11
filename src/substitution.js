// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // input is the text to be encoded or decoded; has spaces and symbols
    // alphabet is the substitution alphabet
    // encode is true. decode is false

    // return early for alphabet issues

    //if no alphabet OR if alphabet is not equal to 26 length, return false
    if (alphabet === undefined || alphabet.length != 26) {
      return false;
    }
    //make an output array
    const outputArr = [];
    // make a real alphabet array
    const realAlphabetArr = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    //turn the substitution alphabet into an array
    const subAlphabetArr = alphabet.split("");
    //lowercase the input
    const inputLowCase = input.toLowerCase();

    // if alphabet is not unique, return false
    //loop through the subAlphabetArr twice
    for (let k = 0; k < subAlphabetArr.length; k++) {
      for (let l = 0; l < subAlphabetArr.length; l++) {
        //see if any of the letters are duplicates and make sure the index numbers aren't the same
        if (subAlphabetArr[k] === subAlphabetArr[l] && k != l) {
          // if there is a duplicate, return false
          return false;
        }
      }
    }
    //loop through the input string and find the letter that it matches with in the real alphabet
    for (let i = 0; i < inputLowCase.length; i++) {
      // maintain spaces and symbols
      if (inputLowCase[i] === " ") {
        outputArr.push(inputLowCase[i]);
      } else {
        // else(?) start looping through the real alphabet
        for (let j = 0; j < realAlphabetArr.length; j++) {
          if (encode === true) {
            // when you find it, that index number is the index number used on the substitution alphabet
            if (inputLowCase[i] === realAlphabetArr[j]) {
              //push that substitution alphabet and that index number to the output string
              outputArr.push(subAlphabetArr[j]);
            }
          } else if (encode === false) {
            if (inputLowCase[i] === subAlphabetArr[j]) {
              outputArr.push(realAlphabetArr[j]);
            }
          }
        }
      }
    }
    //at the end of the loops, return the output with a .join("")
    return outputArr.join("");
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
