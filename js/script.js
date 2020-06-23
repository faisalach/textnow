$(function() {
	$('.newContact').addClass('d-none');
	$('.contact')[0].classList.add('active');
	$('.addNewContact').on('click',function(e) {
		e.preventDefault();
		$('.contact').removeClass('active');
		$('.withContact').addClass('d-none');
		$('.newContact').removeClass('d-none');
	})
	$('.contact').on('click',function(e) {
		$('.contact').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
		$('.newContact').addClass('d-none');
		$('.withContact').removeClass('d-none');
	})
})