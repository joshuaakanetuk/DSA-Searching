import binarySearch from './functions'
import BinarySearchTree from './classes'
// 1.
console.log(binarySearch([3,5,6,8,11,12,14,15,17,18], 8))
// 0 10
// 0 4
// 3 4
// 3
console.log(binarySearch([3,5,6,8,11,12,14,15,17,18], 16))
// 0 10
// 6 10
// 6 7
// 7 7
// -1 

// 3. 
//  No clue

// They are very similar to the above in-order traversal except for the order of the visits (left child, parent, right child) is different for pre-order (parent, left child, right child) and post-order (left child, right child, parent).

// 4.  35 25 15 14 19 27 89 79 91 90
//  a. 90 91 79 89 27 19 14 15 25 35
//  b. 8 10 11 9 6 7 5

// 5.