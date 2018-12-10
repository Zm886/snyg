var m = 0;
var _show = document.getElementById("smallshow");
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
        _show.style.left = 0;
        m = 0;
    }
    m++;
    console.log(m);
    move(_show,"left", -390 * m);
})
$(".right-pointer").click(function () {
    if (m <= 0) {
        _show.style.left = "-780px";
        m = 2;
    }
    m--;
    console.log(m);
    move( _show,"right", -390 * m);
})