const findMinimum = arr => {
  if (arr.length === 0) {
    return undefined;
  } else {
    return Math.min(...arr);
  }
};
//time: O(n)
//space: O(n)


const runningSum = arr => {
  let adder = 0;
  let finalArr = [];
  arr.forEach(element => {
    let nextEl = element + adder;
    finalArr.push(nextEl)
    adder += element
  });
  return finalArr;
  };
  //time: O(n)
  //space: O(n2)


const evenNumOfChars = arr => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let currentArr = arr[i];
    if (currentArr.length % 2 == 0) {
      count++;
    }
  }
  return count;
};
//time: O(1)
//space: O(n)

const smallerThanCurr = arr => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 1; j < arr.length; j++) {
    let current = arr[i];
    if (current > arr[j]) {
      count++;
    }
  }
  newArr.push(count);
}
  return newArr;
};
// time: O(n)
// space: O(n2)

const twoSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return true;
      }
    }
  }
  return false;
};
//time: O(n2);
//space: O(n2)

const secondLargest = arr => {
  if (arr.length === 0) {
    return undefined;
  }
  let maxNum = arr.indexOf(Math.max(...arr));
  arr.splice(maxNum, 1);
  return Math.max(...arr);
};
//time: O(n)
//space: O(n)



const shuffle = (arr) => {
  let newArr = [];
  let indices = [];
  let maxNum = arr.length;
  while (newArr.length < arr.length) {
  let randomIndex = Math.floor(Math.random() * (maxNum - 0) + 0);
  if (!(indices.includes(randomIndex))) {
    newArr.push(arr[randomIndex])
    indices.push(randomIndex);
     }
  }
  return newArr;
};
// time: O(n)
// space: O(n2)

module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
