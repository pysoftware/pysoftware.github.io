$('[data-toggle="popover"]').popover().on('click', function (e) {
		// $(this).toggleClass('b');
		if ($(this).hasClass('word')) {
			$(this).toggleClass('yellow');
		} else if ($(this).hasClass('expression')) {
			$(this).toggleClass('green');
		}
	$('[data-toggle="popover"]').each(function (i,item) {
		 //compare each element with the current element 
		if(item != e.target){
			$(item).popover("hide");
			if ($(item).hasClass('green')) {
				$(item).removeClass('green')
			}
			if ($(item).hasClass('yellow')) {
				$(item).removeClass('yellow')
			}
			// $(item).removeClass('b')
		}
	});
});
$("html").click(function(e) {
   	if($(e.target).closest('[data-toggle="popover"], .popover').length==0){
   		$('[data-toggle="popover"]').popover('hide');
   		if ($('[data-toggle="popover"]').hasClass('green')) {
			$('[data-toggle="popover"]').removeClass('green')
		}
		if ($('[data-toggle="popover"]').hasClass('yellow')) {
			$('[data-toggle="popover"]').removeClass('yellow')
		}
   	}
});

