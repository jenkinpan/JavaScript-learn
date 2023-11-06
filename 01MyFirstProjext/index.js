console.log('Hello, World! 🌏');
// ! 在javascript中字符串可以使用单引号或者双引号都可以

const place = "World!";
const greeting = "Hello";
const earth = "🌏"

console.log('%s, %s', greeting, place);

// ！template literal 模板字符串
// ！模板字符串使用``,反引号
console.log(`${greeting}, ${place}${earth}`)