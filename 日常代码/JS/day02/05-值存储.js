// 基本数据类型的值存储
// var a = 100
// var b = a
// a = 200
// console.log(b);

// 引用数据类型的值存储
var obj1 = { name:'zhangsan',age: 30 }
var obj2 = obj1
obj1.name = 'lisi'
console.log(obj1);
console.log(obj2);

