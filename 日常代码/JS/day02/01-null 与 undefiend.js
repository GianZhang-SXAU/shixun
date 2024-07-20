// null 空对象指针
// var obj;
// console.log(obj, typeof null);
// 用于一些判断的条件
// if (obj == null) {
//   // 处理。。。
// }

// = 赋值
var num1 = 100
// == 比较 只会比较等号两边的值 不会比较值的数据类型 做了一个隐式转换
console.log(100 == '100');
console.log(null == undefined);
// === 完全相等 先比较数据类型 如果数据类型不一致 就直接返回 false
// 如果数据类型一致 再去比较值
console.log(100 === '100');
console.log(null === undefined);