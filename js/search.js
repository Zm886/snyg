var search = document.getElementById('search');
var searchMessage = document.getElementById('searchmessage');
var _B = document.getElementById('_B');
search.onkeyup = function() {
	var ele = document.createElement("script");
	searchMessage.style.display = "block";
	ele.src = "https://ds.suning.cn/ds/his/new/6059949960-" + search.value +
		"-0-1_0-fn.jsonp?callback=fn&_=1542874684235";
	document.getElementsByTagName("head")[0].appendChild(ele);
	document.getElementsByTagName("head")[0].removeChild(ele);
	if (search.value ==="") {
		searchMessage.style.display = "block";
	}
}

function fn(data) {
	var res = data.words;
	var str = "";
	res.forEach(function(item, index) {
		console.log(item.keyword)
		if (item.keyword !== undefined) {
			str +=
				`<li><a href="https://search.suning.com/${item.keyword}/">${item.keyword}</a></li>`
		}
	})
	_B.innerHTML = str;
}

search.onfocus = function() {
	searchMessage.style.display = "block";
	console.log(1)
}
search.onblur = function() {
	setTimeout(function(){
		searchMessage.style.display = "none";
	},500)
	
}
