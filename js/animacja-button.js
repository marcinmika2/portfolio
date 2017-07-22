$(document).ready(function(){
    'use strict';
    $("button").click(function(){
        $("p").slideToggle(1000,'linear',function(){
			$('form').css('display','none');
			$('h3').css('display','none');
		});
    });
});