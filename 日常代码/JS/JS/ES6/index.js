/*
 * @Author: GianZhang-SXAU zhangjianan545@gmail.com
 * @Date: 2024-07-21 22:58:03
 * @LastEditors: GianZhang-SXAU zhangjianan545@gmail.com
 * @LastEditTime: 2024-07-21 23:22:09
 * @FilePath: \实训\日常代码\JS\JS\ES6\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class people{
    constructor(name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    getInfo(){
        console.log(`姓名：${this.name}，年龄：${this.age}，性别：${this.gender}`);
    }
    static getPeople(arr){
        arr.forEach(person=>{
            person.getInfo();
        });
    }
    static getOldest(arr){
        return arr.reduce((oldest,person)=>{
            return person.age>oldest.age?person:oldest;
        },arr[0]);
    }
    static getYoungest(arr){
        return arr.reduce((youngest,person)=>{
            return person.age<youngest.age?person:youngest;
        },arr[0]);
    }
}

const peopleArr = [
    new people("张三",25,"男"),
    new people("李四",30,"女"),
    new people("王五",28,"男"),
    new people("赵六",24,"女")
];

console.log(`所有人的信息：${peopleArr[0].getPeople}`);