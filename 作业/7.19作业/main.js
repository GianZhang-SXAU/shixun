//1.声明多个变量分别保存一个人的姓名，性别，电话，家庭地址。并打印出来。
var name = "张三";
var gender = "男";
var tel = "13033458033";
var address = "aaaa";
console.log("姓名：" + name + "，性别：" + gender + "，电话：" + tel + "，家庭地址：" + address);

// 2.声明变量分别保存语文、数学、总成绩，其中总成绩为空；把语文和数学相加的和赋给总成绩。最后打印3个变量。
var chinese = 90;
var math = 80;
var total = 0;
total = chinese + math;
console.log("语文：" + chinese + "，数学：" + math + "，总成绩：" + total);

// 3：声明变量保存圆周率，声明变量保存圆的半径，计算周长和面积，声明变量分别保存圆的面积和周长。
var pi = 3.14159;
var radius = 5;
var perimeter = 2 * pi * radius;
var area = pi * radius * radius;
console.log("周长：" + perimeter + "，面积：" + area);

// 4：交换两个变量的值 a=1 b=2，得到 a=2 b=1。
var a = 1;
var b = 2;
var temp = a;
a = b;
b = temp;
console.log("交换变量后的值：a=" + a + "，b=" + b);

// 5： 假设从数据库获取到了商品的名称和价格，拼接打印出’商品名称：xxx 价格：xxx’。
var name = "商品名称";
var price = "价格";
console.log(name + "：" + price);

// 6：声明变量保存输入的用户名和密码，如果用户名为’root’并且密码为’123abc’，则打印true，否则打印false。 (并且符号： &&)。
var username = "root";
var password = "123abc";
if (username == "root" && password == "123abc") {
    console.log("true");
} else {
    console.log("false");
}




