//Write your solutions in this file, don't forget to test your functions.

const countFromOne = (num) => {
  for (let i = 1; i <= num; i++) {
    console.log(`${i}`);
  }
};
const countEveryOdd = (num) => {
  for (let i = 1; i <= num; i += 2) {
    console.log(`${i}`);
  }
};
const isNegative = (num) => {
  if (num < 0) {
    return true;
  } else {
    return false;
  }
};
const betweenFiveAndTwenty = (num) => {
  return num >= 5 && num <= 20;
};
const sumOfThreeAndFive = () => {
  let count = 0;
  for (let i = 1; i < 1000; i++) {
    if (i % 5 === 0 || i % 3 === 0) {
      count += i;
    }
  }
  return count;
};

const isAllLowerCase = (str) => {
  return str === str.toLowerCase();
};

const countMultiplesOfFive = (arrOfInt) => {
  let count = 0;

  for (let i = 0; i < arrOfInt.length; i++) {
    if (arrOfInt[i] % 5 == 0) {
      count++;
    }
  }
  return count;
};

//Test Functions
console.log("-----Problem 1-----");
countFromOne(10); // logs 1 2 3 4 5 6 7 8 9 10
console.log("-----Problem 2-----");
countEveryOdd(10); // logs 1 3 5 7 9
console.log("-----Problem 3-----");
console.log(isNegative(3)); //returns false
console.log(isNegative(-2)); //returns true
console.log(isNegative(Math.PI)); //returns false
console.log("-----Problem 4-----");
console.log(betweenFiveAndTwenty(12)); // returns true
console.log(betweenFiveAndTwenty(5)); // returns true
console.log(betweenFiveAndTwenty(100)); // returns false
console.log("-----Problem 5-----");
console.log(sumOfThreeAndFive()); //returns 233168
console.log("-----Problem 6-----");
console.log(isAllLowerCase("hello")); //returns true
console.log(isAllLowerCase("seven eleven")); //returns true
console.log(isAllLowerCase("Seven eleven has the best slushies")); //returns false
console.log("-----Problem 7-----");
console.log(countMultiplesOfFive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // returns 2
console.log(countMultiplesOfFive([15, 23, 35, 45, 67])); // returns 3
console.log(countMultiplesOfFive([2, 6, 14])); // returns 0
