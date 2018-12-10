var con = document.getElementById('pingou');
var btn1 = document.getElementById('btn-Left');
var btn2 = document.getElementById('btn-Right');
var i = 0;
btn1.onclick = function () {
    if (i <= 0) {
        con.style.left = "-1665px";
        i = 3;
    }
    i--;
    act(con, "left", -550 * i);
};
btn2.onclick = function () {
    if (i >= 3) {
        con.style.left = 0;
        i = 0;
    }
    i++;
    act(con, "left", -550 * i);
};

function act(ele, dir, end) {
    if (dir === "left") {
        ele.style.left = ele.offsetLeft - 550 + "px";
        if (ele.offsetLeft <= end) {
            ele.style.left = end + "px";
        }

    } else {
        ele.style.left = ele.offsetLeft + 550 + "px";
        if (ele.offsetLeft >= end) {
            ele.style.left = end + "px";

        }
    }
}