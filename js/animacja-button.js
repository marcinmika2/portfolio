'use strict';
    $("button").click(function(){	
        $("p").slideToggle(1000,'linear',function(){
			$('form').css('display','none');
			$('h3').css('display','none');
			$('.experiance-icon').css('display','none');
			$('.opis-doswiadczenie').css('display','none');
			});
    });
	
	