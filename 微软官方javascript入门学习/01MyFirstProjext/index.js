console.log('hello, world! 🌏');
// ! 在javascript中字符串可以使用单引号single quotes或者双引号double quotes都可以

const place = "World!";
const greeting = "Hello";
const earth = "🌏"

console.log('%s, %s', greeting, place);

// * template literal 模板字符串
// ! 模板字符串使用``,反引号backtick
console.log(`${greeting}, ${place}${earth}`)


/*--------------
| comment 注释  |
--------------*/
// 尽量让代码自己去解释自己，不要过多的注释
// 单行注释 comment for a single line 

/*  多行注释
    comment for multiple lines */