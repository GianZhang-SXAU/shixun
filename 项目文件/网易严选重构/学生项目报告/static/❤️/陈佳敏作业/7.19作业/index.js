//1.声明多个变量分别保存一个人的姓名，性别，电话，家庭地址。并打印出来。
const name = "张建安";
const gender = "男";
const phone = "13033458033";
const address = "山西省大同市";
console.log(`姓名：${name}，性别：${gender}，电话：${phone}，地址：${address}`);

// 2.声明变量分别保存语文、数学、总成绩，其中总成绩为空；把语文和数学相加的和赋给总成绩。最后打印3个变量。
const chineseScore = 100;
const mathScore = 100;
let totalScore;
totalScore = chineseScore + mathScore;
console.log(`语文成绩：${chineseScore}，数学成绩：${mathScore}，总成绩：${totalScore}`);

// 3：声明变量保存圆周率，声明变量保存圆的半径，计算周长和面积，声明变量分别保存圆的面积和周长。
const pi = 3.14159;   // 圆周率
const radius = 5;     // 半径
const circumference = 2 * pi * radius;   // 周长
const area = pi * radius ** 2;           // 面积
console.log(`圆周长：${circumference}，圆面积：${area}`);  


// 4：交换两个变量的值 a=1 b=2，得到 a=2 b=1。
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(`a=${a} b=${b}`);


// 5： 假设从数据库获取到了商品的名称和价格，拼接打印出’商品名称：xxx 价格：xxx’。
const shopname = "iPhone";
const price = 6000;
console.log(`商品名称：${shopname} 价格：${price}`);

// 6：声明变量保存输入的用户名和密码，如果用户名为’root’并且密码为’123abc’，则打印true，否则打印false。 (并且符号： &&)。
const userName = "root";
const password = "123abc"; 
console.log(userName === "root" && password === "123abc"); // 输出true
 
// JavaScript的数据类型有哪几种，请列举出来。
/**
 * 6种
 * 基本数据类型：Undefined, Null, Boolean, Number, String
 * 对象类型：Object
 */

// 简述undefined与null的关系
/**
 * undefined表示变量未定义，null表示变量定义了，但值为空。
 * undefined和null在类型转换时，都转换为undefined。
 * 两者都是可以赋值给其他变量的，但undefined变量不能赋值给null变量。
 */

// 基本数据类型和引用数据类型在内存中如何存储。
/**
 * 基本数据类型存储在栈内存中，引用数据类型存储在堆内存中。
 */

// 简述深拷贝与浅拷贝。
/**
 * 浅拷贝：拷贝对象时，只复制对象的引用，而不是对象本身。
 * 深拷贝：拷贝对象时，复制对象本身及其属性。
 */
