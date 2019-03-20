// $(function() {
//   var elementTop = $('#trigger').offset().top;
//   var elementBottom = $('#trigger').offset().left;
//   $('a#trigger').mousedown(function(e) {
//     $('div#pop-up').show();
//     $("div#pop-up").css('top', elementTop - 40).css('left', elementBottom - 20);
//     console.log($('#trigger').offset())
//   });
//   $("html").click(function(e) {
//    if($(e.target).closest("#pop-up, #trigger").length==0)
//     $("#pop-up").css("display","none");
//  });
// });
// $('[data-toggle="popover"]').popover().on('click', function (e) {
//     // $(this).toggleClass('b');
//     if ($(this).hasClass('word')) {
//       $(this).toggleClass('yellow');
//     } else if ($(this).hasClass('expression')) {
//       $(this).toggleClass('green');
//     }
//   $('[data-toggle="popover"]').each(function (i,item) {
//      //compare each element with the current element 
//     if(item != e.target){
//       $(item).popover("hide");
//       if ($(item).hasClass('green')) {
//         $(item).removeClass('green')
//       }
//       if ($(item).hasClass('yellow')) {
//         $(item).removeClass('yellow')
//       }
//       // $(item).removeClass('b')
//     }
//   });
// });
// $("html").click(function(e) {
//     if($(e.target).closest('[data-toggle="popover"], .popover').length==0){
//       $('[data-toggle="popover"]').popover('hide');
//       if ($('[data-toggle="popover"]').hasClass('green')) {
//       $('[data-toggle="popover"]').removeClass('green')
//     }
//     if ($('[data-toggle="popover"]').hasClass('yellow')) {
//       $('[data-toggle="popover"]').removeClass('yellow')
//     }
//     }
// });
$('.expressionn').mouseover(function() {
  $(this).popover('show');
});
$('.expressionn').mouseout(function() {
  $(this).popover('hide');
});
$('.wordd').mouseover(function() {
  $(this).popover('show');
});
$('.wordd').mouseout(function() {
  $(this).popover('hide');
});
$('.rue').mousedown(function(event) {
	$('.rus').css("border","0 solid black");
	$('.text').css("display","block");
	$('.rus,.eng').css('width', '100%');
});
$('.tc').mousedown(function(event) {
	$('.rus').css("border-left","1px solid black");
	$('.text').css("display","flex");
});

