var now = new Date();
function createtime() {
  // 当前时间
  now.setTime(now.getTime() + 1000);
  var bainian = new Date('11/05/2123 00:00:00');  //  100年之后
  var grt = new Date("2023/05/11 00:00:00");	// 网站诞生时间
  var new_date = Math.abs(bainian - now);
  new_date = Math.floor(new_date / (1000)); // 百年之后的时间

  var t = now.getTime()-grt.getTime() ;
  var d = Math.floor(t / 1000 / 60 / 60 / 24);
  var dnum = String(d);
  var h = Math.floor(t / 1000 / 60 / 60 % 24);
  var hnum = String(h).length === 1 ? '0' + h : String(h);
  var m = Math.floor(t / 1000 / 60 % 60);
  var mnum = String(m).length === 1 ? '0' + m : String(m);
  var s = Math.floor(t / 1000 % 60);
  var snum = String(s).length === 1 ? '0' + s : String(s);
  let currentTimeHtml = "";
  (currentTimeHtml =
    hnum < 18 && hnum >= 9
    ? `<img class='boardsign' src='https://img.shields.io/badge/Acr.02-%E5%A5%BD%E5%9B%B0,%E5%A5%BD%E6%83%B3%E7%9D%A1%E8%A7%89-ff69b4.svg?style=social' title='真的好困呀~'><br> <div style="font-size:13px;font-weight:bold">本站居然运行了 ${dnum} 天 ${hnum} 小时 ${mnum} 分 ${snum} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 距离百年老站🍥还差${new_date}秒🍭</div>`
    : `<img class='boardsign' src='https://img.shields.io/badge/Acr.02-%E4%B8%8D%E6%83%B3%E7%9D%A1%E8%A7%89,%E5%BC%80%E5%90%AFemo%E6%A8%A1%E5%BC%8F-ff69b4.svg?style=social' title='我感觉精力充沛~'><br> <div style="font-size:13px;font-weight:bold">本站居然运行了 ${dnum} 天 ${hnum} 小时 ${mnum} 分 ${snum} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 距离百年老站🍥还差${new_date}秒🍭</div>`),
    document.getElementById("workboard") &&
    (document.getElementById("workboard").innerHTML = currentTimeHtml);
}
// 设置重复执行函数，周期1000ms
setInterval(() => {
  createtime();
}, 1000);