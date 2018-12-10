$("._cover").on("mouseover",function(){
    $(this).stop().animate({width:"658px"},200).siblings().stop().animate({width:"50px"},200);
})
$(document).on("mouseout",function(){
    $("._cover").stop().animate({width:"202px"},200);
})