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
	
	/*
	*
	* Interactions web page
	*/
	if( $(".interactionsMainContainer").size()>0 ){
		

		$(".textContItemInteraction > a").bind("click",function(){
			
			if($(this).hasClass('show'))
				$(this).parents(".itemInteraction").trigger("scaling",["hide",$(this).attr("number")]),
				$(this).removeClass('show')
			else
				$(this).parents(".itemInteraction").trigger("scaling",["show",$(this).attr("number")]),
				$(this).addClass('show')
		});

		$(".itemInteraction").bind("scaling",function(evt, type ,number){
			$("img[number='"+number+"']").addClass("show");
			
			if(type=="show"){
				setTimeout(
						(function(s){
							return function(){
								s.find("img[number='"+number+"']").addClass("scaleEffect");
							};
						})($(this))	
						,100);
				setTimeout(
						(function(s){
							return function(){
								s.find("img[number='"+number+"']").addClass("bounceV");
								s.find("img[number='"+number+"']").addClass("backgroundReset");
								blurBelow(s);
							};
						})($(this))	
						,400);


			}else {
				$("img[number='"+number+"']").removeClass("bounceV");
				$("img[number='"+number+"']").removeClass("scaleEffect");
				$("img[number='"+number+"']").removeClass("backgroundReset");
				setTimeout(
					(function(s){

					return function (){
						s.find("img[number='"+number+"']").removeClass("show");
						blurBelow(s);
					};

				})($(this))
				,500);
			}
		});
	}
	
});