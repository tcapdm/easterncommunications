var map;
var $ = jQuery.noConflict();

// ellipses
$(window).on('load', function() {
	ellipsisTextElement();
	simulateAClick();
	if(window.location.pathname == '/our-service-areas')
	{
		initMap();
	}


});

$(document).on('ready', function(){
	// for career page select option
	$('.select-option-container').siblings('.options').css('display', 'none');

	$('select.dept-select').on('change', function(event){
		if($(this).val() != '')
		{
			$('.select-option-container').siblings('.options:not(#'+$(this).val()+')').css('display', 'none');
			$('.select-option-container').siblings('.options#'+$(this).val()).css('display', 'block');
		}
		else
		{
			$('.select-option-container').siblings('.options').css('display', 'none');
		}
	});

	$('.toggleNav').on('click', function(){
		$('ul.tabNav').slideToggle();
	});

	/* @general
	========================*/
	($('.news-list-page').length>0)? document.title = "News List | Eastern Communications" : '';
	($('.news-page').length>0)? document.title = "News | Eastern Communications" : '';
	($('.products-list-page').length>0)? document.title = "Products List | Eastern Communications" : '';
	($('.products-cat-page').length>0)? document.title = "Products Category | Eastern Communications" : '';
	($('.products-page').length>0)? document.title = "Products | Eastern Communications" : '';
	($('.events-list-page').length>0)? document.title = "Events List | Eastern Communications" : '';
	($('.events-page').length>0)? document.title = "Events | Eastern Communications" : '';

	// header nav
	$('#menu').on('click',function(e){
		e.stopPropagation();
		e.preventDefault();
		$('body').toggleClass('menu-on');
	});
	$('.menu-panel').on('click',function(e){
		e.stopPropagation();
	});
	$('body').on('click',function(){
		$(this).removeClass('menu-on');
	});
	if(!checkIsMobile()) {
	$('.social-media li, .fa-share-alt').hover(function(){
		$('.header_share').toggleClass('header_share-on');
	});
	}

	/* @products category page
	========================*/
	$('div.carousel section.responsive >  div:nth-child(2n)').after('<div style="clear:both;"></div>');

	/* @contact
	========================*/
	//for tab
	$('.tabNav li a[data-target]').click(function() {
		var dataLink = $(this).attr('data-target');
		var toKeep = 'div[id="'+dataLink+'"]';
		$(this).closest('ul').find('a').removeClass('active-a');
		$(this).addClass('active-a');
		$(this).parent().addClass('active').siblings().removeClass('active');
		$(toKeep).fadeIn(200);
		// check if screen size, if toggleNav is shown it means small screen size
		// if small screen size, slide it, else display it block
		if ($('.toggleNav').css('display') == 'none') {
			$('ul.tabNav').css('display','block');
		} else {
			$(this).closest('ul').slideToggle();
		}

		$('#block-system-main').css('display','block');
		$('div#menu').css('display','block');
		var tabs = $('.tabContent div.tabPane');
		$(tabs).each(function(i, item){
			if ($(item).attr('id') != dataLink)
			{
				$(item).css('display','none');
			}
			else
			{
				$(item).css('display','block');
			}
		});
	});

	$('.contact-slide a').on('click',function(){
		$('.contact-slide ').toggleClass('activee');
	});

	/* @about page
	========================*/
	$('div.about-partners >  div:nth-child(4n)').after('<div style="clear:both;"></div>');

	// OUR SERVICE AREA PAGE
	if($('div#zn_google_map_eluidceee223b').length > 0)
    {
	    // toggle panel
	    $('.kl-contentmaps__panel-tgg').on('click', function(e) {
	        e.preventDefault();
	        $(this).toggleClass('is-toggled');
	        $(this).parent().toggleClass('is-closed');
	    });
	    // magnific-popup
	    $('.kl-contentmaps__panel-img').magnificPopup({
	        type: 'image'
	    });
	}

	//  @ News and Events
	// add clear both every 3 for
	$('ul.news-list >  li.col-sm-4:nth-child(3n)').after('<div style="clear:both;"></div>');

	// @footer scroll to top
	$(window).scroll(function(){
		if ($(this).scrollTop() > 300) {
			$('.scroll-to-top').addClass('scroll_show');
		} else {
			$('.scroll-to-top').removeClass('scroll_show');
		}
	});

	//Click event to scroll to top
	$('.scroll-to-top').click(function(){
		$('html, body').animate({scrollTop : 0}, 300);
		return false;
	});

	$('.ui-loader').hide();


	$('.footer-next-page').on('click', function(){
		$('.control#next').trigger('click')
	});

	var flag = true;
	if(checkIsMobile()) {
		$(window).on('touchend', function(event){
			if (!$(event.target).is($('.social-media li, .fa-share-alt')))
			{
				$('.header_share').removeClass('header_share-on');
				$('.fa-share-alt').css('color','#000');
				flag = true;
			} else {
				if(flag) {
					$('.header_share').addClass('header_share-on');
					$('.fa-share-alt').css('color','#ddd');
					flag = false;
				} else {
					$('.header_share').removeClass('header_share-on');
					$('.fa-share-alt').css('color','#000');
					flag = true;
				}
			}
			if (!$(event.target).is($('.contact-slide-info, .contact-slide-info p, .contact-slide a')))
			{
				$('.contact-slide').removeClass('activee');
			}
			
			if (!$(event.target).is($('#menu, #menu span, .menu-panel, .menu-panel .menu-panel_ul, .menu-panel .menu-panel_ul li, .menu-panel .menu-panel_ul li a')))
			{
				$('body').removeClass('menu-on');
			}
		});
	}
	if(!checkIsMobile()) {
		$(window).on('mouseup', function(event){
			if (!$(event.target).is($('.contact-slide-info, .contact-slide-info p, .contact-slide a')))
			{
				$('.contact-slide').removeClass('activee');
			}

			if (!$(event.target).is($('#menu, #menu span, .menu-panel, .menu-panel .menu-panel_ul, .menu-panel .menu-panel_ul li, .menu-panel .menu-panel_ul li a')))
			{
				$('body').removeClass('menu-on');
			}
		});
	}

	if (checkIsMobile()) {
		$('body').css({
			'cursor': 'pointer'
		});
	}

	$('div.carousel >  div.products-and-services:nth-child(2n)').after('<div style="clear:both;"></div>');
	// var	navh = $('.headerbar_container').height(),
	// 	wh = $(window).height(),
	// 	headerHeight = wh - navh,
	// 	slideHeight = headerHeight / 2;
	// // console.log($('.headerbar_container').height())
	$(".win").height($(window).height());

	// $('.productList .slide-item-block-half-half').height(slideHeight);
	// $('.productList .slide-item-block-whole-half').height(slideHeight);
	// $('.productList .slide-item-block-whole-full').height(headerHeight);
// if(checkIsMobile()) {
// $('.svg-confetti').css({'display': 'none'});
// }

});

