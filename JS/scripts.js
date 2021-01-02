
/* $(".question").click(function(){

    var x = "none"


    if(x == "none"){

        $(this).children(".answer").toggle()

        x = "visible"

    }else{

        $(".answer").hide()


        $(this).children(".answer").toggle()

        
    }


})

 */



$(".question").click(function(){
    var display = $(this).children(".answer").css('display')
    
    $(".answer").hide()
    
    $(this).children(".answer").toggle()
  
    if(display == 'block') {
        $(this).children(".answer").hide()
    }
    
})