// Question : Write a code to check if there is any duplicates in the linkedlist, if so remove them.

function removeDuplicates(head) {
  const hashMap = {};
  
  let previous = null;

//   while (current !== null) {
//     if (hashMap[current.value]) {
//       hashMap[current.value] = true;
//       current = current.next;
//     } else {
//       previous = current;
//       current = 
//     }
//   }
//   console.log(head);
//   console.log(hashMap);
//   return head;
}

// Input  : 10 -> 20 -> 10 -> 40 -> 20 -> null
// Output : 10 -> 20 -> 40 -> null

const ll = {
  value: 10,
  next: {
    value: 20,
    next: {
      value: 10,
      next: {
        value: 40,
        next: {
          value: 20,
          next: null
        }
      }
    }
  }
};

export default removeDuplicates(ll);
