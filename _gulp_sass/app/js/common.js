$(function() {

	var windowHeight = $(window).height();
	var windowWidth = $(window).width();
	$("body").css("min-height",windowHeight);
	// if (navigator.userAgent.search(/Safari/) > -1){
	// 	$(".homeFs");
	// };


	//animation for category list
	$(".homeFs_item_ssecond, .homeFs_item_sthird, .homeFs_item_sfourth, .homeFs_item_sfifth, .homeFs_item_ssixth, .homeFs_item_sseventh").hover(function(){
		$(".homeCategory_item_mnulist").toggleClass("active");
	});

	//open mob menu
	$(".header_mob_menu_toggle").click(function(){
		$(this).toggleClass("active");
		$(".header_mob_menu").slideToggle().toggleClass("open");
	});

	//fixed header
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
	//fixed mob header
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
	//зависимость длинны стрелочки на страничке история от высоты блока с годом
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

	//toggle mob category
	$(".homeFs_mob_item_center").click(function(){
		if($(this).hasClass("active")){
			$(".homeFs_mob_item_center").removeClass("active").parent().next(".homeFs_mob_item_category").slideUp().removeClass("open");
		}else{
			$(".homeFs_mob_item_center").removeClass("active").parent().next(".homeFs_mob_item_category").slideUp().removeClass("open");
			$(this).addClass("active").parent().next(".homeFs_mob_item_category").slideDown().addClass("open");
		}
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
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
