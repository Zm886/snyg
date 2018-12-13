var search = document.getElementById('search');
var searchMessage = document.getElementById('searchmessage');
var _button = document.getElementById('button');
var _B = document.getElementById('_B');

search.onkeydown = function () {
	var ele = document.createElement("script");
	searchMessage.style.display = "block";
	ele.src = "https://ds.suning.cn/ds/his/new/6059949960-" + search.value +
		"-0-1_0-fn.jsonp?callback=fn&_=1542874684235";
	document.getElementsByTagName("head")[0].appendChild(ele);
	document.getElementsByTagName("head")[0].removeChild(ele);
	if (search.value === "") {
		searchMessage.style.display = "block";
	}
}
// 点击搜索
search.onkeyup = function () {
	_button.onclick = function () {
		window.location.href = `https://search.suning.com/${search.value}/`;
	}
}

function fn(data) {
	var res = data.words;
	var str = "";
	res.forEach(function (item, index) {
		if (item.keyword !== undefined) {
			str +=
				`<li><a href="https://search.suning.com/${item.keyword}/">${item.keyword}</a></li>`
		}
	})
	_B.innerHTML = str;
}

search.onfocus = function () {
	searchMessage.style.display = "block";
}
search.onblur = function () {
	setTimeout(function () {
		searchMessage.style.display = "none";
	}, 500)

}