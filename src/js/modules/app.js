/*Адаптивное меню*/
var _adaptiveMenu = function(){
	if($(".nav").hasClass('show__nav__header')){
	$(".nav").removeClass('show__nav__header');
		}else{
	$(".nav").addClass('show__nav__header');
	}
};

$('.js-show-date').click(function(event) {
  event.preventDefault();
  $(document.body).toggleClass('show');
  $('.hidden-section').toggle('slow', function(){
    if($(document.body).hasClass('show')){
      $('.js-show-date').text('Скрыть');
    }else{
      $(document.body).removeClass('show');
      $('.js-show-date').text('Подробнее');
    }
  });
});

$(".mob__nav").on('click', _adaptiveMenu);