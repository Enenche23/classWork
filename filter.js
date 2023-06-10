// const numbers = [23, 45, 16, 34, 67, 60, 59, 20, 63, 89];

// const x = numbers.filter(number => number > 60)
// const x = numbers.filter((number, x, y) => console.log(x));
// console.log(x);

const users = [
  { name: "SAmuel", age: 13, isAdmin: false },
  { name: "DAvid", age: 14, isAdmin: true },
  { name: "Jacob", age: 15, isAdmin: false },
  { name: "Jerry", age: 16, isAdmin: false },
  { name: "Musa", age: 17, isAdmin: false },
  { name: "Kenny", age: 18, isAdmin: true },
];

// const gin = () => {}

// function gin() {}

// function funke(child) {
//   child = child + 1;
//   console.log(child)
//   return child;
// }

// const number = (a, b) => a + b;

// const funke = child => child + 1;

// const sola = (child, names) => {
//   if(child === "bimpe") {
//     return bimpe
//   }
//   else {}
// }

const adminUsers = users.filter(user => user.isAdmin)

console.log(adminUsers);

