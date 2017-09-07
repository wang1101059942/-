$(function(){

    setMenu($('.menu >.row'));

    //将产品列表添加到模板中；
    setProductList($('.product-list'));

    //设置菜单
    function setMenu(dom,callback){
        //最后四个需要隐藏的元素
         var $lastFour;

        Route.getindexmenu(function(res){
            var data = res.result;

            var menuHtml="";

            //遍历拼接字符串

            data.forEach(function(item,index){
                menuHtml+='<div class="menu-item">'
                            +   '<a href="' + item.titlehref + '">'
                            +       item.img
                            +       '<p>' + item.name + '</p>'
                            +   '</a>'
                            +'</div>';
            });

            $(dom).html(menuHtml);
            //找到关键元素设置后面四个元素显示会隐藏;
            $lastFour=$(dom).children('.menu-item:nth-last-child(-n+4)');
            //先隐藏
            $lastFour.addClass('hide');

            setnone($(dom).find('.menu-item:nth-child(8)>a'));
        })

        function setnone(dom,callback){
            $(dom).on('click',function(){
                $lastFour.toggleClass('hide');
            })
        }
    }


      function setProductList(dom,pageid,callback){

                Route.getmoneyctrl(function(data){

                    var html = template('moneyCtrl',data);
                    dom.html(html);
             })
      }

});