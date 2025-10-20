const original = { a: 1, b: { c: 2 } };
const cloned = JSON.parse(JSON.stringify(original));

cloned.b.c = 99;
console.log(original.b.c); // ramane tot 2