// $(document).on('ready resize', function(){
// 	$('[data-slide_id]').each(function(){
// 		if($(this).find('#productExplore').length)
// 		{
// 			$(this).find(".win").height($(window).height());
// 		}
// 		else
// 		{
// 			$(this).find(".win").css({'height': '100%'});
// 		}
// 	});
// });

// $(window).resize(function(){
// 	var	wh = $(window).height();
// 	$(".win").height(wh);
// });


// detect orientation change
window.addEventListener("orientationchange", function() {
    var orientationAngle = $(window).get(0).orientation;

    $('ul.tabNav').css('display','none');
	if (checkIsMobile()) {
		if (orientationAngle == 90) {$('ul.tabNav').css('display','block'); }
	}
	else
	{
		$('ul.tabNav').css('display','block')
	}
	if (orientationAngle == 90) {$('ul.tabNav').css('display','block');}
});


// functions
function checkIsMobile(){
	var isMobile = false; //initiate as false
	// device detection
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
	    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;

		return isMobile;
}

function ellipsisTextElement() {
	if( $(".product-desc, .caption_txt, .caption_title").length )
	{
		$(".product-desc, .caption_txt, .caption_title").dotdotdot({
			ellipsis: '... ',
			wrap: 'word',
			fallbackToLetter: true,
			after: null,
			watch: false,
			height: null,
			tolerance: 0,
			callback: function(isTruncated, orgContent) {},

			lastCharacter: {
				remove: [' ', ',', ';', '.', '!', '?'],
				noEllipsis: []
			}
		});
	}

		if( $('.slide-item-block .caption p').length )
	{
		$('.slide-item-block .caption p').dotdotdot({
			ellipsis: '... ',
			wrap: 'word',
			fallbackToLetter: true,
			after: null,
			watch: false,
			height: null,
			tolerance: 0,
			callback: function(isTruncated, orgContent) {},

			lastCharacter: {
				remove: [' ', ',', ';', '.', '!', '?'],
				noEllipsis: []
			}
		});
	}

		if( $('.product-item-inner .description .text').length )
	{
		var rel_heigth = 0;
		var element_smallest = null;

		$('.product-item-inner').each(function(index,item){
			if(rel_heigth == 0)
			{
				rel_heigth = $(item).height();
				element_smallest = $(item);
			}

			if(rel_heigth > $(item).height())
			{
				rel_heigth = $(item).height();
				element_smallest = $(item);
			}
		});

		var textHeight = element_smallest.find('.description .text').height();

		$('.product-item-inner .description .text').dotdotdot({
			ellipsis: '... ',
			wrap: 'word',
			fallbackToLetter: true,
			after: null,
			watch: false,
			height: textHeight,
			tolerance: 0,
			callback: function(isTruncated, orgContent) {},

			lastCharacter: {
				remove: [' ', ',', ';', '.', '!', '?'],
				noEllipsis: []
			}
		});
	}
}


