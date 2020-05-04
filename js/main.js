$(function(){
	tabsEvent("order-tabs");
	tabsEvent("discount-tabs");
	function tabsEvent(tabSpace){
		let tabWrapper = $(`[data-tabs=${tabSpace}]`);
		tabWrapper.find("[data-tab]").on("click", function(){
			tabWrapper.find("[data-tab]").map(function(idx, item){
				$(item).removeClass("active");
			});
			$(this).addClass("active");

			tabWrapper.find("[data-item]").map(function(idx, item){
				$(item).removeClass("active");
			})
			tabWrapper.find(`[data-item=${$(this).data("tab")}]`).addClass("active");
		});
	}
	///////////////////////////////////////////////////////
	$('.gallary-items').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
	});
	$('a[href="#order-call"]').magnificPopup({
		type: 'inline',
		removalDelay: 200,
		mainClass: 'my-mfp-slide-bottom'
	});

	$('.services__services-gallary__order-btn').magnificPopup({
		items:{
			src: "#calc-cost",
			type: 'inline'
		},
		type: 'inline',
		removalDelay: 200,
		mainClass: 'my-mfp-slide-bottom'
	});
});