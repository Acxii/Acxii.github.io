var now1 = new Date();

function createtime1() {
    var grt = new Date("2023/05/11 00:00:00"); //此处修改你的建站时间或者网站上线时间
    now1.setTime(now1.getTime() + 250);
    var days = (now1 - grt) / 1000 / 60 / 60 / 24;
    var dnum = Math.floor(days);

    var ascll = [
        `🎈欢迎访问acxii.top🎈`,
        `
     _                    _   _ 
    / \\      ___  __  __ (_) (_)
   / _ \\    / __| \\ \\\/ / | | | |
  / ___ \\  | (__   >  <  | | | |
 /_/   \\_\\  \\___| /_/\\_\\ |_| |_|                              
                                           
`,
        "小站已经苟活",
        dnum,
        "天啦!",
        "©2023 By Acr.02",
    ];

    setTimeout(
        console.log.bind(
            console,
            `\n%c${ascll[0]}%c ${ascll[1]} %c${ascll[2]}%c ${ascll[3]}%c ${ascll[4]}\n\n%c ${ascll[5]}\n`,
            "color:#5D9FFF;font-size:14px",
            "color:#5D9FFF;font-size:14px",
            "",
            "color:#5D9FFF;font-size:12px",
            "",
            "color:#5D9FFF;font-size:14px"
        )
    );
}

createtime1();

function createtime2() {
    setTimeout(console.log.bind(console, "%c W23-12 %c 系统监测到你已打开控制台", "color:white; background-color:#4f90d9", ""));
    setTimeout(
        console.warn.bind(console, "%c S013-782 %c 你现在正处于监控中", "color:white; background-color:#d9534f", "")
    );
}
createtime2();

// 重写console方法
console.log = function () { };
console.error = function () { };
console.warn = function () { };


// 监听控制台是否开启

