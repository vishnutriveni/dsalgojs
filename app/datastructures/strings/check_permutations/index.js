// Check if two given strings are permutation of each other

const checkPermutation = (string1, string2) => {
  // Two strings can the the permutation of each other when both have the same strings and same length.

  // If the string lengths are not same, it cannot be a permutation.
  if (string1.length !== string2.length) {
    return false;
  }
  // Initialise a hashMap for storing the count of characters from string1.
  const charCount = {};
  let zeroCount = 0;

  for (let i = 0; i < string1.length; i++) {
    if (!!charCount[string1[i]]) {
      // If the character is found in the hashMap, increment the count, else give initial value.
      charCount[string1[i]] += 1;
    } else {
      charCount[string1[i]] = 1;
    }
  }

  for (let i = 0; i < string2.length; i++) {
    if (!!charCount[string1[i]]) {
      // If the character is found in the hashMap, increment the count, else give initial value.
      charCount[string1[i]] -= 1;
      if (charCount[string1[i]] < 0) {
        // The character is more on string2. Hence not a permutation.
        return false;
      }

      if (charCount[string1[i]] === 0) {
        // When the count becomes zero, increment the zeroCount.
        zeroCount += 1;
      }
    } else {
      // character not foud. return false
      return false;
    }
  }

  // If all the characters in the charMap is 0, return true. 
  if (zeroCount === Object.keys(charCount).length) {
    return true;
  }

  return false;
};

checkPermutation("english", "shilneg");
// english --- shilneg -> true
