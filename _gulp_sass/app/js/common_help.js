$(function() {

	//для того чтобы футер был всегда внизу экрана, даже если мало контента
	var windowHeight = $(window).height();
	var windowWidth = $(window).width();
	$("body").css("min-height",windowHeight);


	//open mob menu
	$(".header_mob_menu_toggle").click(function(){
		$(this).toggleClass("active");
		$(".header_mob_menu").slideToggle().toggleClass("open");
	});
	$(document).click(function(event) {
		if ($(".header_mob_menu").is(":visible") ){
			if ($(event.target).closest(".header_mob_menu_toggle, .header_mob_menu").length) return;
			$(".header_mob_menu_toggle").removeClass("active");
			$(".header_mob_menu").slideUp().removeClass("open");
			event.stopPropagation();
		}
	});


	//fixed header Univest_vizitka
	var headerTopHeight = $(".mainHeader_top").outerHeight();
	$(window).scroll(function() {
		if($(".mainHeader").is(":visible") ){
			if ($(window).scrollTop() > headerTopHeight) {
				$(".mainHeader").addClass("fixed");
				$(".mainHeader").next().addClass("headFixed");
			}
			else{
				$(".mainHeader").removeClass("fixed");
				$(".mainHeader").next().removeClass("headFixed");
			}
		}
	});

	//fixed mob header Univest_vizitka
	var headerMobLogo = $(".header_mob_logo").outerHeight();
	$(window).scroll(function() {
		if ($(window).scrollTop() > headerMobLogo) {
			$(".header_mob_menu_wrapper").addClass("fixed");
			$(".header_mob_logo").addClass("headLogoFixed");
		}
		else{
			$(".header_mob_menu_wrapper").removeClass("fixed");
			$(".header_mob_logo").removeClass("headLogoFixed");
		}
	});

	//зависимость длинны стрелочки на страничке история от высоты блока с годом Univest_vizitka
	$(".historySection_item").each(function(i,elem) {
		var hsi = $(this);
		var hsiHeight = hsi.outerHeight();
		if(hsiHeight > 257){
			var overHsiHeight = hsiHeight - 257;
			var resultHsiSpanHeight = 167 + overHsiHeight;
			var hsiSpanTop = 114 + overHsiHeight;
			hsi.next().children(".historySection_item_line").css({"height" : resultHsiSpanHeight, "top" : -hsiSpanTop})
			hsi.next().children(".historySection_item_round").css({"top" : -hsiSpanTop})
		};
	});


	//change textarea value lukas_dop
	$("a").click(function(e){
		var sval = $(this).text();
		$("textarea").val(sval);
		e.preventDefault();
	});

	// clear all inputs except selected lukas_dop
	$(".constr_shag.shag4 .constr_shag_item_wrap input").click(function(){
		var ths = $(this);
		$(".constr_shag_item").removeClass("active");
		ths.parents(".constr_shag_item_form").prev().addClass("active");
	});// устанавливаем активным элемент при клике
	$(".constr_shag.shag4 .constr_shag_item_wrap input").keydown(function(){
		$(".constr_shag_item").not(".active").parent().find("input").val("");
	});



	//устанавливаем максимальное колличество вводимых символов lukas_dop
	(function($){$.fn.extend({limit:function(limit,element){var interval,f;var self=$(this);$(this).focus(function(){interval=window.setInterval(substring,100)});$(this).blur(function(){clearInterval(interval);substring()});substringFunction="function substring(){ var val = $(self).val();var length = val.length;if(length > limit){$(self).val($(self).val().substring(0,limit));}";if(typeof element!='undefined')substringFunction+="if($(element).html() != limit-length){$(element).html((limit-length<=0)?'0':limit-length);}";substringFunction+="}";eval(substringFunction);substring()}})})(jQuery);
	$(".tabs_item").each(function(i,elem) {
		$(this).children("textarea").limit("50",".charsLeft"+(i+1));
	});

	//////////////////////////////////
	//start popups
	//////////////////////////////////
	var popup = {
		close: function(){
			$(".popup-wrapper").fadeOut();
			$("html").removeClass("popupLock");
		},
		open: function(){
			$("html").addClass("popupLock");
		}
	}
	window.onload = function(){
		$(".popup .close").on("click", function(){
			popup.close();
		});
		$(".popup-wrapper").on("click", function(event) {
			if ($(this).is(":visible")){
				if ($(event.target).closest(".popup").length) return;
				popup.close();
				event.stopPropagation();
			}
		});
		$(".login").on("click", function(e){
			e.preventDefault();
			popup.open();
			$("#popup_login").fadeIn(200);
		});
		$(".auth").on("click", function(e){
			e.preventDefault();
			popup.open();
			$("#popup_auth").fadeIn(200);
			$("#popup_login").fadeOut(200);
		});
	};
	window.onresize = function(){
	//popup.init();
	}
	//////////////////////////////////
	//end popups
	//////////////////////////////////


	//scroll to position after click on some button
	$(".btn").click( function(e){
		$('html, body').animate({ scrollTop:0 }, 600);
		e.preventDefault();
	});


	  // Tel Mask
    if ($(".mask").length){
        $(function() {
            $(".mask").mask("+38 (099)-999-99-99");
        });
    };


	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
