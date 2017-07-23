 'use strict';

$('.opis-doswiadczenie').hide()
	
	$('.css').click(function(){
   
			var clicks = $(this).data('clicks');
			$('.opis-doswiadczenie').slideUp()
			$('.cssText').slideDown();
	});
	
		$('.html').click(function(){
			$('.opis-doswiadczenie').slideUp()
			$('.htmlText').slideDown();
	});
	
		$('.linux').click(function(){
			$('.opis-doswiadczenie').slideUp()
			$('.linuxText').slideDown();
	});
	
		$('.wordpress').click(function(){
			$('.opis-doswiadczenie').slideUp()
			$('.wordpressText').slideDown();
	});
});