$("#_list li").mouseover(function () {
    $(".index-sort").css("display", "none").eq($(this).index()).css("display", "block").css("border", "1px solid #000");
})
var timer = null;
$("#_list").mouseleave(function () {
    timer = setTimeout(function () {
        $(".index-sort").css("display", "none");
    }, 100)
})
$(".index-sort").mouseenter(function(){
    clearInterval(timer);
})
$(".index-sort").mouseleave(function(){
    $(".index-sort").css("display", "none");    
})