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