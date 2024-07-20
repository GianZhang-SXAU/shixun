/*
 * @Author: 张建安 337587856@qq.com
 * @Date: 2024-07-19 19:14:16
 * @LastEditors: 张建安 337587856@qq.com
 * @LastEditTime: 2024-07-19 20:10:14
 * @FilePath: \JS\object.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//对象的创建方式1
// const Pepele = {
//     name: "张三",
//     age: 20,
//     sayHello: function(){
//         console.log(` 你好，我叫 ${this.name}, 我今年 ${this.age} 岁了。`);
//     }
    
// };

// const p = Object.create(Pepele);
// p.sayHello();

// 对象的创建方式2
class person{
    constructor(name, age, height){
        this.name = name;
        this.age = age;
        this.height = height;
    }
    sayHello(){
        console.log(` 你好，我叫 ${this.name}, 我今年 ${this.age} 岁了，我的身高是 ${this.height}m。`);
    }
    static getInstance(name, age , height){
        if(!person.instance){
            person.instance = new person(name, age , height);
        }
        return person.instance;
    }
}
const p1 = person.getInstance("张建安", 20 , 1.86);
p1.sayHello();
// 不带参数
const printDate = () => {
    console.log(new Date());
};

printDate();

//带参数
const printNamedDate = (name) => {
    console.log(`我是${name}，当前时间是：${new Date()}`);
};

printNamedDate("张建安");

function isEven(num){
    if(typeof num === "number"){
        return num % 2 === 0;
    } else {
        throw new Error("输入参数不是数字");
    }
}

console.log(isEven(4));


