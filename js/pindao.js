// smoallshow轮播
var m = 0;
var _smallShow = document.getElementById("smallshow");

function move(ele, dir, end) {
    if (dir === "left") {
        ele.style.left = ele.offsetLeft - 390 + "px";
        if (ele.offsetLeft <= end) {
            ele.style.left = end + "px";
        }
    } else {
        ele.style.left = ele.offsetLeft + 390 + "px";
        if (ele.offsetLeft >= end) {
            ele.style.left = end + "px";
        }
    }
}
$(".left-pointer").click(function () {
    if (m > 1) {
        _smallShow.style.left = 0;
        m = 0;
    }
    m++;
    move(_smallShow, "left", -390 * m);
})
$(".right-pointer").click(function () {
    if (m <= 0) {
        _smallShow.style.left = "-780px";
        m = 2;
    }
    m--;
    move(_smallShow, "right", -390 * m);
})

//bigshow内容
var _bigShow = document.getElementById("bigshow");
var showTime = document.querySelectorAll("._showTime");
var showData = [{
    url: "img/1210-0.png",
    content: "# 奶爸带娃有妙招，幸运抽奖送神仙水！"
}, {
    url: "img/1210-1.jpg",
    content: "# 配蜜蜡美饰，做知性女神"
}, {
    url: "img/1210-2.jpg",
    content: "# 【百万云钻】方太大牌粉丝日专场"
}, {
    url: "img/1210-3.jpg",
    content: "# 美味不停，高级蛋糕食材推荐！"
}, {
    url: "img/1210-4.jpg",
    content: "# 厉害了我的爆米花，舌尖上的童年记忆"
}, {
    url: "img/1210-5.jpg",
    content: "# 直播抽奖！品味千山万水，不如品尝萝北！"
}, {
    url: "img/1210-0.png",
    content: "# 奶爸带娃有妙招，幸运抽奖送神仙水！"
}, {
    url: "img/1210-1.jpg",
    content: "# 配蜜蜡美饰，做知性女神"
}, {
    url: "img/1210-2.jpg",
    content: "# 【百万云钻】方太大牌粉丝日专场"
}];

function mouseoverPage() {
    for (var t = 0; t < showTime.length; t++) {
        var str = "";
        showTime[t].index = t;
        showTime[t].onmouseover = function () {
            n = this.index;
            str = `
                <li class="item">
			        <a href="javascript:;">
				        <img src=${showData[n].url} width="390px" height="227px">
					    <i class="zb">直播中</i>
					    <span></span>
					    <div class="black-cover"></div>
					    <p class="name">${showData[n].content}</p>
			        </a>
                </li>`;
            _bigShow.innerHTML = str;    
        }
    }
}
mouseoverPage();