function simulateAClick()
{
	$('.product-readmore a, .section-heading-text a').on('mouseup touchend',function(event){
		console.log($(this).prop('target') , 'asda' , event.button);
		if(event.type == "mouseup")
		{
			if(event.button == 0)
			{
				if($(this).prop('target') == "_blank")
				{
					window.open($(this).prop('href'));
				}
				else
				{
					window.location.href  = ($(this).prop('href'));
				}
			}
			else if(event.button == 1)
			{
				window.open($(this).prop('href'));
			}
		}
		else if(event.type == "touchend")
		{
			if($(this).prop('target') == "_blank")
			{
				window.open($(this).prop('href'));
			}
			else
			{
				window.location.href  = ($(this).prop('href'));
			}
		}
	});
}



// Our service areas page map
function initMap() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap',
    };
    var styles = [
        {
            featureType: 'water',
            elementType: 'geometry.fill',
            stylers: [
                        { color: '#bfdcff' }
                    ]
        },{
            featureType: 'road',
            elementType: 'geometry.fill',
            stylers: [
                        { color: '#f5bb7c' }
                    ]
        }
    ];
    var customMarker = 'sites/all/themes/easterncomm/assets/img/icon/map-marker.png';

    // Display a map on the page
    map = new google.maps.Map(document.getElementById("zn_google_map_eluidceee223b"), mapOptions);
    map.setTilt(45);
    map.set('styles', styles);

    // Multiple Markers
    var markers = [
        ['Frederick Bldg, Sen. Gil J. Puyat Ave, Makati', 14.555878, 121.002698],
        ['Ground Floor PEZA Admin Building, Loakan Road, Baguio City Economic Zone, Baguio', 16.379485, 120.619571],
        ['316 Sen Gil Puyat Avenue Extension, Makati' ,14.561353, 121.018722],
        ['Araneta Square Mall, Samson Road, Bonifacio Monumento Circle Caloocan, Caloocan', 14.656762, 120.983134],
        ['Unit 203, Pacific Place Condominium, Pearl Drive, Pasig', 14.582281, 121.060801],
    ];

    // Info Window Content
    var infoWindowContent = [
        ['Frederick Bldg, Sen. Gil J. Puyat Ave, Makati'],
        ['Ground Floor PEZA Admin Building, Loakan Road, Baguio City Economic Zone, Baguio'],
        ['316 Sen Gil Puyat Avenue Extension, Makati'],
        ['Araneta Square Mall, Samson Road, Bonifacio Monumento Circle Caloocan, Caloocan'],
        ['Unit 203, Pacific Place Condominium, Pearl Drive, Pasig'],
    ];

    // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;


    // Loop through our array of markers & place each one on the map
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            icon: customMarker,
            animation: google.maps.Animation.DROP
        });

        // Allow each marker to have an info window
        google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
    }

    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        // this.setZoom(14);
        google.maps.event.removeListener(boundsListener);
    });

}


// Detect if Firefox

    // Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

if(isFirefox == true) {
	var slides = document.getElementsByClassName('slide-mask');
	console.log(slides.length);

	for (i = 0; i < slides.length; i++) { 
	    slides[i].style.fill = 'url(#slide-mask-pattern) none';
	}
}