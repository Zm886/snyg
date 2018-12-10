var ti = document.getElementById("ti");
setInterval(function(){
    countDown(2018,11,24)
},1000)
function countDown(hours, minutes, seconds) {
    var d1 = new Date(hours, minutes, seconds);
    var d2 = new Date();
    var timer_dif = (d1.getTime() - d2.getTime()) / 1000;
    var hours = parseInt(timer_dif % (60 * 60 * 24) / 60 / 60);
    var mins = parseInt(timer_dif % (60 * 60) / 60);
    var second = parseInt(timer_dif % (60));
    var str = `
    <span>${addZero(hours)}</span>
    <i>:</i>
    <span>${addZero(mins)}</span>
    <i>:</i>
    <span>${addZero(second)}</span>
    `
    ti.innerHTML=str;
    console.log()
}
function addZero(a) {
    if (a < 10) {
        a = "0" + a;
    }
    return a;
}