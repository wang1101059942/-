$(function(){

setTitle($('.bcj-title'), $.getUrlParam('titleid'));
setProductList($('.bcj-list'),$getUrlParam('titleid'));


function setTitle(dom,titleid){
	Route.getbaicaijiatitle(function(data){
		//获得ajax返回的数据 将数据添加到模板中
		var html = template('bcjTitle',data);
		//将总体添加到dom树中
		dom.html(html);
		//找到dom树中元素ul-wapper中所有的子元素li 设置变量titleLi装它
		var titleLi = dom.find('.ul-wapper .tabs li');
		//列表宽度清零
		var tabsUlwidth = 0;
		//遍历title长度 
		for (var i = 0; i < title.length; i++) {
			//ul 的总宽度 = 每张页面的Li的宽度加上每张页面中ul的宽度
			tabsUlwidth += $(titleLi[i]).width();
		}

		//获得window 宽度
	var  windowWidth = $(window).width();
	//设置条件 window 小于768的时候
	if (windowWidth < 768 ) {
		//找到 dom 中的tabs 设置样式:宽度 +38
		dom.find('ul-wapper .tabs').css('width',tabsUlwidth + 38);
	}
		//添加 active 当前类名
	$(titleLi[title || 0 ]).addClass('active');

	//传参数
	topSwipe(dom.find('.ul-wapper .tabs'),titleid);

	})
}

	function topSwipe(dom,titleid){
		//获取dom宽度
		var domWidth =  dom.width();
		var domParentWidth  = dom.parent().width();
		var buffer = 50;
		var maxPosition = 0;
		var minPosition = domParentWidth - domWidth;
        var maxSwipe = 0 + buffer;
        var minSwipe = minPosition - 50;
        var startX = 0;
        var moveX = 0;
        var endX = 0;
        var distanceX = 0;
        var currentX = 0;
        var li = dom.find('li');
        for (var i = 0; i < titleid; i++) {
        	currentX -=$(li[i]).width();
        }
        if(currentX < minPosition){
        	currentX  = minPosition;
        }
        addTransition(dom);
        setTranslateX(dom,currentX)
        dom[0].addEventListener('touchstart',function(e){
        	startX = e.touches[0].clientX;
        });
        dom[0].addEventListener('touchmove',function(e){
        	moveX = e.touches[0].clientX;
        	distanceX = moveX -startX;

        	if ((currentX + distanceX) > minSwipe && (currentX + distanceX) < maxSwipe){
        		addTransition(dom);
        		setTranslateX(dom,(currentX + distanceX));
        	}
        });
        dom[0].addEventListener('touchend',function(e){
        	if ((currentX + distanceX) > maxSwipe) {
        		currentX = maxPosition;
        		addTransition(dom);
        		setTranslateX(dom,currentX);
        	}

        	//小于最小定位的时候
        })


	}



})