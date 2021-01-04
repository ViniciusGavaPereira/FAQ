$(".question").click(function(){

    var display = $(this).children(".answer").css('display');

    $(this).children('img').css('transform', 'rotate(180deg)');
    
    $(".answer").hide()

    $(this).children(".answer").toggle()

    if(display == 'block') {
        $(this).children(".answer").hide();
        $(this).children('img').css('transform', "rotate(0deg)");

    }
    
})