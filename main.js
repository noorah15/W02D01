const sum = function (a, b) {
  return a + b;
};

sum(5, 10); // => 15
sum(15, 10); // => 25

const average = function (a, b) {
  return (a + b) / 2;
};

average(20, 5); // => 12.5
average(10, 20); // => 15

/*  
   5! = 5 * 4 * 3 * 2 * 1
 */

const findFactorial = (num) => {
  if (num === 1) return 1;
  return num * findFactorial(num - 1);
};
/*
Examples:
findFactorial(1) // => 1
findFactorial(3) // => 6
findFactorial(4) // => 24
findFactorial(6) // => 720
findFactorial(11) // => 39916800
*/

const round = function (number) {
  // TODO: Your code here
  return Math.round(number);
};

round(5); // => 5
round(2.4); // => 2
round(0.8); // => 1
round(1.7); // => 12

const toThePowerOf = function (base, exponent) {
  return Math.pow(base, exponent);
};

toThePowerOf(2, 2); // => 4
toThePowerOf(2, 3); // => 8
toThePowerOf(9, 2); // => 81

const randomNumber = function () {
  return Math.random();
};

randomNumber(); // => 0.5052417714491793
randomNumber(); // => 0.32678224417562673
randomNumber(); // => 0.43265697184952523

const oneOrZero = function () {
  return Math.round(Math.random());
};

oneOrZero(); // => 1
oneOrZero(); // => 1
oneOrZero(); // => 0

const randomRange = function (number) {
  return Math.round(Math.random() * 10);
};

// 10 and 0 are included
randomRange(10); // => 10
randomRange(10); // => 7
randomRange(10); // => 1
randomRange(10); // => 0

const includeOf = function (string, character) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === character) return true;
  }

  return false;
};
includeOf("Hello", "h"); // => false
includeOf("hello", "h"); // => true
includeOf("hello", "a"); // => false
includeOf("World", "r"); // => true
includeOf("World", "a"); // => false

const includeOf1 = function (string, character) {
  let indx = string.indexOf(character);
  if (indx === -1) return false;
  return true;
};
includeOf1("Hello", "h"); // => false
includeOf1("hello", "h"); // => true
includeOf1("hello", "a"); // => false
includeOf1("World", "r"); // => true
includeOf1("World", "a"); // => false

const game = function (userChoice) {
  const c = ["rock", "paper", "scissor"];
  if (
    userChoice !== "rock" &&
    userChoice !== "paper" &&
    userChoice !== "scissor"
  )
    return "incorrect chosen";
  computerChoice = Math.round(Math.random() * 2);

  let str =
    "User choice is " +
    userChoice +
    " and computer choice is " +
    c[computerChoice] +
    ". ";
  if (c[computerChoice] === userChoice) str += " Tied";
  if (
    (c[computerChoice] === "rock" && userChoice === "scissor") ||
    (c[computerChoice] === "scissor" && userChoice === "paper") ||
    (c[computerChoice] === "paper" && userChoice === "rock")
  )
    str += "Computer is winner";
  else if (
    (c[computerChoice] === "scissor" && userChoice === "rock") ||
    (c[computerChoice] === "paper" && userChoice === "scissor") ||
    (c[computerChoice] === "rock" && userChoice === "paper")
  )
    str += "User is winner";

  return str;
};
