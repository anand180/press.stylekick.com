$(document).ready(function() {
	$('.screen1').on('mouseenter', function() {
		$('.screen-overlay1').show();
		$('#dl1').show();
	});
	$('.screen1').on('mouseleave', function() {
		$('.screen-overlay1').hide();
		$('#dl1').hide();
	});

	$('.screen2').on('mouseenter', function() {
		$('.screen-overlay2').show();
		$('#dl2').show();

	});
	$('.screen2').on('mouseleave', function() {
		$('.screen-overlay2').hide();
		$('#dl2').hide();

	});

	$('.screen3').on('mouseenter', function() {
		$('.screen-overlay3').show();
		$('#dl3').show();
	});
	$('.screen3').on('mouseleave', function() {
		$('.screen-overlay3').hide();
		$('#dl3').hide();
	});
})

