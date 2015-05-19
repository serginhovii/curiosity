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
$(document).ready(function(){
	
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

	


	/*
	*
	* Interactions web page
	*/
	if( $(".interactionsMainContainer").size()>0 ){
		
		$(".slidebar").slider({orientation: "vertical",
      range: "min"});

		$(".timelineContainer > a").bind("click",function(){
			
			if($(this).hasClass('show'))
				$(this).parents(".itemInteraction").trigger("scaling",["hide",$(this).attr("number")]),
				$(this).removeClass('show')
			else
				$(this).parents(".itemInteraction").trigger("scaling",["show",$(this).attr("number")]),
				$(this).addClass('show')
		});

		$(".itemInteraction").bind("scaling",function(evt, type ,number){
			$("img[number='"+(number-1)+"']").addClass("show");
			$("img[number='"+number+"']").addClass("show");
			if(type=="show"){
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


			}else {

				$("img[number='"+(number-1)+"']").removeClass("bounceV");
				$("img[number='"+(number-1)+"']").removeClass("scaleEffect");
				$("img[number='"+(number-1)+"']").removeClass("backgroundReset");	

				$("img[number='"+number+"']").removeClass("bounceV");
				$("img[number='"+number+"']").removeClass("scaleEffect");
				$("img[number='"+number+"']").removeClass("backgroundReset");
				setTimeout(
					(function(s){

					return function (){
						s.find("img[number='"+(number-1)+"']").removeClass("show");
						s.find("img[number='"+number+"']").removeClass("show");

						blurBelow(s);
					};

				})($(this))
				,500);
			}
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
                        url: "/video/"+$(event.target).parent().attr("int")+"/500/"+Math.random() 
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