/*
 * @Author: GianZhang-SXAU zhangjianan545@gmail.com
 * @Date: 2024-09-06 09:25:56
 * @LastEditors: GianZhang-SXAU zhangjianan545@gmail.com
 * @LastEditTime: 2024-09-08 16:23:59
 * @FilePath: \无人车零售\js\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//js文件
// 获取left1 bar图
function getLeftBar_1(container, data){
    const bar = new Bar(container, {
      data,
      xField: 'value',
      yField: 'city',
      seriesField: 'city',
      legend: {
        position: 'top-left',
      },
    });
    return bar;
  }