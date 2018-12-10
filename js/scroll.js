var scroll = document.getElementById('scroll');
var _scroll = document.getElementById('_scroll');
var lis = document.querySelectorAll("#scroll li");
// $("#floor").scrollTop();
// console.log($("#floor").scrollTop());
// $("#jiayong").scrollTop();
// console.log($("#jiayong").scrollTop());
// $("#floor-two").scrollTop();
// $("#floor-three").scrollTop();
// $("#meiwei").scrollTop();
// $("#floor-four").scrollTop();
// $("#floor-five").scrollTop();
// $("#floor-six").scrollTop();
// $("#biqiang").scrollTop();
// $("#reco-floor").scrollTop();

var timer = null;
window.onscroll = function () {
	if (document.documentElement.scrollTop >= 2300) {
		scroll.style.display = "block";
	} else {
		scroll.style.display = "none";
	}
	// 1
	if (document.documentElement.scrollTop >= 3000) {
		clearBg();
		lis[0].style.background = "#ff9900"
	}
	// 2
	if (document.documentElement.scrollTop >= 3600) {
		clearBg();
		lis[1].style.background = "#ff9900"
	}
	// 3
	if (document.documentElement.scrollTop >= 4200) {
		clearBg();
		lis[2].style.background = "#ff9900"
	}
	//4
	if (document.documentElement.scrollTop >= 4800) {
		clearBg();
		lis[3].style.background = "#ff9900"
	}
	//5
	if (document.documentElement.scrollTop >= 5400) {
		clearBg();
		lis[4].style.background = "#ff9900"
	}
	//6
	if (document.documentElement.scrollTop >= 5800) {
		clearBg();
		lis[5].style.background = "#ff9900"
	}
	//7
	if (document.documentElement.scrollTop >= 6500) {
		clearBg();
		lis[6].style.background = "#ff9900"
	}
	//8
	if (document.documentElement.scrollTop >= 7100) {
		clearBg();
		lis[7].style.background = "#ff9900"
	}
	//9
	if (document.documentElement.scrollTop >= 7600) {
		clearBg();
		lis[8].style.background = "#ff9900"
	}
	// 10
	if (document.documentElement.scrollTop >= 8000) {
		clearBg();
		lis[9].style.background = "#ff9900"
	}
	//消失
	if (document.documentElement.scrollTop >= 14500) {
		scroll.style.display = "none";
	}
}

for (var i = 0; i < lis.length; i++) {
	lis[i].index = i;
	lis[i].onclick = function () {
		if (700 * this.index >= document.documentElement.scrollTop) {
			LayerMove("bottom", 700 * this.index);
		} else {
			LayerMove("top", 700 * this.index);
		}
		// 改变楼层颜色
		for (var k = 0; k < lis.length; k++) {
			lis[k].style.background = "";
		}
		lis[this.index].style.background = "#F90";
	}
}

function LayerMove(dir, end) {
	clearInterval(timer);
	if (dir === "top") {
		timer = setInterval(function () {
			document.documentElement.scrollTop = document.documentElement.scrollTop - 10;
			if (document.documentElement.scrollTop <= end) {
				document.documentElement.scrollTop = end;
				clearInterval(timer);
			}
		})
	} else {
		timer = setInterval(function () {
			document.documentElement.scrollTop = document.documentElement.scrollTop + 10;
			if (document.documentElement.scrollTop >= end) {
				document.documentElement.scrollTop = end;
				clearInterval(timer);
			}
		})
	}

}

function clearBg() {
	for (var i = 0; i < lis.length; i++) {
		lis[i].style.background = "";
	}
}