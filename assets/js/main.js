$(document).ready(function () {

    $('.main_slieda_ttstmonials').slick({
        autoplay: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        centerPadding: '0',
        centerMode: false,
        dots: false,
        arrows: true,
        infinite: true,
        speed: 1500,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                }
            }
        ]
    });


    // /*---------LIGHT-BOX js-----------*/
    // function lightBoxImages() {
    //     var selectorG = '.icon_link';
    //     if ($(selectorG).length) {
    //         var instanceG = $(selectorG).imageLightbox({
    //             quitOnDocClick: false,
    //             button: true,
    //             activity: true,
    //             overlay: true,
    //             arrows: true,
    //             preloadNext: true,
    //         });
    //     }
    // }
    // lightBoxImages();
    // //======= pop up===== //
    // function videoPopup() {
    //     if ($('.popup-youtube').length) {
    //         $('.popup-youtube').magnificPopup({
    //             type: 'iframe',
    //             gallery: {
    //                 enabled: true
    //             }
    //         });
    //     }
    // }
    // videoPopup();
    
     $('.banner_slider').slick({
        speed: 1000,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        centerPadding: '0',
        centerMode: false,
        dots: false,
        arrows: true,
        infinite: true,
      });
      
    $(window).scroll(function () {
        if ($(window).scrollTop() > 70) {
            $(".up_icon").addClass("up_iconFixd");
            $("#FixedScrol").addClass("headerFixed");
        } else {
            $("#FixedScrol").removeClass("headerFixed");
            $(".up_icon").removeClass("up_iconFixd");
        }
    });
    /*---------LIGHT-BOX js-----------*/
	function lightBoxImages() {
		var selectorG = '.icon_link';
		if ($(selectorG).length) {
			var instanceG = $(selectorG).imageLightbox({
				quitOnDocClick: false
				, button: true
				, activity: true
				, overlay: true
				, arrows: true
				, preloadNext: true
			, });
		}
	}
	lightBoxImages();

     // counting ja //
     jQuery(document).ready(function($) {
        $('.counting').counterUp({
            delay: 10,
            time: 1000
        });
    });


}); 
 
/* =============WOW JS==========*/
// new WOW().init();
