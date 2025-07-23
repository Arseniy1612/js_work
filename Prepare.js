//3.1

let operator = 1;
console.log(operator); 
let a = true;
console.log(typeof a);

let b = "something";
console.log(typeof b);

let c = 4;
console.log(typeof c);

let d = undefined;
console.log(typeof d);

let e = null;
console.log(typeof e);

let f = NaN;
console.log(typeof f);

//3.2

let str1 = prompt("Введіть перший рядок:");
let str2 = prompt("Введіть другий рядок:");
let str3 = prompt("Введіть третій рядок:");

console.log(`${str3} ${str1} ${str2}`);


//3.3

let myValue = 10369;
e = (myValue / 10000) | 0 % 10;
d = ((myValue / 1000) | 0 % 10) % 10;
c = ((myValue / 100) | 0 % 10) % 100;
b = ((myValue / 10) | 0 % 10) % 1000 % 10;
a = myValue % 10;
console.log(e, d, c, b, a);


