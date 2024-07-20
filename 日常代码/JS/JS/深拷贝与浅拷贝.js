/*
 * @Author: 张建安 337587856@qq.com
 * @Date: 2024-07-19 20:12:22
 * @LastEditors: 张建安 337587856@qq.com
 * @LastEditTime: 2024-07-19 20:19:55
 * @FilePath: \JS\深拷贝与浅拷贝.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//深拷贝
const deepCopy = (obj) => {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    const result = Array.isArray(obj) ? [] : {};

    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            result[key] = deepCopy(obj[key]);
        }
    }

    return result;
};

const original = {
    name: '张三',
    age: 25,
    address: {
        city: '山西省',
        district: '太谷区',
    },
};
const copied = deepCopy(original);
console.log(copied);
//浅拷贝
const shallowCopy = (obj) => {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    return Array.isArray(obj) ? [...obj] : { ...obj };
};

const copied2 = shallowCopy(original);
console.log(copied2);

/**
 * 代码解释：
 * 1. 使用typeof和Object.prototype.hasOwnProperty.call(obj, key)来检查键是否为对象自身的属性。
 * 2. 使用Array.isArray(obj)检查对象是否是数组，以便使用正确的拷贝方法。
 * 3. 使用...运算符而不是concat()方法来拷贝数组。
 * 4. 使用...运算符而不是Object.assign()来拷贝对象。
 * 5. 使用const而不是let，因为我们没有重新分配变量。
 * 6. 使用模板字符串而不是字符串连接。
 * 7. 使用const而不是let，因为我们没有重新分配变量。
 * 
 */