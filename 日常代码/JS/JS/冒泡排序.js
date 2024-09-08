/*
 * @Author: GianZhang-SXAU zhangjianan545@gmail.com
 * @Date: 2024-07-23 09:35:57
 * @LastEditors: GianZhang-SXAU zhangjianan545@gmail.com
 * @LastEditTime: 2024-07-23 09:45:11
 * @FilePath: \实训\日常代码\JS\JS\冒泡排序.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//冒泡排序
const arr = [5,6,8,9,10];

for(let i = 0; i<= arr.length ;i++){
    for(let j = 0;j<= arr.length-1;j++){
        var tmp;
        if(arr[j] > arr[j+1]){
            tmp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = tmp;
        }else{
            continue;

        }
    }
}

console.log(arr);

//优化后的冒泡排序
arr = [5,6,8,9,10];
for(let i = 0; i<= arr.length ;i++){
    for(let j = 0;j<= arr.length-1-i;j++){
        var tmp;
        if(arr[j] > arr[j+1]){
            tmp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = tmp;
        }
    }
}
console.log(arr);


//从0-100累加
let sum = 0;
for(let i = 0;i<=100;i++){
    sum += i;
}
console.log(sum);

//从0-100累乘
let product = 1;
for(let i = 0;i<=100;i++){
    product *= i;
}
console.log(product);
