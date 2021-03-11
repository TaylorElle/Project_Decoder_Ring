// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
const alphabet = [
  ["a", "b", "c", "d", "e"],
  ["f", "g", "h", "i/j", "k"],
  ["l", "m", "n", "o", "p"],
  ["q", "r", "s", "t", "u"],
  ["v", "w", "x", "y", "z"],
];
const polybiusModule = (function () {
  function polybiusEncode(input) {
    const outputArr = [];
    const newInput = input.toLowerCase();

    //loop through the input
    for (let i = 0; i < newInput.length; i++) {
      //ignore spaces in the input
      if (newInput[i].includes(" ")) {
        outputArr.push(newInput[i]);
        //HOW DO I GET IT TO MOVE ON TO THE NEXT I INDEX?  find method?
      }
      //loop through the alphabet array length (should be 5 in this example)
      for (let j = 0; j < alphabet.length; j++) {
        //make variable for specific letter
        const specificRow = alphabet[j];
        //loop through the array inside the alphabet array (should be 5 in this example)
        for (let k = 0; k < specificRow.length; k++) {
          //if the specific letter matches the input's specific letter (use includes instead of === so i and j can be found)
          if (specificRow[k].includes(newInput[i])) {
            // add one to the index of the first array and add that to the output
            // add one to the index of the second array and add that to the output
            outputArr.push(k + 1);
            outputArr.push(j + 1);
          }
        }
      }
    }
    //after the loop, return the output (should be a string)
    return outputArr.join("");
  }

  function polybiusDecode(input) {
    const outputArr = [];
    //loop through the input array
    for (let i = 0; i < input.length - 1; i += 2) {
      //ignore spaces
      if (input[i].includes(" ")) {
        outputArr.push(input[i]);
        i--;
        //HOW DO I GET IT TO MOVE ON TO THE NEXT I INDEX?
      } else {
        // two numbers at once - those numbers are the (index-1) location of the alphabet array
        //loop through the input array like normal to check for spaces
        // but after you use the two numbers, skip to the 3rd number so you dont look twice
        //

        //make a variable that access the alphabet array at the index row and the index
        //let newRowLet = alphabet[input[i - 1]];
        let newRowLocLet = alphabet[input[i + 1] - 1][input[i] - 1];
        //if the newLetter is an i/j
        if (newRowLocLet === "i/j") {
          // add both i/j in the output
          newRowLocLet = "(" + newRowLocLet + ")";
          outputArr.push(newRowLocLet);
          //if it isn't, add that newLetter to the output as it is
        } else {
          outputArr.push(newRowLocLet);
        }
      }
    }
    return outputArr.join("");
  }

  function polybius(input, encode = true) {
    if (encode === true) {
      return polybiusEncode(input);
    } else {
      //check if it's an odd input
      //make a sum variable
      let sum = 0;
      // loop through the input array
      for (let index = 0; index < input.length; index++) {
        // if there are spaces, add 1 to the sum
        if (input[index] === " ") {
          sum = sum + 1;
        }
      }
      // after the loop, if the length of the input MINUS the sum is divided by two and has a remainder, return false
      if ((input.length - sum) % 2 === 1) {
        return false;
      }
      //  decode if the input is even
      return polybiusDecode(input);
    }
  }
  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
