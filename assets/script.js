$(document).ready(function(){

  $(".menu-item").hover(function(){
		$(this).css (
			"background", "#BADA55"
		)
	  }, function(){ 
		$(this).css (
			"background", "#77bf00"
		)
  });
/* 
    $(".menu-item").click(function(){
		alert( "Handler for .click() called." );
		$(this).animate({boxShadow: '0 0 30px #44f'});
	  });
 */
  $(window).scroll( function(){
			var scrollY = $(window).scrollTop();
			//alert(scrollY);
			if(scrollY > 520){
				//alert('!');
				$( "#nav" ).fadeIn();
			}
			
			else{
				//alert('!');
				$( "#nav" ).fadeOut();
			}
		  }
  )
$(".image-info-container").hover(function(){ //image-info-container
		$(this).hide();
		return false;
	  }, function(){ 
		$(this).show();
		return false;
  });
  
  
  $(".icon").hover(function(){
		$(this).css (
			"margin-bottom", "0px"
		)
	  }, function(){ 
		$(this).css (
			"margin-bottom", "5px"
		)
  });
});