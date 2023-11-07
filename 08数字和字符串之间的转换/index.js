let num1 = "150";
let flo1 = "1.50";

console.log(
  "*******Converting Strings to Integers********\n*******字符串转变为整数*******"
);
// * Converting Strings to Integers
console.log(parseInt("100"));
console.log(parseInt(num1));
console.log(parseInt("ABC"));
console.log(parseInt("0xF")); // ! 0xF is a Hexadecimal number

console.log("*******Converting Strings to Float********");
// * Converting Strings to Float
console.log(parseFloat("1.00"));
console.log(parseFloat(flo1));
console.log("ABC");

console.log("*******More Conversion Examples*******");
// * More Conversion Examples
// ! Numbers after special character are ignored
console.log(parseInt("1.5"));
console.log(parseInt("1 + 1"));

// ! using template literals使用模板字符串
console.log(parseInt(`${1 + 1}`)); // ! 使用模板字符串会先计算模板字符串里面的内容，然后再转换数据类型

console.log("********Converting numbers to string********");
// * Converting numbers to string
console.log(num1.toString());
console.log(flo1.toString());
console.log((100).toString());
