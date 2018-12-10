var oli = document.querySelectorAll("#banner-tool li");
var btnLeft = document.getElementById('btn1');
var btnRight = document.getElementById('btn2');
var oul = document.getElementById('banner-tool');
var page = document.querySelectorAll("#banner-nav a");
var banner = document.getElementById('banner');
var rgb=["rgb(255, 69, 0)","rgb(119, 99, 184)","rgb(251, 76, 83)","rgb(23, 66, 161)","rgb(255, 61, 124)","rgb(79, 123, 186)","rgb(243, 171, 61)","rgb(241, 1, 50)"];
var timer = null;
var i = 0;
autoPlay();
clickPage();
btnRight.onclick = function() {
	if (i >= 7) {
		i = -1;
	}
	i++;
	run();
	pageBgColor();
	banner.style.background=rgb[i];
}
btnLeft.onclick = function() {
	if (i <= 0) {
		i = 7;
	}
	i--;
	run();
	pageBgColor();
	banner.style.background=rgb[i];
}
oul.onmouseover = function() {
	clearInterval(timer)
}
oul.onmouseout = function() {
	autoPlay();
}

//定时器
function autoPlay() {
	timer = setInterval(function() {
		if (i >= 7) {
			i = -1;
		}
		i++;
		run();
		pageBgColor();
		banner.style.background=rgb[i];
	}, 2000)

}
// 点击圆圈变色
function clickPage() {
	for (var t = 0; t < page.length; t++){
		page[t].index=t;
		page[t].onclick=function(){
			i=this.index;
			run()
			pageBgColor();
			banner.style.background=rgb[i];
		}
	}
}

//切换图片 圆圈变色
function pageBgColor() {
	for (var j = 0; j < page.length; j++) {
		page[j].style.background = "#fff";
	}
	page[i].style.background = "#FF9900";
	banner.style.background=rgb[i];
}
//主函数
function run() {
	for (var k = 0; k < oli.length; k++) {
		oli[k].style.opacity = 0
	}
	oli[i].style.opacity = 1;
}
