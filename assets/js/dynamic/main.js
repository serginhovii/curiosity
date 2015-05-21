var aux;
var blurBelow=function(obj){
	//aux=obj;
	if(obj.find("img.show").eq(-1).length>0){
		obj.find("img.show").eq(-1).removeClass("blurBelow");
	}
	if(obj.find("img.show").eq(-2).length>0){
		obj.find("img.show").eq(-2).removeClass("blurBelow");
		obj.find("img.show").eq(-2).addClass("blurBelow");
	}
	
}

function split( val ) {
  return val.split( /\s+/ );
}
function extractLast( term ) {
  return split( term ).pop();
}
$(document).ready(function(){
	var availableTags = [
        '03 July',
'14-18 La Grande Guerre ',
'Adam Hartwig',
'Akaru',
'Animation',
'appStyle',
'Architecture',
'Art-Illustration',
'autoplay',
'backgroundVideo',
'Basilico Interactive',
'bigBackgroundImages',
'Blancpain Ocean Commitment',
'BLITZ Agency',
'BLITZagency',
'Blogging',
'bounce',
'bounceIn',
'bounceInDown',
'bounceInLeft',
'bounceInRight',
'bounceInUp',
'bounceOut',
'bounceOutDown',
'bounceOutLeft',
'bounceOutRight',
'bounceOutUp',
'bow',
'brushes',
'Business-Corporate',
'Cadence & Cause',
'Cellules',
'center',
'clean',
'color',
'colorful',
'Cosmopolitan Diva',
'creaktif',
'Creative Edge Parties',
'css3',
'cssFramework',
'Culture-Education',
'cursor',
'decolor',
'deformation',
'DEGO Interactive',
'DesignAgencies',
'drawIn',
'drawOut',
'E-commerce',
'enlarge',
'Events',
'Extr',
'fadeIn',
'fadeInDown',
'fadeInLeft',
'fadeInRight',
'fadeInUp',
'fadeOut',
'fadeOutDown',
'fadeOutLeft',
'fadeOutRight',
'fadeOutUp',
'Fashion',
'Film-TV',
'Finn Lough',
'flatDesign',
'flexible',
'flip',
'flipInX',
'flipInY',
'flipOutX',
'flipOutY',
'focus',
'fold',
'Food-Drink',
'form',
'fullscreen',
'Future Terminal 1: Lyon Airports',
'Games-Etertainment',
'grid',
'handDrawn',
'highlight',
'hinge',
'horizonalLayout',
'Hotel-Restaurant',
'html5',
'HungryBoys',
'icons',
'illustration',
'infinite scroll',
'Institutions',
'Interactive Catalogue\, Bonobo',
'jello',
'Kippis Design Shop',
'Kitchen Prague',
'layer',
'LightSpeedIn',
'LightSpeedOut',
'loader',
'Lois Jeans 50th Anniversary',
'M1 Design',
'M1Design',
'matrixText',
'Melanie Daveid',
'melaniedaveid',
'michelleforbush',
'minimal',
'Mobile-Apps',
'Music-Sound',
'navigation',
'Nectar',
'Oleg Chulakov Studio',
'Other',
'parallax',
'photography',
'Promotional',
'pulse',
'Record Record',
'reduce',
'Reflet Communication',
'reload',
'responsive',
'retro',
'Riello Sistemi',
'Riot Games: Thunderdome',
'rollIn',
'rollOut',
'rotate',
'rotateIn',
'rotateInDownLeft',
'rotateInDownRight',
'rotateInUpLeft',
'rotateInUpRight',
'RotateOut',
'RotateOutDownLeft',
'RotateOutDownRight',
'RotateOutUpLeft',
'RotateOutUpRight',
'rubberBand',
'SBS',
'scroll',
'shake',
'singlePage',
'SlideInDown',
'SlideInLeft',
'SlideInRight',
'SlideInUp',
'SlideOutDown',
'SlideOutLeft',
'SlideOutRight',
'SlideOutUp',
'social media',
'splitedScroll',
'Sports',
'stickyNavy',
'Super Top Secret',
'svg',
'swing',
'tada',
'Technology',
'texture',
'The Boat',
'trend',
'typography',
'unfold',
'unusualNavigation',
'verbalvisu',
'Video',
'Web-Interactive',
'webFonts',
'webGl',
'webSocket',
'Werkstatt',
'wind',
'wobble',
'Words Can Save',
'ZoomIn',
'ZoomInDown',
'ZoomInLeft',
'ZoomInRight',
'ZoomInUp',
'ZoomOut',
'ZoomOutDown',
'ZoomOutLeft',
'ZoomOutRight',
'ZoomOutUp'
      ];

	$(".searchForm").find("input").bind("focus",function(){
		if($(this).val() == 'Search'){
			$(this).val('');
			$(this).addClass("searching");
		}
		else{
			$(this).select();
		}	
	});
	$(".searchForm").find("input").bind("blur",function(){
		if($(this).val() == ''){
			$(this).val('Search');
			$(this).removeClass("searching");
		}
	});

	$(".searchForm").find("a").bind("click",function(evt){
		evt.preventDefault();
		if($(".searchForm").find("input").val()!="Search"){
			$(".searchForm").find("form").trigger("submit");
		}
		return false;
	});
	$(".searchForm").find("form").bind("keypress",function(evt){
		if(evt.keyCode == 13) {
			if($(".searchForm").find("input").val().trim()==''){
		      evt.preventDefault();
		      return false;
		  	}				
	    }

	});


	      $( "input" )
      // don't navigate away from the field on tab when selecting an item
      .bind( "keydown", function( event ) {
        if ( event.keyCode === $.ui.keyCode.TAB &&
            $( this ).autocomplete( "instance" ).menu.active ) {
          event.preventDefault();
        }
      })
      .autocomplete({
        minLength: 3,
        source: function( request, response ) {
          // delegate back to autocomplete, but extract the last term
          response( $.ui.autocomplete.filter(
            availableTags, extractLast( request.term ) ) );
        },
        focus: function() {
          // prevent value inserted on focus
          return false;
        },
        select: function( event, ui ) {
          var terms = split( this.value );
          // remove the current input
          terms.pop();
          // add the selected item
          terms.push( ui.item.value );
          // add placeholder to get the comma-and-space at the end
          terms.push( "" );
          this.value = terms.join( " " );
          return false;
        }
      });

	


	/*
	*
	* Interactions web page
	*/
	if( $(".interactionsMainContainer").size()>0 && !$(".interactionsMainContainer").hasClass("chocolat")){
		
		$(".slidebar").slider({orientation: "vertical",
      range: "min"});

		$(".timelineContainer > a").bind("click",function(){
			var number=parseInt($(this).attr("number"));
			if($(this).hasClass('show')){
				
				$(this).parents(".itemInteraction").trigger("scaling",["hide",$(this).attr("number")]);
				$(this).parent().find("[number]").each(function(){
					if(parseInt($(this).attr("number"))> number)
						$(this).removeClass('show');
					
				});
				
			} 
			else{
				$(this).parents(".itemInteraction").trigger("scaling",["show",$(this).attr("number")]);
				$(this).addClass('show');
				$(this).parent().find("[number]").each(function(){
					if(parseInt($(this).attr("number"))< number)
						$(this).addClass('show');
					
				});
				
			}
		});

		$(".itemInteraction").bind("scaling",function(evt, type ,number){
			$(this).find("img[number='"+(number-1)+"']").addClass("show");
			$(this).find("img[number='"+number+"']").addClass("show");
			//if(type=="show"){
				/*
				setTimeout(
						(function(s){
							return function(){
								s.find("img[number='"+(number-1)+"']").addClass("scaleEffect");
								s.find("img[number='"+number+"']").addClass("scaleEffect");
							};
						})($(this))	
						,100);
				setTimeout(
						(function(s){
							return function(){
								s.find("img[number='"+(number-1)+"']").addClass("bounceV");
								s.find("img[number='"+(number-1)+"']").addClass("backgroundReset");	

								s.find("img[number='"+number+"']").addClass("bounceV");
								s.find("img[number='"+number+"']").addClass("backgroundReset");


								blurBelow(s);
							};
						})($(this))	
						,400);
				
				*/

				for(i=number; i>=0;i--){
					var imgAux=$(this).find("img[number='"+(i)+"']");
					if(!imgAux.hasClass("show"))
						imgAux.addClass("show");
				}

				$(this).find("img[number]").each(function(){
					var mycount=parseInt($(this).attr("number"));
					if(mycount>number){
						$(this).removeClass("show");

					}
				});


			//}
			/*else {

				$(this).find("img[number='"+(number-1)+"']").removeClass("bounceV");
				$(this).find("img[number='"+(number-1)+"']").removeClass("scaleEffect");
				$(this).find("img[number='"+(number-1)+"']").removeClass("backgroundReset");	

				$(this).find("img[number='"+number+"']").removeClass("bounceV");
				$(this).find("img[number='"+number+"']").removeClass("scaleEffect");
				$(this).find("img[number='"+number+"']").removeClass("backgroundReset");
				setTimeout(
					(function(s){

					return function (){
						s.find("img[number='"+(number-1)+"']").removeClass("show");
						s.find("img[number='"+number+"']").removeClass("show");

						blurBelow(s);
					};

				})($(this))
				,500);

				$(this).find("img[number]").each(function(){
					var mycount=parseInt($(this).attr("number"));
					if(mycount>=number){
						$(this).removeClass("show");

					}
				});
				

			}*/
		});

	
		$('.imgContItemInteraction').qtip({
			show: 'click',
			hide: 'unfocus',
			metadata: {
				type: 'html5', // Use HTML5 data-* attributes
				name: 'qtipopts' // Grab the metadata from the data-qtipOpts HTML5 attribute
			},
			content: {
				text: function(event, api) {
					aux=event.target;
					$.ajax({
                        url: "/vanilla/video/"+$(event.target).parent().attr("int")+"/500/"+Math.random() 
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
		
	}
	
});