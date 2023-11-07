const people = ["Aaron", "Mel", "John"];
const one = 1;
const str = "Hello World";
const b = true;
const person = {
    firstName: "Aaron",
    lastName: "Powell",
};

function sayHello(person) {
    console.log("Hello " + person.firstName);
}

console.log("-- typeof --");
console.log(typeof people);
console.log(typeof one);
console.log(typeof str);
console.log(typeof b);
console.log(typeof person);
console.log(typeof sayHello);

console.log("\n-- instanceof --");
// ! instanceof 是对变量的结构体进行检测。
console.log(people instanceof Array);   // 检查people是否是一个数组。
console.log(one instanceof Number);
console.log(str instanceof String);
console.log(b instanceof Boolean);
console.log(person instanceof Object);
console.log(sayHello instanceof Function);
