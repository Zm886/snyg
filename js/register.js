var mobileAlias = document.getElementById("mobileAlias");
var aliasTip = document.getElementById("aliasTip");
var ok = document.getElementsByClassName("ok")[0];
var sendMsg = document.getElementById("sendMsg");
var smsCode = document.getElementById("smsCode");
var setPsw = document.getElementById("setPsw");
var Suggestion = document.getElementById("suggestion")
var setPswRank = document.getElementById("setPswRank");
var eye = document.getElementById("eye")[0];
var res1;
var res2;
// 输入手机号失去焦点
mobileAlias.onblur = function () {
    res1 = /^1\d{10}$/.test(this.value);
    if (this.value !== null) {
        if (res1) {
            ok.style.display = "block";
            aliasTip.style.display = "none";
        } else {
            aliasTip.style.display = "block";
            ok.style.display = "none";
        }
    } else {
        aliasTip.style.display = "none";
    }
}
setPsw.onfocus = function () {
    Suggestion.style.display = "block";
    if (this.value !== null) {
        eye.style.display="block";
    }
}

sendMsg.onclick = function () {
    var arr = ['0', '1', '3', '4', '5', '6', '7', '8', '9'];
    code(6)

    function code(number) {
        var str = "";
        for (var i = 0; i < number; i++) {
            var num = Math.floor(Math.random() * arr.length);
            str += arr[num];
        };
        smsCode.value = str;
    }
}