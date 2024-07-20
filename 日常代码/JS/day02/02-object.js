// 使用字面量形式创建对象
var person = {
  // key: value
  userName: 'zhangsan',
  age: 30,
  height: 1.78,
  child:{
    childName:'zhangsi'
  }
}
// console.log(person, typeof person);
// 获取对象中某一个属性的值 点语法
console.log(person.userName);
console.log(person.child.childName);
// 向对象中新增一个属性 点语法
person.gender = '男'
// 修改对象中的属性
person.userName = 'lisi'
console.log(person);

