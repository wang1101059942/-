$(function(){

setLinks($('.site-nav'));

function setLinks(dom,callback){

	Route.getsitenav(function(data){

		var html = template('siteNve',data);
		dom.html(html);


	});
}

})

