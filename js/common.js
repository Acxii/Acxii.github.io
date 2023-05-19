// 防抖全局计时器
let TT = null;    //time用来控制事件的触发
// 防抖函数:fn->逻辑 time->防抖时间
function debounce(fn, time) {
    if (TT !== null) clearTimeout(TT);
    TT = setTimeout(fn, time);
}

// 复制提醒
document.addEventListener("copy", function () {
    debounce(function () {
        new Vue({
            data: function () {
                this.$notify({
                    title: "已经成功复制✨",
                    message: "祝你开心,祝你快乐🤗",
                    position: 'top-left',
                    offset: 62,
                    showClose: true,
                    type: "success",
                    duration: 5000
                });
            }
        })
    }, 300);
})

// 随机访问文章
// 发现有时会和当前页面重复，加一个判断
function randomPost() {
    fetch('/baidusitemap.xml').then(res => res.text()).then(str => (new window.DOMParser()).parseFromString(str, "text/xml")).then(data => {
        let ls = data.querySelectorAll('url loc');
        while (true) {
            let url = ls[Math.floor(Math.random() * ls.length)].innerHTML;
            if (location.href == url) continue;
            location.href = url;
            return;
        }
    })
}

//动态标题
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    //离开当前页面时标签显示内容
    document.title = '👀发生甚么事了~';
    clearTimeout(titleTime);
  } else {
    //返回当前页面时标签显示内容
    document.title = '☘️欢迎回来~';
    //两秒后变回正常标题
    titleTime = setTimeout(function () {
      document.title = OriginTitile;
    }, 2000);
  }
});


// 自定义导航栏
document.addEventListener('pjax:complete', tonav);
document.addEventListener('DOMContentLoaded', tonav);
//响应pjax
function tonav() {
    document.getElementById("name-container").setAttribute("style", "display:none");
    var position = $(window).scrollTop();
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > position) {
            document.getElementById("name-container").setAttribute("style", "");
            document.getElementsByClassName("menus_items")[1].setAttribute("style", "display:none!important");
        } else {
            document.getElementsByClassName("menus_items")[1].setAttribute("style", "");
            document.getElementById("name-container").setAttribute("style", "display:none");
        }
        position = scroll;
    });
    //修复没有弄右键菜单的童鞋无法回顶部的问题
    document.getElementById("page-name").innerText = document.title.split(" | Acxii")[0];
}

function scrollToTop() {
    document.getElementsByClassName("menus_items")[1].setAttribute("style", "");
    document.getElementById("name-container").setAttribute("style", "display:none");
    btf.scrollToDest(0, 500);
}


// toggleWinbox() 美化按钮完工
toggleWinbox = function () {
    debounce(function () {
        new Vue({
            data: function () {
                this.$notify({
                    title: "🚫尚未实现该功能",
                    message: "站长已跑路,该网站只是作为纪念",
                    position: 'top-left',
                    offset: 62,
                    showClose: true,
                    type: "error",
                    duration: 5000
                });
            }
        })
    }, 300)
}