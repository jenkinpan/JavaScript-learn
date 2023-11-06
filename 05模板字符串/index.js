// * Concatenation with template literals
// * 使用模板字符串进行串联
console.log("\n*******Concatenation with template literals******\n");

let str1 = "Javascript";
let str2 = "fun";

console.log(`I am writing code in ${str1}.`);
console.log(`Formatting in ${str1} is ${str2}.`);

// ! we use ${} as a placeholder in template literals.
// ! 在模板字符串中我们使用${}作为一个占位符。

// * Expressions in template literals
// * 模板字符串里的表达式
console.log("\n*******Expression in template literals********\n");

let bool1 = true;
console.log(`1 + 1 is ${1 + 1}.`);
console.log(`The opposite of true is ${!bool1}.

`);

// ! "!"取反操作符
// ! 模板字符串中的换行会不变的在控制台之中进行输出。