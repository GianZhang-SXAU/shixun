/*
 * @Author: 陈佳敏 18834202671@qq.com
 * @Date: 2024-07-23 15:20:56
 * @LastEditors: GianZhang-SXAU zhangjianan545@gmail.com
 * @LastEditTime: 2024-08-18 20:09:47
 * @FilePath: \实训\作业\7.23作业\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 声明变量保存一个人的年龄，如果满18岁打印’成年人’，使用三目运算符或短路逻辑。
const age = 17;
console.log(age >= 18 ? '成年人' : '未成年人');

// 声明变量保存年份，如果是闰年打印’闰年’，否则打印’平年’（闰年的判断：能被4整除，并且不能被100整除，或者能被400整除）。
const year = 2024;
console.log(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ? '闰年' : '平年');

// 声明变量保存用户输入的用户名和密码，如果用户名为root并且密码为123456，打印‘登录成功’，否则‘登录失败’。
const userName = 'root';
const password = '123456';
console.log(userName === 'root' && password === '123456' ? '登录成功' : '登录失败');

// 声明变量保存性别的值(1/0)，如果是1打印男，否则打印女（分别使用if-else 和 三目运算符）。
const gender = 1;
console.log(gender === 1 ? '男' : '女');

if (gender === 1) {
    console.log('男');
} else {
    console.log('女');
    }

    // 声明变量保存订单的状态码，根据订单的状态码打印对应的汉字状态。 (1-等待付款 2-等待发货 3-运输中 4-已签收 5-已取消 其它-无法追踪)。
    const orderStatus = 2;
    switch (orderStatus) {
        case 1:
            console.log('等待付款');
            break;
        case 2:
            console.log('等待发货');
            break;
        case 3:
            console.log('运输中');
            break;
        case 4:
            console.log('已签收');
            break;
            case 5:
            console.log('已取消');
            break;
            default:
            console.log('无法追踪');
            break;
            }


            // 声明变量保存价格，假设打5折，计算结果是多少并打印出来。
            const price = 100;
            console.log(price - price * 0.5);

            // 声明变量保存一个人的成绩，根据分数做出评判，成绩范围为0~100，超出此范围输出非法的成绩（90~ 优秀，80~90以下 良好，70~80以下 中等，60~70以下 及格，60以下 不及格）
            const score = 89;
            switch (true) {
                case score > 100:
                    console.log('非法的成绩');
                    break;
                case score >= 90:
                    console.log('优秀');
                    break;
                case score >= 80:
                    console.log('良好');
                    break;
                case score >= 70:
                    console.log('中等');
                    break;
                case score >= 60:
                    console.log('及格');
                    break;
                    default:
                    console.log('不及格');
                    break;
                    }

                    // 使用冒牌排序算法，将数组[74,100,27,4,58,93,61]内的元素从小到大排列。
                    const arr = [74, 100, 27, 4, 58, 93, 61];
                    for (let i = 0; i < arr.length - 1; i++) {
                        for (let j = i + 1; j < arr.length; j++) {
                            if (arr[i] > arr[j]) {
                                [arr[i], arr[j]] = [arr[j], arr[i]];
                            }
                        }
                    }
                    console.log(arr);
                    