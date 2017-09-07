$(function(){

	setMoneyCtrlProduct($('.cu-list'),$.getUrlParam('pageid')||1);


	function setMoneyCtrProduct(dom,pageid,callback){
		//我们计算页数是从一开始，但是请求时，0 为第一页，所以要减一

		Route.getmoneyctrl(pageid-1,function(data){
			console.log(data);
			//算出页数
			data.pageCount = Math.floor(data.totalCount/data.pagesize);
			data.pageid = pageid || 1;
			data.page=[];
			for (var i = 0; i < data.pageCount; i++) {
				data.page.push({'pageid':i+1,'pageCount':data.pageCount});
			}
			var html = template('moneyCtrl',data);
			dom.html(html);
			// $('#selectPage').on('change',function(e){
			// 	window.location.href="moneyCtrl.html?pageid="+$(this).val();
			// 	$(this).attr('selected',"selected");
			// })

		});
	}
})