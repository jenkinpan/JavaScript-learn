// ! 申明变量的三种方式

/* -------var-------------------------
*    1. function scoped函数作用       |
*    2. can be changed in scope      |
*    3. available before declaration |
------------------------------------*/
var one = 1;

/* -------let----------------------------
*    1. block scoped块作用域              |
*    2. can be changed in scope          |
*    3. only available after declaration |
----------------------------------------*/
let two = 2;


/* -------const----------------------------
*    1. block scoped,like let            |
*    2. cannot be changed                |
*    3. only available after declaration |
----------------------------------------*/
const three = 3;


/* -----what to use when?-------
*    1. const by default        |
*       尽量多使用const          |
*    2. let for loop            |
*       循环内使用let            |
-------------------------------*/