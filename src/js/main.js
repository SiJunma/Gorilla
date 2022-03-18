$( document ).ready(function() {
  
  //SLIDERS
  if(document.querySelector('.reviews__slider')) {
    let reviewSlider = new Splide( '.reviews__slider', {
      type: 'slide',
      pagination: true,
      arrows: false,
      perPage: 1,
      perMove: 1,
    });

    reviewSlider.mount();
  }

  //BURGER BTN
  function burgerBtn(btn) {
    let menu = $('#navigationMenu');

    $(btn).on('click', function(evt) {
      evt.preventDefault();
      menu.toggleClass('opened');
      $(btn).toggleClass('opened');
    })
  }
  burgerBtn('#burgerBtn');

  //ACCORDEON
  $(".custom-accordion__btn").on("click", function(e) {

    e.preventDefault();
    var $this = $(this);

    if (!$this.hasClass("active")) {
        $(".custom-accordion__panel").slideUp(400);
        $(".custom-accordion__btn").removeClass("active");
    }

    $this.toggleClass("active");
    $this.next().slideToggle();
      
  });

  function faqBtnMore(btn) {
    $(btn).on('click', function(evt) {
      evt.preventDefault();
      $(this).parent().find('.hidden').removeClass('hidden');
      $(this).fadeOut();
    });
  };
  faqBtnMore('.js-btn-more');

  
});