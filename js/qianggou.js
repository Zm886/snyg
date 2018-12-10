//选项卡切换
$("._list_").mouseover(function () {
    $("._list_").css("background", "none").eq($(this).index()).css("background", "url(img/index.png) no-repeat -561px 0");
    $(".content-area-f").css("display", "none").eq($(this).index()).css("display", "block");
})

// 左右轮播
var s = 0;
var item = document.getElementById("_item_");
function move(ele, dir, end) {
    if (dir === "left") {
        ele.style.left = ele.offsetLeft - 1000 + "px";
        if (ele.offsetLeft <= end) {
            ele.style.left = end + "px";
        }
    } else {
        ele.style.left = ele.offsetLeft + 1000 + "px";
        if (ele.offsetLeft >= end) {
            ele.style.left = end + "px";

        }
    }
}
$(".left-btn").click(function () {
    if (s >= 4) {
        item.style.left = 0;
        s = 0;
    }
    s++;
    console.log(s)
    move(item, "left", -1000 * s);
})
$(".right-btn").click(function () {
    if (s <= 0) {
        item.style.left = "-5000px";
        s = 5;
    }
    s--;
    console.log(s)
    move(item, "left", -1000 * s);
})

// 倒计时
var ti = document.getElementById("ti");
setInterval(function () {
    countDown(2018, 11, 10, 16);
}, 1000);
function countDown(years, months, day, hours) {
    var d1 = new Date(years, months, day, hours);
    var d2 = new Date();
    var timer_dif = (d1.getTime() - d2.getTime()) / 1000;
    var hours = parseInt(timer_dif % (60 * 60 * 24) / 60 / 60);
    var mins = parseInt(timer_dif % (60 * 60) / 60);
    var second = parseInt(timer_dif % (60));
    var str = `
    <span>${addZero(hours)}</span>
    <i>:</i>
    <span>${addZero(mins)}</span>
    <i>:</i>
    <span>${addZero(second)}</span>
    `;
    ti.innerHTML = str;
}

function addZero(a) {
    if (a < 10) {
        a = "0" + a;
    }
    return a;
}