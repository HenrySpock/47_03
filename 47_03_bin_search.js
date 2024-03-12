// countZeroes
// Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.

// Constraints:
// Time Complexity: O(log N)

// Examples:

// countZeroes([1,1,1,1,0,0]) // 2
// countZeroes([1,0,0,0,0]) // 4
// countZeroes([0,0,0]) // 3
// countZeroes([1,1,1,1]) // 0

function countZeroes(arr) {
  left = 0;
  right = arr.length - 1;

  // Checking for array of all 1s or all 0s:
  if (arr[0] === 0) return arr.length;
  if (arr[right] === 1) return 0; 

  while (left <= right) {
    let mid = Math.floor((left+right)/2);

    // Check if mid is first occurence of zero:
    if (arr[mid] === 0 && arr[mid-1] === 1) { 
      return arr.length - mid
    };

    if (arr[mid] === 1) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return 0;
}

// sortedFrequency
// Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

// Constraints:
// Time Complexity: O(log N)

// Examples:

// sortedFrequency([1,1,2,2,2,2,3],2) // 4
// sortedFrequency([1,1,2,2,2,2,3],3) // 1
// sortedFrequency([1,1,2,2,2,2,3],1) // 2
// sortedFrequency([1,1,2,2,2,2,3],4) // -1


function sortedFrequency(arr, num) {
  function findFirst() {
    let low = 0;
    let high = arr.length -1;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] < num) {
        low = mid + 1; 
      } else {
        high = mid - 1;
      }
    }
    return low;
  }
  function findLast() {
    let low = 0;
    let high = arr.length -1;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (arr[mid] <= num) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return high;
  }
  
  const firstIndex = findFirst();
  const lastIndex = findLast();
  
  if (firstIndex > lastIndex) {
    return -1; // num is not in array
  }

  return lastIndex - firstIndex +1;
}


// findRotatedIndex
// Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. 
// The function should return the index of num in the array. If the value is not found, return -1.

// Constraints:
// Time Complexity: O(log N)

// Examples:

// findRotatedIndex([3,4,1,2],4) // 1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
// findRotatedIndex([37,44,66,102,10,22],14) // -1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1

function findRotatedIndex(arr, num) {
  left = 0;
  right = arr.length - 1;

  // Checking for array of all 1s or all 0s:
  while (left <= right) {
    let mid = Math.floor((left+right)/2);

    if (arr[mid] === num){
      return mid;
    }

    // Check if the left side is sorted
    if (arr[left] <= arr[mid]) { 
      if (num >= arr[left] && num < arr[mid]) {
        right = mid -1;
      } else {
      left = mid + 1;
      }
    } else { // Right side is sorted
      if (num > arr[mid] && num <= arr[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}

// findRotationCount
// Write a function called findRotationCount which accepts an array of distinct numbers sorted in increasing order. 
// The array has been rotated counter-clockwise n number of times. Given such an array, find the value of n.

// Constraints:
// Time Complexity: O(log N)

// Examples:

// findRotationCount([15, 18, 2, 3, 6, 12]) // 2
// findRotationCount([7, 9, 11, 12, 5]) // 4
// findRotationCount([7, 9, 11, 12, 15]) // 0

function findRotationCount(arr) {
  let left = 0;
  let right = arr.length - 1;

  // Check if the array is not rotated
  if (arr[left] <= arr[right]) { 
    return 0;  
  }

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    // Check if  mid element is the rotation point
    if (arr[mid] > arr[mid + 1]) {
      return mid + 1;
    }
    if (mid > 0 && arr[mid - 1] > arr[mid]) {
      return mid;
    }

    // Decide whether to search left or right half of array.
    if (arr[left] <= arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return 0; // The array is sorted.
}

// findFloor
// Write a function called findFloor which accepts a sorted array and a value x, and returns the floor of x in the array. 
// The floor of x in an array is the largest element in the array which is smaller than or equal to x. 
// If the floor does not exist, return -1.

// Examples:

// findFloor([1,2,8,10,10,12,19], 9) // 8
// findFloor([1,2,8,10,10,12,19], 20) // 19
// findFloor([1,2,8,10,10,12,19], 0) // -1
// Constraints
// Time Complexity: O(log N)

function findFloor(arr, num) {
  let left = 0;
  let right = arr.length -1;

  while (left <= right) {
    let mid = Math.floor((left+right)/2);

    if (arr[mid] > num) {
      right = mid -1;
    } else {
      left = mid + 1;
    }
  }

  if (right < 0) {
    return -1;
  }

  return arr[right];
}