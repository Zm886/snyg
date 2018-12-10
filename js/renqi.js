var f = 0;
var comList = document.getElementById("_comlist");
function move(ele, dir, end) {
    if (dir === "left") {
        ele.style.lef = ele.offsetLeft - 380 + "px";
        if (ele.style.offsetLeft <= end) {
            ele.style.left = end + "px";
        }
    } else {
        ele.style.left = ele.offsetLeft + 380 + "px";
        if (ele.style.offsetLeft >= end) {
            ele.style.left = end + "px";
        }
    }
}
$("#leftBtn").click(function () {
    if (f > 2) {
        comList.style.left = 0;
        f = 0;
    }
    f++;
    console.log(f)
    move(comList, "left", -380 * f);
})
$("#rightBtn").click(function () {
    if (f <= 0) {
        comList.style.left = "-1140px";
        f = 3;
    }
    f--;
    console.log(f)
    move(comList, "right", -380 * f);
})