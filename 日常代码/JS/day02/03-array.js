// 字面量形式创建一个数组
var arr1 = [1,2,3,4,5,6,7]
// 获取数组中对应位置上的值 数组索引下标
// console.log(arr1[0]);
var arr2 = ['zhangsan','lisi','wangwu']
// console.log(arr2[1]);
var objArr = [
  {
    name:'zhangsan',
    age: 30
  },
  {
    name: 'lisi',
    age: 34
  }
]
// 通过 for 循环遍历获取数组中的数据
for(var index in objArr){
  // console.log(index);
  console.log(objArr[index].name);
}