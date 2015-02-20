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


    var totWidth=0;
    var positions = new Array();

    $('#slides .slide').each(function(i){
        /* Loop through all the slides and store their accumulative widths in totWidth */
        positions[i]= totWidth;
        totWidth += $(this).width();

        /* The positions array contains each slide's commulutative offset from the left part of the container */

        if(!$(this).width())
        {
            alert("Please, fill in width & height for all your images!");
            return false;
        }
    });

    $('#slides').width(totWidth);

    /* Change the cotnainer div's width to the exact width of all the slides combined */

    $('#galmenu ul li a').click(function(e){

        /* On a thumbnail click */
        $('li.menuItem').removeClass('act').addClass('inact');
        $(this).parent().addClass('act');

        var pos = $(this).parent().prevAll('.menuItem').length;

        $('#slides').stop().animate({marginLeft:-positions[pos]+'px'},450);
        /* Start the sliding animation */

        e.preventDefault();
        /* Prevent the default action of the link */
    });

    $('#galmenu ul li.menuItem:first').addClass('act').siblings().addClass('inact');
    /* On page load, mark the first thumbnail as active */
});