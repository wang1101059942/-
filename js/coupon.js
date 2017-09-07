$(function(){


	setCoupon($('.coupon-title'));

	function setCoupon(dom,callback){

		Route.getcoupon(function(data){

			var html = template('coupon-arch',data);

			dom.html(html);
		})
	}
})