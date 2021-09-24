# Project_Decoder_Ring



**Project rubric**

For the Caesar shift (example: caesar("Zebra Magazine", 3) => "cheud pdjdclqh"), the tests that you write should test that the following is true:

It returns false if the shift value is equal to 0, less than -25, greater than 25, or not present.
It ignores capital letters. (For example, the results of A Message and a message should be the same.)
When encoding, it handles shifts that go past the end of the alphabet. (For example, shifting z to the right by 3 should cause the z to wrap around to the front of the alphabet, so that z becomes c.)
It maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding.
For the Polybius square (example: polybius("message") => "23513434112251"), the tests that you write should test that the following is true:

When encoding, it translates the letters i and j to 42.
When decoding, it translates 42 to (i/j).
It ignores capital letters. (For example, the results of A Message and a message should be the same.)
It maintains spaces in the message, before and after encoding or decoding.
For the substitution cipher (example: substitution("message", "plmoknijbuhvygctfxrdzeswaq") => "ykrrpik"), the tests that you write should test that the following is true:

It returns false if the given alphabet isn't exactly 26 characters long.
It correctly translates the given phrase, based on the alphabet given to the function.
It returns false if there are any duplicate characters in the given alphabet.
It maintains spaces in the message, before and after encoding or decoding.
It ignores capital letters. (For example, the results of A Message and a message should be the same.)
