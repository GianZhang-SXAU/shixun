/*
 * @Author: GianZhang-SXAU zhangjianan545@gmail.com
 * @Date: 2024-07-25 17:08:21
 * @LastEditors: GianZhang-SXAU zhangjianan545@gmail.com
 * @LastEditTime: 2024-07-25 17:23:06
 * @FilePath: \实训\作业\7.24作业\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 假设张三有10000元，银行的利率是4%，5年后张三一共能拿到多少钱（一年后的钱 = 前一年的本金 + 利息）。
// const calculateTotalAmount = (initialAmount, interestRate) => {
//     const years = 5;
//     const amountAfterOneYear = initialAmount * (1 + interestRate);
//     const amountAfterTwoYears = amountAfterOneYear * (1 + interestRate);
//     const amountAfterThreeYears = amountAfterTwoYears * (1 + interestRate);
//     const amountAfterFourYears = amountAfterThreeYears * (1 + interestRate);
//     const amountAfterFiveYears = amountAfterFourYears * (1 + interestRate);
//     return amountAfterFiveYears;
// };
// 使用递归方法
const calculateTotalAmountHelper = (initialAmount, interestRate, years) => {
    if (years === 0) {
        return initialAmount;
    }
    return calculateTotalAmountHelper(initialAmount * (1 + interestRate), interestRate, years - 1);
};

// console.log(calculateTotalAmount(10000, 0.04));
console.log(calculateTotalAmountHelper(10000, 0.04, 5));
console.log('-------------');

// 计算1~100之间所有整数的和，一旦当总和超过4000，结束循环，并打印当前的和。
const calculateSum = (start, end) => {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
        if (sum > 4000) {
            console.log('当前和:', sum);
            break;
        }
    }
};
calculateSum(1, 100);
console.log('-------------');
// 打印2000~2100之间的前10个闰年。
const isLeapYear = year => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};
for (let i = 2000; i <= 2100; i++) {
    if (isLeapYear(i)) {
        console.log(i);
    }
}

console.log('-------------');
// 打印九九乘法表。
for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= i; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}
console.log('-------------');
// 使用*号输出，打印出直角三角形。
for (let i = 1; i <= 9; i++) {
    console.log('*'.repeat(i));
}
console.log('-------------');

// 鸡兔同笼一共50只，脚160，求鸡多少只，兔子多少只？
const calculateChickensAndRabbits = (total, feet) => {
    const chickens = Math.floor(feet / 2);
    const rabbits = Math.floor((total - chickens * 2) / 2);
    console.log(`鸡: ${chickens}, 兔子: ${rabbits}`);
    return [chickens, rabbits];
};
calculateChickensAndRabbits(50, 160);
console.log('-------------');


// 简述目前所知的对象的创建方式，并分别列举出对象中属性的增删改查的方式。


