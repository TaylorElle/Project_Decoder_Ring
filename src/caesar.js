const alphabet = [
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

// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // 3 parameters: input is the TEXT to be decoded; shift is the NUMBER the letters are shifted by (+ or -); encode is BOOLEAN and true means encode. false means decode
    //store output
    const output = [];
    //return early for shift issues
    if (shift === 0 || !shift || shift < -25 || shift > 25) {
      return false;
    }
    //lowercase the input
    const inputLowCase = input.toLowerCase();

    //if encode = true
    if (encode === true) {
      //loop through the input length
      for (let i = 0; i < inputLowCase.length; i++) {
        //if the symbol isn't in the alphabet, push it to the output
        if (!alphabet.includes(inputLowCase[i])) {
          output.push(inputLowCase[i]);
        }
        //else loop through the alphabet
        else {
          for (let j = 0; j < alphabet.length; j++) {
            // if the input at index is equal to the alphabet and index
            if (inputLowCase[i] === alphabet[j]) {
              //positive shift
              if (shift > 0) {
                if (j + shift >= alphabet.length) {
                  //add in shift somewhere
                  newLetter = alphabet[j + shift - alphabet.length];
                  output.push(newLetter);
                }
                // wraparound
                // get the new letter
                else {
                  newLetter = alphabet[j + shift];
                  //push it to the output array
                  output.push(newLetter);
                }
                //negative shift
              } else if (shift < 0) {
                if (j + shift < 0) {
                  newLetter = alphabet[j + shift + alphabet.length];
                  output.push(newLetter);
                } else {
                  newLetter = alphabet[j + shift];
                  output.push(newLetter);
                }
              }
            }
          }
        }
      }
    }

    //if encode == false (decode)
    else if (encode === false) {
      //loop through the input length
      for (let i = 0; i < inputLowCase.length; i++) {
        //maintain spaces
        if (!alphabet.includes(inputLowCase[i])) {
          output.push(inputLowCase[i]);
        } else {
          //loop through the alphabet
          for (let j = 0; j < alphabet.length; j++) {
            //if it finds the letter
            if (inputLowCase[i] === alphabet[j]) {
              // if the shift is a positive number
              if (shift > 0) {
                //if the shift is a pos number, make it a negative number and shift to the left
                const newShift = shift * -1;
                if (j + newShift < 0) {
                  //wrap around the alphabet
                  const newLetter = alphabet[j + newShift + alphabet.length];
                  output.push(newLetter);
                } else {
                  // if the newShift is greater than 0
                  const newLetter = alphabet[j + newShift];
                  output.push(newLetter);
                }
              } else if (shift < 0) {
                //if shift is neg number, change to a pos number and shift to right
                //change shift to pos number
                const newShift = shift * -1;
                if (j + newShift >= 26) {
                  //wrap around alphabet
                  const newLetter = alphabet[j + newShift - alphabet.length];
                  output.push(newLetter);
                } else {
                  const newLetter = alphabet[j + newShift];
                  output.push(newLetter);
                }
              }
            }
          }
        }
      }
    }
    //after it all loops return output
    return output.join("");
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
