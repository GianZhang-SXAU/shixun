/*
 * @Author: 张建安 337587856@qq.com
 * @Date: 2024-07-15 21:37:53
 * @LastEditors: 张建安 337587856@qq.com
 * @LastEditTime: 2024-07-16 18:55:15
 * @FilePath: \netease-strict-selection\js\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
window.addEventListener("load", function () {

  var hot = document.querySelector("#hot_sale");
  var sett = document.querySelector("#setting");
  var start = document.querySelector("#starting");
  var backTop = document.querySelector("#BackTop");
  var recom = document.querySelector("#recommend");

  // 左侧边栏定位之后数据,侧边栏被卷去的减去new商品被卷去的加7，这是等于13
  let hotTop = hot.offsetTop - start.offsetTop + 7;

  // 页面滚动事件
  document.addEventListener("scroll", function () {
    // 打印window向上走了多少像素
    // console.log(window.pageYOffset);

    // 如果大于13就将左右侧边栏的定位改为粘性定位，否则则继续是相对定位
    if (window.pageXOffset >= start.offsetTop - 7) {
      hot.style.position = "fixed";
      sett.style.position = "fixed";
      hot.style.top = hotTop + "px";
      sett.style.top = hotTop + "px";
    } else {
      hot.style.position = "absolute";
      sett.style.position = "absolute";
      hot.style.top = "655px";
      sett.style.top = "655px";
    }

    // 显示人气推荐的时候，返回顶部按钮出现，没到就隐藏
    if (window.pageYOffset >= recom.offsetTop) {
      backTop.style.display = "block";
    } else {
      backTop.style.display = "none";
    }
  });

  // 点击返回顶部模块，让窗口滚动到页面最上方
  backTop.addEventListener("click", function () {
    //窗口滚动，对象是window
    animate(window, 0);
  });

  //动画函数
  function animate(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
      // 步长值写到定时器的里面
      // 把步长值改为整数,不要出现小数的问题
      var step = (target - window.pageYOffset) / 10;
      step = step > 0 ? Math.ceil(step) : Math.floor(step);
      if (window.pageYOffset == target) {
        clearInterval(obj.timer);
        // 回调函数位置：定时器结束的位置
        if (callback) {
          // 调用函数
          callback();
        }
      }
      // 把每次步长值给为逐渐变小的值(目标值-现在位置/10)
      // obj.style.left = window.pageYOffset + step + 'px';
      window.scroll(0, window.pageYOffset + step);
    }, 15);
  }
});
