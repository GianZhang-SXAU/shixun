// 创建一个数字类型 number
// var num1 = 10
// var num2 = 10.1212
// var num3 = 010
// console.log(num1, num2,typeof num3);

// NaN 不是一个 number 类型
var a = 100 + 20 + '200'
var b = 100 / 0
console.log(typeof a,typeof b);
console.log(isNaN(b));
console.log(Number.MAX_VALUE);