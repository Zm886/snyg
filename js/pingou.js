var con = document.getElementById('pingou');
var btn1 = document.getElementById('btn-Left');
var btn2 = document.getElementById('btn-Right');
var i = 0;
var time = null;
btn1.onclick = function () {
    if (con.offsetLeft) {
        con.style.left = "-1665px";
        i = 3;
    }
    i--;
    move(con, "left", -555 * i);
};
btn2.onclick = function () {
    if (i >= 3) {
        con.style.left = "0px";
        i = 0;
    }
    i++;
    move(con, "left", -550 * i);
};

function move(ele, dir, end) {
    if (dir === "left") {
        time=setInterval(function () {
            ele.style.left = ele.offsetLeft - 10 + "px";
            if (ele.offsetLeft <= end) {
                ele.style.left = end + "px";
                clearInterval(time)
            }
        },1000)
    } else {
        time=setInterval(function () {
            ele.style.left = ele.offsetLeft + 10 + "px";
            if (ele.offsetLeft >= end) {
                ele.style.left = end + "px";
                clearInterval(time)
            }
        },1000)
    }
}