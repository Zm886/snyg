var bigBox = document.getElementById("bigbox"); //右边装放大图片的盒子
var bigImg = document.getElementById("bigimg"); //右边放大的图片
var imgzoomShot = document.querySelector(".imgzoom-shot"); //鼠标要移动的块
var imgZoom = document.querySelector(".imgZoom"); //左边的装原图的盒子

imgZoom.onmouseover = function () {
    //鼠标进入到左边的盒子时候
    bigBox.style.display = 'block';
    imgzoomShot.style.display = 'block';
}
imgZoom.onmouseout = function () {
    //鼠标离开到左边的盒子时候
    bigBox.style.display = 'none';
    imgzoomShot.style.display = 'none';
}
imgZoom.onmousemove = function (ev) {
    var event = event || window.event;//兼容性
    var X = event.clientX - imgZoom.offsetLeft;
    var Y = event.clientY - imgZoom.offsetTop;
}























// imgzoomShot.onmousedown = function (ev) {
//     var x = ev.offsetX;
//     var y = ev.offsetY;
//     document.onmousemove = function (ev) {
//         imgzoomShot.style.left = ev.pageX - imgZoom.offsetLeft - x + "px";
//         imgzoomShot.style.top = ev.pageY - imgZoom.offsetTop - y + "px";
//         if (imgzoomShot.offsetLeft <= 0) {
//             imgzoomShot.style.left = 0;
//         }
//         if (imgzoomShot.offsetTop <= 0) {
//             imgzoomShot.style.top = 0;
//         }
//         if (imgzoomShot.offsetLeft >= imgZoom.offsetWidth - imgzoomShot.offsetWidth) {
//             imgzoomShot.style.left = imgZoom.offsetWidth - imgzoomShot.offsetWidth + "px";
//         }
//         if (imgzoomShot.offsetTop >= imgZoom.offsetHeight - imgzoomShot.offsetHeight) {
//             imgzoomShot.style.top = imgZoom.offsetHeight - imgzoomShot.offsetHeight + "px";
//         }
//     }
//     document.onmouseup = function () {
//         document.onmousemove = null;
//     }
// }