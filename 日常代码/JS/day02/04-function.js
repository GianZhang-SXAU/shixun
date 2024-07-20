// 使用 var 关键字创建函数
// var fun1 = function () {
//   console.log('fun1被调用了');
// }
// 调用函数   函数名()
// fun1()
// 直接创建一个函数
// function 函数名称(形式参数) {
//   // 处理一些逻辑交互
//   return 结果;
// }
// 函数名称(实际参数)

// 返回 两个数字的和
function sum(num1, num2) {
  return num1 + num2
}
// 创建变量用来接收函数返回的结果
var res = sum(10, 20)
console.log(res);