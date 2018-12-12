var mobileAlias = document.getElementById("mobileAlias");
var aliasTip = document.getElementById("aliasTip");
var ok = document.getElementsByClassName("ok")[0];
var sendMsg = document.getElementById("sendMsg");
var smsCode = document.getElementById("smsCode");
var setPsw = document.getElementById("setPsw");
var Suggestion = document.getElementById("suggestion")
var setPswRank = document.getElementById("setPsw_rank");
var eye = document.getElementsByClassName("eye")[0];
var submitBtn = document.getElementById("submitBtn");
var res1;
var res2;
// 输入手机号失去焦点
mobileAlias.onblur = function () {
    var that = this.value;
    res1 = /^1\d{10}$/.test(that);
    if (that) {
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
    return true;
};
// 密码验证
setPsw.onfocus = function () {
    var that = this.value
    Suggestion.style.display = "block";
    if (that) {
        eye.style.display = "block";
    }
    return true;
};
setPsw.onblur = function () {
    var that = this.value;
    res2 = /^[a-zA-Z0-9]\w{5,19}$/.test(that);
    if (that) {
        setPswRank.style.display = "block";
        Suggestion.style.display = "none";
    }
    return true;
}
sendMsg.onclick = function () {
    var arr = ['0', '1', '3', '4', '5', '6', '7', '8', '9'];
    code(6);
    function code(number) {
        var str = "";
        for (var i = 0; i < number; i++) {
            var num = Math.floor(Math.random() * arr.length);
            str += arr[num];
        };
        smsCode.value = str;
    };
    return true;
};

// submitBtn.onclick=function(){
//      window.open("../index.html","_self");
// }