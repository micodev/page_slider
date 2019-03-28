$(document).ready(function(){
  $(".clc2").css("left",-$(".clc2").width()+"px")
  console.log($(".clc2").position().left)
  $(".btn1").click(function(){
        console.log("clicked")
       
        var pos = $(".clc1").position()
        var pos2 = $(".clc2").position()
      console.log(pos.left);
          if(pos.left <=$(window).width())
         {
            $('.clc1').animate({
                "left" :"+="+$(window).width() 
              },3000);
            }
            if(pos2.left<0)
            $('.clc2').animate({
                "left" :"+="+$(".clc2").width()
              },3000);
        
  });
  $(".btn2").click(function(){
    var pos = $(".clc1").position()
    var pos2 = $(".clc2").position()
  console.log(pos.left);
      if(pos.left > 0 )
     {
        $('.clc1').animate({
            "left" :"-="+$(window).width() 
          },5000);
        }
        if(pos2.left>-$(".clc2").width())
        $('.clc2').animate({
            "left" :"-="+$(".clc2").width()
          },5000);
    
});
});