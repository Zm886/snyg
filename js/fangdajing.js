$('.zoom').mouseover(function (ev) {
    //移入鼠标时隐藏的元素出现
    $('#bigbox').css('display', 'block');
    $('.imgzoom-shot').css('display', 'block');
})

// 滑块绑定鼠标移动事件
$('.zoom').mousemove(function (ev) {

    // 获取鼠标当前的位置
    var x = ev.pageX;
    var y = ev.pageY;

    // 获取原图窗口距离文档的偏移位置
    var sX = $('.zoom').offset().left;
    var sY = $('.zoom').offset().top;

    // 计算鼠标的相对位置（相对于原图窗口的偏移距离）
    var mx = x - sX;
    var my = y - sY;

    // 获取小框框的宽高
    var mw = $('.imgzoom-shot').width() / 2;
    var mh = $('.imgzoom-shot').height() / 2;

    // 鼠标移动后小框框的移动距离
    $('.imgzoom-shot').css({
        left: mx - mw + 'px',
        top: my - mh + 'px'
    });

    // 获取小框框的偏移位置
    var lw = $('.imgzoom-shot').position().left;
    var lh = $('.imgzoom-shot').position().top;

    // 判断边界（小框框只能在原图窗口范围内移动）
    var maxW = $('.zoom').width() - $('.imgzoom-shot').width()
    var maxH = $('.zoom').height() - $('.imgzoom-shot').height()
    // 左边界
    if (lw <= 0) {
        $('.imgzoom-shot').css('left', '0px');
    }
    // 右边界
    if (lw >= maxW) {
        $('.imgzoom-shot').css('left', maxW + 'px');
    }
    // 上边界
    if (lh <= 0) {
        $('.imgzoom-shot').css('top', '0px');
    }
    // 下边界
    if (lh >= maxH) {
        $('.imgzoom-shot').css('top', maxH + 'px');
    }

    // 获取小框框的偏移位置
    var lw = $('.imgzoom-shot').position().left;
    var lh = $('.imgzoom-shot').position().top;

    // 计算鼠标在小图里的位置  *2.5计算大图移动的比例
    var newX = lw * 2;
    var newY = lh * 2;

    $('#bigimg').css({
        left: -newX + 'px',
        top: -newY + 'px'
    });
})

$('.imgzoom-shot').mouseout(function (ev) {
    //移入鼠标时隐藏的元素出现
    $('#bigbox').css('display', 'none');
    $('.imgzoom-shot').css('display', 'none');
})
var imgData = [{
        url: "../img/666.jpg"
    },
    {
        url: "../img/555.jpg"

    },
    {
        url: "../img/777.jpg"
    },
    {
        url: "../img/888.jpg"

    },
    {
        url: "../img/999.jpg"
    }

]
var _zoom = document.getElementsByClassName("_zoom");
var zoom = document.getElementsByClassName("zoom")[0];
var zoomBox = document.getElementById("bigbox");
function imgpage() {
    var n = imgData.length;
    for (var m = 0; m < n; m++) {
        var str1 = "";
        var str2 = "";
        _zoom[m].index = m;
        console.log(m)
        _zoom[m].onmouseover = function () {
            s = this.index;
            str1 = `
                <img src = "${imgData[s].url}">
                <div class = "imgzoom-shot" ></div> 
            `;
            str2 = `
                <img src = "${imgData[s].url}" id ="bigimg">
            `;
            zoom.innerHTML = str1;
            zoomBox.innerHTML = str2;
        }
    }
}
imgpage();