$(document).ready(function(){
	//flag variable to prevent hide and show from happening at the same time
	var animating = false;
	//hide content when document loads
	$('#toggled-content').hide();

	//start flashing
	$('#start-spin').click(function(){
		$('#message').addClass('animated flash infinite');
	})

	//stop flashing
	$('#stop-spin').click(function(){
		$('#message').removeClass('animated flash infinite');
	})

	//hide content
	$('#hide-content').click(function(){
		if(animating === false && !($('#toggled-content').hasClass('fadeOut')))
		{	
			animating = true;
			$('#toggled-content').removeClass('fadeInLeft');
			$('#toggled-content').addClass('fadeOut');

			//wait until animation finishes (1s)
			setTimeout(function(){
				animating = false;
				$('#toggled-content').hide();
			},1000);
		}
	})

	//show content
	$('#show-content').click(function(){
		if(animating === false && !($('#toggled-content').hasClass('fadeInLeft')))
		{	
			animating = true;
			$('#toggled-content').removeClass('fadeOut');
			$('#toggled-content').show();
			$('#toggled-content').addClass('fadeInLeft');
			//can also write it like this:
			// $('#toggled-content').removeClass('fadeOut').show().addClass('fadeInLeft');

			//wait until animation finishes (1s)
			setTimeout(function(){
				animating = false;
			},1000);
		}
	})
})