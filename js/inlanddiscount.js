$(function(){

	setProductList($('.inland-discount-list'))

	function setProductList(dom,callback){
		Route.getinlanddiscount(function(data){
			var html=template("productList",data);
			dom.html(html);
			$('.loading').hide();
		});
	}
});


