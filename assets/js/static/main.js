var aux;
$(document).ready(function(){
	
	$('area,.eventLayer,.actionLayer').on('click',function(evt){
			evt.preventDefault();
			return false;
	});
	$('.eventLayer,.actionLayer').attr('shown',false);
	$('.fancybox').fancybox();
	$('area').qtip({
			show: 'click',
			hide: 'unfocus',
			metadata: {
				type: 'html5', // Use HTML5 data-* attributes
				name: 'qtipopts' // Grab the metadata from the data-qtipOpts HTML5 attribute
			},
			content: {
				text: function(event, api) {
					$.ajax({
                        url: '/staticvideo/lois/'+Math.random()+'/?width=550&id='+jQuery(event.target).parent().attr('name') // Use href attribute as URL
                    })
                    .then(function(content) {
                        // Set the tooltip content upon successful retrieval
						 
                        api.set('content.text', content+jQuery('#hC'+jQuery(event.target).parent().attr('name')).html());
						
                    }, function(xhr, status, error) {
                        // Upon failure... set the tooltip content to error
                        api.set('content.text', status + ': ' + error);
                    });
        
                    return 'Loading...'; // Set some initial text
                }
			},
			position: {
             target: 'mouse', // Use the mouse position as the position origin
             adjust: {
                 // Don't adjust continuously the mouse, just use initial position
                 mouse: false
             } 
			}
			
		});
		
	$('.chulakovLink').qtip({
			show: 'click',
			hide: 'unfocus',
			metadata: {
				type: 'html5', // Use HTML5 data-* attributes
				name: 'qtipopts' // Grab the metadata from the data-qtipOpts HTML5 attribute
			},
			content: {
				text: function(event, api) {
					$.ajax({
                        url: '/staticvideo/chulakov/'+Math.random()+'/?width=550&id='+jQuery(event.target).parent().attr('href').substr(1) // Use href attribute as URL
                    })
                    .then(function(content) {
                        // Set the tooltip content upon successful retrieval
						 
                        api.set('content.text', content);
						
                    }, function(xhr, status, error) {
                        // Upon failure... set the tooltip content to error
                        api.set('content.text', status + ': ' + error);
                    });
        
                    return 'Loading...'; // Set some initial text
                }
			},
			position: {
             target: 'mouse', // Use the mouse position as the position origin
             adjust: {
                 // Don't adjust continuously the mouse, just use initial position
                 mouse: false
             } 
			}
			
		});
		/*
	$('[vidLocation]').qtip({
			show: 'mouseover',
			hide: 'mouseout',
			metadata: {
				type: 'html5', // Use HTML5 data-* attributes
				name: 'qtipopts' // Grab the metadata from the data-qtipOpts HTML5 attribute
			},
			content: {
				text: function(event, api) {
					aux=event;
					$.ajax({
                        url: '/user/videoHome/'+Math.random()+'/?width=550&location='+jQuery(event.target).parent().attr('vidLocation') // Use href attribute as URL
                    })
                    .then(function(content) {
                        // Set the tooltip content upon successful retrieval
						 
                        api.set('content.text', content);
						
                    }, function(xhr, status, error) {
                        // Upon failure... set the tooltip content to error
                        api.set('content.text', status + ': ' + error);
                    });
        
                    return 'Loading...'; // Set some initial text
                }
			},
			position: {
             target: 'mouse', // Use the mouse position as the position origin
             adjust: {
                 // Don't adjust continuously the mouse, just use initial position
                 mouse: false
             } 
			}
			
		});
		*/
	$('.gDriveLink').qtip({
			show: 'click',
			hide: 'unfocus',
			metadata: {
				type: 'html5', // Use HTML5 data-* attributes
				name: 'qtipopts' // Grab the metadata from the data-qtipOpts HTML5 attribute
			},
			content: {
				text: function(event, api) {
					aux=event;
					$.ajax({
                        url: '/staticvideo/gdrive/'+Math.random()+'/?width=550' // Use href attribute as URL
                    })
                    .then(function(content) {
                        // Set the tooltip content upon successful retrieval
						 
                        api.set('content.text', content);
						
                    }, function(xhr, status, error) {
                        // Upon failure... set the tooltip content to error
                        api.set('content.text', status + ': ' + error);
                    });
        
                    return 'Loading...'; // Set some initial text
                }
			},
			position: {
             target: 'mouse', // Use the mouse position as the position origin
             adjust: {
                 // Don't adjust continuously the mouse, just use initial position
                 mouse: false
             } 
			}
			
		});
	
	
	$(".eventLayer").each(function(){
		
		$(this).bind("click",function (){
			$(this).hasClass('selected')?$(this).removeClass('selected'):$(this).addClass('selected');
			$(this).trigger('cssClassChanged');
		});
		
		$(this).bind("cssClassChanged", function(){
			if(	
				($(this).hasClass('selected') && !$(this).parent().parent().find(".layerEvent").is(":visible")) ||
				(!$(this).hasClass('selected') && $(this).parent().parent().find(".layerEvent").is(":visible"))
			)
				if(!$(this).hasClass("home"))
					$(this).parent().parent().find(".layerEvent").animate(
						{
							right: 0, 
							top:0,
							opacity: 1,
							width: 'toggle'
						},350
					);
				else
					$(this).parent().parent().find(".layerEvent").animate(
						{
							left: 0, 
							top:0,
							opacity: 1,
							height:"100%",
							width: 'toggle'
						},350,(function(s){
							return function(){
								if(s.hasClass("selected"))
									$(this).parent().find(":first-child").addClass("blur");
								else
									$(this).parent().find(":first-child").removeClass("blur");
							};
							

							

						} )($(this)) );				
			
		});

	});
	
	$(".actionLayer").each(function(){
		
		$(this).bind("click",function (){
			$(this).hasClass('selected')?$(this).removeClass('selected'):$(this).addClass('selected');
			$(this).trigger('cssClassChanged');
		});
		
		$(this).bind("cssClassChanged", function(){

			if(	($(this).hasClass('selected') && !$(this).parent().parent().find(".layerAction").is(":visible")) ||
				(!$(this).hasClass('selected') && $(this).parent().parent().find(".layerAction").is(":visible"))
			)
			$(this).parent().parent().find(".layerAction").animate({
					right: 0, 
					top:0,
					opacity: 0.75,
					height:'100%',
					width: 'toggle'
				},350
			);
			
		});

	});
	

	
	$(".eventLayerAll").bind("click",function(){
			
			if($(this).hasClass('selected'))
				$(".eventLayer").each(function(){$(this).removeClass('selected'),$(this).trigger("cssClassChanged") }),
				$(this).removeClass('selected')
			else
				$(".eventLayer").each(function(){$(this).addClass('selected'),$(this).trigger("cssClassChanged")}),
				$(this).addClass('selected')
			
	});
	
	
	$(".actionLayerAll").bind("click",function(){
			if($(this).hasClass('selected'))
				$(".actionLayer").each(function(){$(this).removeClass('selected'),$(this).trigger("cssClassChanged") }),
				$(this).removeClass('selected')
			else
				$(".actionLayer").each(function(){$(this).addClass('selected'),$(this).trigger("cssClassChanged")}),
				$(this).addClass('selected')
	});
	
	
});