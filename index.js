// variables

let name = 'Rahul'; // string
let age = 25; // number

// array stores a list of values
// arrays start counting from 0
cart = ['apple', 'mango', 'papaya'];
// changing values in array

cart[2] = 'orange';
console.log(cart);

// adding items at the end in array
cart.push('grapes');
console.log(cart);

// removing last item
cart.pop();
console.log(cart);

// adding item at the beginning
cart.unshift('kiwi');
console.log(cart);

// removing first item
cart.shift();
console.log(cart);

// map() (transform array) creates a new array by modifying each item
let prices = [100, 200, 300];
let withTax = prices.map((price) => price * 1.18);
console.log(withTax);

// filter() creates a new array based on condition
let ages = [15, 20, 25, 12];
let adults = ages.filter((age) => age >= 18); // 20 and 25
console.log(adults);

// find() returns first item that matches condition
let users = [
  { id: 1, name: 'Saurabh' },
  { id: 2, name: 'Bhairav' },
  { id: 3, name: 'Vishakha' },
];
let user = users.find((user) => user.id === 2);
console.log(user);

// findIndex() returns index of an element
let numbers = [10, 20, 30];
let index = numbers.findIndex((num) => num === 20); // 1
console.log(index);

// includes() checks if value exists
let roles = ['admin', 'editor', 'user'];
console.log(roles.includes('admin')); // true

// some() checks if any item matches
let nums = [1, 2, 3, 4];
let hasEven = nums.some((n) => n % 2 === 0); // 2 and 4
console.log(hasEven);

// every() checks if all items match
let items = [2, 4, 6];
let allEven = items.every((n) => n % 2 === 0); // 2, 4 and 6
console.log(allEven);

// reduce() combines array values into single value
let sums = [10, 20, 30];
let sum = sums.reduce((total, num) => total + num, 0);
console.log(sum); // 60

// slice() copy part of array
let vals = [1, 2, 3, 4, 5];
let part = vals.slice(2, 5);
console.log(part, vals);

// splice() modifies array
let values = [1, 2, 3, 4];
values.splice(1, 2);
console.log(values);

// sort() sorts an array
let int = [5, 1, 4, 2];
int.sort((a, b) => a - b);
console.log(int);

// reverse() reverses an array
let arr = [1, 2, 3];
arr.reverse();
console.log(arr);

// concat() merges the arrays
let a = [1, 2];
let b = [3, 4];
let result = a.concat(b);
console.log(result);

// flat() flattens nested arrays
let numb = [1, 2, [3, 4], [5, 6]];
let res = numb.flat();
console.log(res);

// flatMap() combines map + flat
let array = [1, 2, 3];
let got = array.flatMap((num) => [num, num * 2]);
console.log(got);

// Array.from() converts things into arrays
let str = 'hello';
let ar = Array.from(str);
console.log(ar);

// Array.of() creates array from values
let arrays = Array.of(1, 2, 3);
console.log(arrays);

// entries() returns index and value together
let products = ['Laptop', 'Phone', 'Tablet'];
for (let [index, product] of products.entries()) {
  console.log(`Product ${index + 1}: ${product}`);
}

// keys() returns indexes
let orders = ['ORD101', 'ORD102', 'ORD103'];
for (let key of orders.keys()) {
  console.log(key);
}

// values() returns values
let prod = ['Laptop', 'Phone', 'Tablet'];
for (let product of prod.values()) {
  console.log(prod);
}

// at() access items (Better Than Index)
let orderTotals = [2500, 3000, 4500];
console.log('Latest order total:', orderTotals.at(-1));

// toSorted() does not change the original array like sort()
let price = [50000, 20000, 30000];
let sortedPrices = price.toSorted();
console.log('Sorted prices:', sortedPrices);
console.log('Original prices:', price);

// groupBy() used to group data by a property
const customers = [
  { name: 'Rahul', role: 'admin' },
  { name: 'Amit', role: 'user' },
  { name: 'Sara', role: 'admin' },
];
const grouped = Object.groupBy(customers, (customer) => customer.role);
console.log(grouped);
