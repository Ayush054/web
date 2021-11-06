$(document).ready(function(){
  /* -------------------------- Animations on nav bar------------------------- */
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
          if(scroll<600){
           $(".navbar-expand-lg").addClass("bg-transparent navbar-dark");
            }
            else {$(".navbar-expand-lg").removeClass("bg-transparent navbar-dark");
            $(".navbar-expand-lg").css("background-color", "#fff2");
               $(".navbar-expand-lg").addClass("bg-muted navbar-light");
            }
           });
        /* -------------------------- Animations on scroll(FadeIn)------------------------- */   
        $(window).scroll( function(){
    
          $(".fade_in").each( function(i){
              var bottom_of_object = $(this).position().top + $(this).outerHeight();
              var bottom_of_window = $(window).scrollTop() + $(window).height();
                 if( bottom_of_window > bottom_of_object ){
                  
                  $(this).animate({'opacity':'1'},1800);       
              }
          }); 
      });


});