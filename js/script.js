$(function() {
	$('.newContact').addClass('d-none');
	$('#number-list').addClass('d-none');

	$('.contact')[0].classList.add('active');
	$('.addNewContact').on('click',function(e) {
		e.preventDefault();
		$('.contact').removeClass('active');
		$('.withContact').addClass('d-none');
		$('.newContact').removeClass('d-none');
		$('.chatBox').addClass('d-none');
		
	})
	$('.contact').on('click',function(e) {
		$('.contact').removeClass('active');
		$('.chatBox').removeClass('d-none');
		$(this).addClass('active');
		e.preventDefault();
		$('.newContact').addClass('d-none');
		$('.withContact').removeClass('d-none');
		$('#number-selected').html('');
		$('#enterNumber').css({
			"margin-left" : 0
		})
	})

	$('#number-list').on('click','li',function() {
		let val 	= $(this).data('value');
		html 		= `<span class="ballon">
							${val}
							<a href="#" class="cancel"><i class="fas fa-fw fa-times"></i></a>
						</span>`;

		$('#number-selected').append(html);

		$('#number-list').addClass('d-none');
		let marginLeft 	= $('#number-selected').width();
		$('#enterNumber').val('');
		$('#enterNumber').css({
			"margin-left" : marginLeft + 40
		})
	})

	$('#number-selected').on('click','.cancel',function(e) {
		e.preventDefault();
		$(this).parents('.ballon')[0].outerHTML = '';
		if ($('#number-selected').html() == '') {
			$('#enterNumber').css({
				"margin-left" : 0
			})
		}
	})

	$('#enterNumber').on('keyup',function() {
		let data 		= [
			{nama : '', no_telp : '081577228822'},
			{nama : 'Tubagus', no_telp : '081199887766'},
			{nama : 'Bambang', no_telp : '081212345678'},
			{nama : 'Sutejo', no_telp : '081122334455'},
			{nama : 'Teggar', no_telp : '081287654321'}
		]
		let html 		= ``;
		for (var i = 0; i < data.length; i++) {
			html 		+= `<li class="d-block text-dark" data-value="${data[i].no_telp}">
								${data[i].no_telp}
								<small class="d-block">${data[i].nama}</small>
							</li>`;
		}
		if (data.length == 0) {
			let html 	= '<span class="text-center">Data Tidak Ditemukan</span>';
		}
		$('#number-list ul').html(html);
		$('#number-list').removeClass('d-none');
		
	})
})