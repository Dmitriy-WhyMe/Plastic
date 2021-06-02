// Jquery with no conflict
jQuery(document).ready(function($) {
	
	//##########################################
	// LOF SLIDER
	//##########################################
	 
	 
	var buttons = { previous:$('#home-slider .button-previous') ,
						next:$('#home-slider .button-next') };	
	

	
	function initLofSlider(items, nh, nw, w){
		$('#home-slider').lofJSidernews( {
			interval 		: 1000,
			direction		: 'opacitys',	
			easing			: 'easeInOutExpo',
			duration		: 1200,
			auto		 	: true,
			maxItemDisplay  : 5,
			navPosition     : 'horizontal', // horizontal
			navigatorHeight : 73,
			navigatorWidth  : 200,
			mainWidth		:  w,
			buttons: buttons
		});
	}	
	
	
	// responsive slider function
	
	// Default values for page
	var items = 5;			// Max item display
	var nh = 73;			// Navigator Height
	var nw = 200;			// Navigator Width
	var w = 940;			// Main Width
		
	initLofSlider(items, nh, nw, w);	
	
	$(window).resize(function(){
		
		var ww = $(window).width();
		console.log(ww);
		
		// Default Layout: 992px.	
		items = 5;
		nh = 73;
		nw = 200;
		w = 940;
		
		
		// Tablet Layout: 768px.
		if( ww >= 768 && ww <= 991){
			items = 3;
			nh = 73;
			nw = 220;
			w = 768;
			
			console.log('TABLET');	
		}
		
		// Wide Mobile Layout: 480px
		if( ww >= 480 && ww <= 767){
			items = 2;
			nh = 73;
			nw = 205;
			w = 480;
				
		}
		
		initLofSlider(items, nh, nw, w);
	});
	

//close			
});




















