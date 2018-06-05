$(function(){
	
	var _user = JSON.parse(localStorage.getItem("user"));
	if(_user){
		console.log(_user)
		$(".index_user").empty;
		$(".index_user").html(""+_user["eno"]+"")
	}

	/*这是top*/
	$('.hbox .hr a').eq(6).mouseenter(function(){
		$('#menu-8').css({'display':'block'});
	});
	$('#menu-8').mouseenter(function(){
		$('#menu-8').css({'display':'block'});
		$('.hbox .hr a').eq(6).css({'background':'#fff'});
	});
	$('#menu-8').mouseleave(function(){
		$('#menu-8').css({'display':'none'});
		$('.hbox .hr a').eq(6).css({'background':'#f5f5f5'});
	});
	$('.hbox .hr a').eq(6).mouseleave(function(){
		$('#menu-8').css({'display':'none'});
	});
	
	$('.hbox .hr a').eq(5).mouseenter(function(){
		$('#menu-6').css({'display':'block','left':$(this).offset().left-155});
		$(this).css({'color':'red','background':'#fff'});
	});
	$('#menu-6').mouseenter(function(){
		$('#menu-6').css({'display':'block'});
		$('.hbox .hr a').eq(5).css({'background':'#fff'});
	});
	$('#menu-6').mouseleave(function(){
		$('#menu-6').css({'display':'none'});
		$('.hbox .hr a').eq(5).css({'background':'#f5f5f5'});
	});
	$('.hbox .hr a').eq(5).mouseleave(function(){
		$('#menu-6').css({'display':'none','left':$(this).offset().left-155});
		$(this).css({'color':'#000','background':'#f5f5f5','border-bottom':'1px solid #000','box-sizing':'border-box'});
	});
	
	
	$('.hbox .hr a').eq(4).mouseenter(function(){
		$('#menu-5').css({'display':'block','left':$(this).offset().left-155});
		$(this).css({'color':'red','background':'#fff'});
	});
	$('#menu-5').mouseenter(function(){
		$('#menu-5').css({'display':'block'});
		$('.hbox .hr a').eq(4).css({'background':'#fff'});
	});
	$('#menu-5').mouseleave(function(){
		$('#menu-5').css({'display':'none'});
		$('.hbox .hr a').eq(4).css({'background':'#f5f5f5'});
	});
	$('.hbox .hr a').eq(4).mouseleave(function(){
		$('#menu-5').css({'display':'none','left':$(this).offset().left-155});
		$(this).css({'color':'#000','background':'#f5f5f5','border-bottom':'1px solid #000','box-sizing':'border-box'});
	});
	
	
	
	$('.hbox .hr a').eq(3).mouseenter(function(){
		$('#menu-4').css({'display':'block','left':$(this).offset().left-155});
		$(this).css({'color':'red','background':'#fff'});
	});
	$('#menu-4').mouseenter(function(){
		$('#menu-4').css({'display':'block'});
		$('.hbox .hr a').eq(3).css({'background':'#fff'});
	});
	$('#menu-4').mouseleave(function(){
		$('#menu-4').css({'display':'none'});
		$('.hbox .hr a').eq(3).css({'background':'#f5f5f5'});
	});
	$('.hbox .hr a').eq(3).mouseleave(function(){
		$('#menu-4').css({'display':'none','left':$(this).offset().left-155});
		$(this).css({'color':'#000','background':'#f5f5f5','border-bottom':'1px solid #000','box-sizing':'border-box'});
	});
	
	
	
	$('.hbox .h0 span').eq(1).mouseenter(function(){
		$('#menu-1').css({'display':'block'});
		
	});
	$('#menu-1').mouseenter(function(){
		$('#menu-1').css({'display':'block'});
		
	});
	$('#menu-1').mouseleave(function(){
		$('#menu-1').css({'display':'none'});
		
	});
	$('.hbox .h0 span').eq(1).mouseleave(function(){
		$('#menu-1').css({'display':'none'});
		$(this).css({'border-bottom':'1px solid #000','box-sizing':'border-box'});
	});
	
	
	
	/*这是nav figure的点击事件*/
	/*$('.navbox figure .search>p a').each(function(k,v){
		
		$(v).on('click',function(){
			$(this).addClass('ppa').siblings().removeClass('ppa');
		});
	
	});*/
	
	/*鼠标经过列表头时*/
	$('#contentbox #content #navl').hide()
	$('.navbox figure .logo p a').mouseenter(function(){
		
		$('#contentbox #content #navl').show();
	});
	$('#contentbox #content #navl').mouseenter(function(){
		$('#contentbox #content #navl').show();
		
	});
	$('#contentbox #content #navl').mouseleave(function(){
		$('#contentbox #content #navl').hide();
	});
	$('.navbox figure .logo p a').mouseleave(function(){
		$('#contentbox #content #navl').hide();
	});
	
	
	$('#contentbox #content #navl .twonav').hide();
	var $dlindex = null;
	$('#contentbox #content #navl dl').each(function(k,v){
		$(v).mouseover(function(){
			$(this).css({'background':'#F44444','color':'#fff'}).siblings().css({'background':'#fff','color':'#000'}).children('div').hide();
			$dlindex = $(this).index();
			console.log($dlindex);
			$(this).children('div').show().css({'top':-52*($dlindex>0?0.5:0)});
			
		});
		/*$('#contentbox #content #navl dl .twonav').mouseenter(function(){
				$(this).show().css({'top':-52*($dlindex>0?0.5:0)});
				$('#contentbox #content #navl').show();
			});
		$(v).mouseleave(function(){
			
			$(this).children('div').hide().css({'display':'none'});
		});*/
	});
	
	$('#tubiao #hdleft li').eq(3).click(function(){
		$('html,body').animate({'scrollTop':0},100);
	});

	
	

	var loading = false;
	var btnboolean = true;
	var _url = "http://189293b2e7.imwork.net:37381/product/getProducts";
	var page = 1;
	var _pages = {"page":1,"size": 10}
	


	//图片懒加载
	function isElementInViewport(el) {

		var rect = el.getBoundingClientRect();

		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <= $(window).height() &&
			rect.right <= $(window).width()
		);
	}

	function lazyimg() {
		var _image = $(".lazy")
		//console.log(_image)
		_image.each(function (index, item) {
			//console.log(isElementInViewport())
			if (isElementInViewport($(item)[0])) {
				$(this).attr("src", $(this).attr("data-origina"));
				$(this).removeAttr("data-origina").removeClass('lazy');
			}
		});
	}
	function axiosa(url,pages){
		$.getJSON(url,pages,function(data){
			console.log(data)
			loading = false;
			var _datas = data.content;
			var _data1 = _datas;
			//console.log(_data1)
			var arr = [];
			_data1.map(function(item,index){
				var _msg = [];
				_msg.push('<li><a href="shopdetail.html?pid='+item["pno"]+'" title="'+item["title"]+'" class="li_link" target="_blank">');
				_msg.push('<p class="pic"><a href="" target="_blank"><img class="lazy" data-origina="'+item["imgUrl"]+'" src="./img/timg.jpg"></a></p>');
				_msg.push('<p class="name"><a href="" target="_blank">'+item["title"]+'</a></p>');
				_msg.push('<p class="price"><del style="color:#999">'+item["price"]+'</del></p>');
				_msg.push('<p><font class="price">'+item["price"]*8/10+'</font></p>');
				_msg.push('<span class="iconfont icon-gouwuche1" href="javascript:addToCart(2797)"></span>');
				_msg.push('</a></li>')

				arr.push($(_msg.join("")));
			})
			
			for(var i=0;i<arr.length;i++){
				$(".curr1").append(arr[i]);
			}
			lazyimg();

		});
	}
	axiosa(_url,_pages)

	
	$(window).on('scroll', function () {
		lazyimg();
		var winTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
        var docHeight = $(document).height();
		var winHeight = $(window).height();
		
		if(btnboolean){
			
			if ((winTop / (docHeight - winHeight)) > 0.8) {
				if (!loading) {
					loading = true;
					
					page++;
					pages = {"page": page,"size": 10};
					console.log(pages)
					axiosa(_url,pages);			
				}
			}

		}
		

	})





	//这是搜索商品的请求
	$(".btn_search").on("click",function(){

		var _txt = $(".search_txt").val();
		console.log(_txt)
		//window.location.href = "huodong.html?txt="+_txt+"";
		$(".curr1").empty();
		axios.get("http://189293b2e7.imwork.net:37381/product/getProducts?title="+_txt+"").then(function(data){
			console.log(data)
			btnboolean = false;
			var _datas = data.data.content;
			var _data1 = _datas;
			//console.log(_data1)
			var arr = [];
			_data1.map(function(item,index){
				var _msg = [];
				_msg.push('<li><a href="shopdetail.html?pid='+item["pno"]+'" title="'+item["title"]+'" class="li_link" target="_blank">');
				_msg.push('<p class="pic"><a href="" target="_blank"><img src="'+item["imgUrl"]+'"></a></p>');
				_msg.push('<p class="name"><a href="" target="_blank">'+item["title"]+'</a></p>');
				_msg.push('<p class="price"><del style="color:#999">'+item["price"]+'</del></p>');
				_msg.push('<p><font class="price">'+item["price"]*8/10+'</font></p>');
				_msg.push('<span class="iconfont icon-gouwuche1" href="javascript:addToCart(2797)"></span>');
				_msg.push('</a></li>')

				arr.push($(_msg.join("")));
			})
			
			for(var i=0;i<arr.length;i++){
				$(".curr1").append(arr[i]);
			}
			$(".loading").css({"display":"none"})
		})

	})

});
