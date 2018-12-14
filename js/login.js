// 模拟已存在的用户登录
var login = document.getElementById('login');
var userName = document.getElementById('username');
var pwd = document.getElementById('password');
login.onclick = function() {
	var ajax = new XMLHttpRequest;
	ajax.open("POST", "../login.php", true);
	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	ajax.send("username=" + username.value + "&password=" + pwd.value);
	ajax.onreadystatechange = function() {
		if (ajax.readyState === 4 && ajax.status === 200) {
			var data = JSON.parse(ajax.responseText).code;
			if (data === 0) {
				alert("用户名不存在");
			} else if (data === 1) {
				alert("密码不正确");
			} else if (data === 2) {
				alert(" 登陆成功");
				window.open("../index.html");
			}
		}
	}
}
// 切换登录方式
var item1 = document.getElementsByClassName("tab-item")[0];
var loginFirst = document.getElementsByClassName("username-login")[0];
var item2 = document.getElementsByClassName("tab-iton")[0];
var loginTwo = document.getElementsByClassName("er-code")[0];
var _icon_i = document.querySelectorAll(".login-tab i");
item1.onclick = function () {
	loginTwo.style.display = "block";
	loginFirst.style.display = "none";
	_icon_i[0].style.display = "block";
	_icon_i[1].style.display="none";
}
item2.onclick  = function(){
	loginTwo.style.display="none";
	loginFirst.style.display = "block";
	_icon_i[0].style.display = "none";
	_icon_i[1].style.display = "block";
}
// 短信方式登录出现
var sms = document.getElementById("_sms");
var _sms = document.getElementById("_sms_");
var _input_box = document.getElementsByClassName("input-box");
var _phone_box = document.querySelectorAll(".phone-box");

sms.onclick = function(){
	_input_box[0].style.display="none";
	_input_box[1].style.display = "none";
	_phone_box[0].style.display = "block";
	_phone_box[1].style.display = "block";
	sms.style.display="none";
	_sms.style.display = "block";
}
_sms_.onclick = function(){
		_input_box[0].style.display = "block";
		_input_box[1].style.display = "block";
		_phone_box[0].style.display = "none";
		_phone_box[1].style.display = "none";
		sms.style.display = "block";
		_sms.style.display = "none";
}
// 二维码 登录方式出现
var codeImg = document.getElementById("_code_img");
var phoneSao = document.getElementById("phone_sao");
codeImg.onmouseover=function(){
	codeImg.style.transform = "translateX(-76px)";
	phoneSao.style.display="block";
}
codeImg.onmouseout = function () {
	codeImg.style.transform = "translateX(0px)";
	phoneSao.style.display = "none";
}