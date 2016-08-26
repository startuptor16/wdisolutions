$(document).ready(function(){
	$('#text').on('input',function(){
		$('#output').text($(this).val());
	});
});