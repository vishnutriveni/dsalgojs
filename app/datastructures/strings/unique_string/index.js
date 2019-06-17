function uniqueString(string) {
  // Declare a hashMap where you can store the charactes and no of times each character is present.
  // example : {s : true}
  const hashMap = {};

  for (let i = 0; i < string.length; i++) {
    // The if statement will execute only when the key is present. ie if the character is already 
    // present in the hashMap. In that case, we can exit the funtion returning 'false' as it is 
    // not a unique function.

    if (!!hashMap[string[i]]) {
      return false;
    }

    // If the item is not present in the hashMap, ie the character is seen the first time,
    //set the value to true.
    hashMap[string[i]] = true;
  }

  // This statement will be executed after iterating through all the items and no duplicates
  // are seen
  return true;
}

export default uniqueString;
