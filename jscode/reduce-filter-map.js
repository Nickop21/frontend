let sumarr = [3, 2, 7, 5, 3, 8];

const result = sumarr.map((val) => val);

const reduce = sumarr.reduce((sum, val) => sum + val, 0);

const filtered = result.filter((val) => val > 5);
console.log(result);
console.log("reduce", reduce);
console.log("filtered", filtered);
console.log("original", sumarr);

//reduce is faster than map because it performs a single operation on all elements of the array in a single pass,
//while map creates a new array with the results of calling a provided function on every element in the array.
//filtered is faster than map because it only iterates over the elements that pass the condition in the provided function.

const users = [
  { firstName: "nitin", lastName: "Yadav", age: "23" }, { firstName: "Vidushi", lastName: "jangidh", age: "22" },
  { firstName: "dev", lastName: "palliwal", age: "23" }, { firstName: "harsh", lastName: "vajpayee", age: "21" },
];
const userreduce = users.reduce((acc, user) => {
  if (acc[user.age]) {
    acc[user.age] = ++acc[user.age];
  } else {
    acc[user.age] = 1;
  }
  return acc;
}, {});

// filter way
const userfilter = users
  .filter((user) => user.age >= 23).map((user) => user.firstName);
console.log("userFilter", userfilter);

// above using reduce
const userfilterreduce = users.reduce(function (acc, curr) {
  if (curr.age < 23) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);
console.log("userreduce", userreduce);
console.log("userfilterreduce", userfilterreduce);
