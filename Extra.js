const allUsers = [
  { username: "Jane", password: "123456" },
  { username: "admin", password: "abc123" },
];

const createUser = function (username, password) {
  for (let i = 0; i < allUsers.length; i++) {
    if (allUsers[i]["username"] === username)
      return "That username is not available";
  }

  let element = {};
  element.username = username;
  element.password = password;
  allUsers.push(element);

  return "Registration successful";
};

createUser("James", "123456"); // => "Registration successful"
allUsers; // => [{username: "Jane", password: "123456"}, {username: "admin", password: "abc123"}, {username: "James", password: "123456"}]

createUser("Jane", "5321"); // => "That username is not available"
allUsers; // => [{username: "Jane", password: "123456"}, {username: "admin", password: "abc123"}, {username: "James", password: "123456"}]

createUser("Mark", "22222"); // => "Registration successful"
allUsers; // => [{username: "Jane", password: "123456"}, {username: "admin", password: "abc123"}, {username: "James", password: "123456"}, {username: "Mark", password: "22222"}]

createUser("admin", "abc123"); // => "That username is not available"
allUsers; // => [{username: "Jane", password: "123456"}, {username: "admin", password: "abc123"}, {username: "James", password: "123456"}, {username: "Mark", password: "22222"}]

const sliceArray = function (array, control) {
  let a = [];
  let size = Math.ceil(array.length / control);
  for (let i = 0; i < size; i++) {
    let k = array.splice(0, control);
    a.push(k); // unshift
  }
  return a;
};

sliceArray([10, 20, 30, 40, 50, 60], 2); // => [[10,20],[30,40],[50,60]]
sliceArray([10, 20, 30, 40, 50, 60], 3); // => [[10,20,30],[40,50,60]]
sliceArray([10, 20, 30, 40, 50], 3); // => [[10,20,30],[40,50]]
