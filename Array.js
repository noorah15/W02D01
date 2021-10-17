const addToArray = function (array, string) {
  array.push(string);
  return array;
};

addToArray(["Hello", "i", "am"], "John"); // => ["Hello", "i", "am", "John"]
addToArray(["Hello", "John", "i", "am"], "Jane"); // => ["Hello", "John", "i", "am", "Jane"]

const convertToString = function (array) {
  let a = array.join(" ");
  return a;
};

convertToString(["Hello", "i", "am", "John"]); // => "Hello i am John"
convertToString(["Hello", "John", "i", "am", "Jane"]); // => "Hello John i am Jane"

// the array values are unique, no duplicate values in the array
const updateValue = function (array, index, value) {
  if (array.length <= index)
    return "there is no element to updated in this index";
  array[index] = value;
  return array;
};

updateValue([10, 20, 30], 3, 50); // => "there is no element to updated in this index"
updateValue([1, 2, 3], 0, 10); // => [10, 2, 3]
updateValue([1, 2, 3], 1, 10); // => [1, 10, 3]

const onlyString = function (array) {
  const a = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "string") a.push(array[i]);
  }

  return a;
};
onlyString(["one", 12, "hi", true, 88, "12"]); // => ["one","hi","12"]
onlyString([10, 20, 30, 40, 50, 60, false]); // => []

const users = [
  ["Jane", "123456"],
  ["admin", "abc123"],
];

const login = function (username, password) {
  for (let i = 0; i < users.length; i++) {
    if (users[i][0] === username && users[i][1] === password)
      return "Login Successful";
  }
  return "Login Failed";
};

login("Jane", "123456"); // => "Login Successful"
login("Jane", "5321"); // => "Login Failed"
login("Mark", "123456"); // => "Login Failed"
login("admin", "abc123"); // => "Login Successful"
login("admin", "aaabc123"); // => "Login Failed"

const maximumNumber = function (numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++)
    if (numbers[i] > max) max = numbers[i];

  return max;
};

maximumNumber([0, 5, 2, 10, 8, 6]); // => 10
maximumNumber([0, 5, 6]); // => 6

const reversString = function (string) {
  const s = string.split("");
  s.reverse();
  let s2 = s.join("");
  return s2;
};

reversString("Hello"); // => "olleH"
reversString("John"); // => "nhoJ"
