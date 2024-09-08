/*
 * @Author: GianZhang-SXAU zhangjianan545@gmail.com
 * @Date: 2024-07-22 14:42:20
 * @LastEditors: GianZhang-SXAU zhangjianan545@gmail.com
 * @LastEditTime: 2024-07-23 16:17:38
 * @FilePath: \实训\日常代码\JS\JS\operation.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class obj {
    constructor(name) {
        this.name = '张三';
    }
    sayName() {
        console.log(this.name);
    }
}

const obj1 = new obj();
obj1.sayName();
console.log(obj1.valueOf().toString());
console.log(typeof obj1.valueOf().toString());