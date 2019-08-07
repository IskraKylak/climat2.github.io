
$(function () {

	$('[data-fancybox="gallery"]').fancybox({
		// Options will go here
	});

	// посмотреть каталог

	$('.orange-menu__tab').click(function() {
		$('.orange-menu__icon_tab').toggleClass('orange-menu__icon_tab-open');
		$('.orange-menu').toggleClass('open-window');
		$('.orange-menu__item').toggleClass('d-flex');
		$('.backgrond-window_first').toggleClass('d-block');
	});

	// меню-бургер

	$('.burger-menu').click(function() {
		$('.burger-menu__icon').toggleClass('burger-menu__icon_close');
		$('.mobile-burger-content').toggleClass('open-window');
		$('.content-header-background').toggleClass('open-window');
		$('.top-header-background').toggleClass('open-window');
		$('.backgrond-window_second').toggleClass('d-block');
	});

		$('.filter-btn-show').click(function() {
          $(".catalog-filter").fadeIn(500);
          $('.filter-btn-show').fadeOut(500);
	});
	
	// if($(window).scrollTop() > 0) {
 //        $(".navigation-wrap").addClass("navigation-background");
 //    }

	// $(window).on("scroll", function() {
	//     if($(window).scrollTop() > 0) {
	//         $(".navigation-wrap").addClass("navigation-background");
	//     } else {
	//         //remove the background property so it comes transparent again (defined in your css)
	//        $(".navigation-wrap").removeClass("navigation-background");
	//     }
	// });

	//прелоадер
	// setTimeout(function(){
		
	// 	var $preloader = $('#page-preloader'),
	// 		$spinner =$preloader.find('.loader');
	// 	$spinner.fadeOut();
	// 	$preloader.delay(350).fadeOut('slow');
	// },1500);	

	// $(".link-scroll").click(function () {
	// 	elementClick = $(this).attr("href");
	// 	destination = $(elementClick).offset().top;
	// 	$("body,html").animate({scrollTop: destination }, 800);
	// });

	// $('.slider-produce').slick({
	//   slidesToShow: 3,
	//   slidesToScroll: 1,
	//   autoplay: true,
	//   arrows: true,
	//   fade: false,
	//   prevArrow: '<img src="img/Arrow-left.png" alt="left" class="prev-arrow">',
 //      nextArrow: '<img src="img/Arrow-right.png" alt="right" class="next-arrow">',
 //      responsive: [
	//     {
	//       breakpoint: 950,
	//       settings: {
	//         slidesToShow: 2,
	//       }
	//     },
	//     {
	//       breakpoint: 600,
	//       settings: {
	//         centerMode: true,
	//         centerPadding: '0px',
	//         slidesToShow: 1,
	//         mobileFirst:true,//add this one
	//       }
	//     }
	//   ]
	// });

	$('.slider-reviews').slick({
	  slidesToShow: 2,
	  slidesToScroll: 1,
	  autoplay: true,
	  arrows: true,
	  dots: true,
	  fade: false,
	  arrows : false,
	  responsive: [
	    {
	      breakpoint: 950,
	      settings: {
	        slidesToShow: 1,
	      }
	    }
	  ]
	});

	$('#box-modal-busket').arcticmodal();

	$('.footer-btn-js-click').click(function(){
    	$('#exampleModal-buy').arcticmodal();
    });

	//Слайдер
	$('.slider-main').slick({
		dots: true,
		arrows : false,
  		infinite: true,
  		speed: 500,
	});

	$('.sertificat-list').slick({
		dots: false,
		arrows : true,
  		infinite: true,
  		speed: 500,
  		slidesToShow: 4,
	  	slidesToScroll: 1,
	  	responsive: [
	    {
	      breakpoint: 950,
	      settings: {
	        slidesToShow: 3,
	      }
	    },
	    {
	      breakpoint: 750,
	      settings: {
	      	centerMode: true,
	        centerPadding: '0px',
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 550,
	      settings: {
	      	centerMode: true,
	        centerPadding: '0px',
	        slidesToShow: 1,
	      }
	    }
	  ]
	});

	$('.slider-product-for').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.slider-product-nav'
	});
	$('.slider-product-nav').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.slider-product-for',
	  centerMode: false,
	  dots: false,
	  focusOnSelect: true
	});

	$('.slider-other').slick({
		dots: false,
		arrows : true,
  		infinite: true,
  		speed: 500,
  		slidesToShow: 3,
	  	slidesToScroll: 1,
	  	responsive: [
	    {
	      breakpoint: 950,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 750,
	      settings: {
	      	centerMode: true,
	      	arrows : false,
	        centerPadding: '0px',
	        slidesToShow: 2,
	      }
	    }
	  ]
	 });

	// $('.menu-open').click(function() {
	// 	$('.menu-collapse').toggleClass('d-none');
	// 	$('.menu-collapse').toggleClass('menu-opened');
	// });

	// $('.menu-header__item').click(function() {
	// 	if ( $(".menu-collapse").hasClass("menu-opened") ) {
	// 		$('.menu-collapse').toggleClass('d-none');
	// 		$('.menu-collapse').toggleClass('menu-opened');
	// 	}
	// });

	// табы
	$('#tabs-product').easytabs();
	
	$("#fl_inp").change(function(){
         var filename = $(this).val().replace(/.*\\/, "");
         $("#fl_nm").html(filename);
    });
});




