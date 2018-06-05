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
	
	
	
	/*放大镜*/
	var 
		oShadow = $('.fang'),
		oMiddleBox = $('.middletp'),
		oBigBox = $('.pig'),
		oBigImg = oBigBox.find('img'),
		multiple = oBigBox.width()/oShadow.width();

	$('.small-box img').mouseenter(function(){
		$('#middle-img').attr('src',$(this)[0].src);
		$('#big-img').attr('src',$(this)[0].src);
		
	});
	
	oMiddleBox.mouseenter(function(){
		oBigBox.css('display','block');
		oShadow.css('display','block');
	});

	oMiddleBox.mousemove(function(e){
		var
			iX = e.pageX - $(this).offset().left - oShadow.width() / 2,
			iY = e.pageY - $(this).offset().top - oShadow.height() / 2,
			MaxX = oMiddleBox.width() - oShadow.width(),
			MaxY = oMiddleBox.height() - oShadow.height();
			iX = iX > 0 ? iX : 0;  
            iX = iX < MaxX ? iX : MaxX;  
            iY = iY > 0 ? iY : 0;  
            iY = iY < MaxY ? iY : MaxY;   
			
			 oShadow.css({left:iX+'px',top:iY+'px'}); 
			 oBigImg.css({marginLeft:-multiple*iX+'px',marginTop:-multiple*iY+'px'});  
	});
	oMiddleBox.mouseleave(function(){
		oShadow.css('display','none');
		oBigBox.css('display','none');
	});
	/*放大镜结束*/
	$('.com-pare').click(function(){
		$(this).css("background-position", "0px -99px");
	});
	
	
	
	
	
	$('.xxzt').mouseenter(function(){
		$(this).children('div').css('display','block');
		$(this).css({"border-bottom":'2px solid #fff','z-index':4});
	});
	$('.xxzt').children('div').mouseenter(function(){
		$(this).parent().css({"border-bottom":'2px solid #fff','z-index':4});
		$(this).css('display','block');
	});
	$('.xxzt').children('div').mouseleave(function(){
		$(this).css('display','none');
		$(this).parent().css({"border-bottom":'1px solid #c3c3c3','z-index':2});
	});
	$('.xxzt').mouseleave(function(){
		$(this).children('div').css('display','none');
		$(this).css({"border-bottom":'1px solid #c3c3c3','z-index':2});
	});
	
	
	$('#a3').click(function(){
		var $val = $('#num').val();
		$val = $val+1;
		if($val>1){
			
			alert('该商品已经库存不足。已将您的购货数量修改为 1。');
			$val = 1;
			$('#num').val($val);
		}
	});
	$('#a1').click(function(){
		var $val = $('#num').val();
		$val = $val-1;
		if($val<=0){
			alert('亲，至少选购一件。已将您的购货数量修改为 1。');
			$val = 1;
			$('#num').val($val);
		}
	});
	
	
	
	
	$('.jp ul li').each(function(k,v){
		$(v).mouseenter(function(){
			$(this).find($("a")).stop(true).animate({'bottom':0},100);
		});
		$(v).mouseleave(function(){
			$(this).find($("a")).stop(true).animate({'bottom':-25},100);
		});
	});
	
	
	
	/*滚动*/
	var $jpindex = 0;
	var $length6 = $('#jpcenter ul li').length;
	$('#jpright').click(function(){
		$jpindex = $jpindex+1;
		if ($jpindex>=($length6-6)) {
			$jpindex = $length6-6;
		}
		$('#jpcenter ul').stop(true).animate({'left':-184*$jpindex},100)
	});
	$('#jpleft').click(function(){
		$jpindex = $jpindex-1;
		if ($jpindex<0) {
			$jpindex = 0;
		}
		$('#jpcenter ul').stop(true).animate({'left':-184*$jpindex},100)
	});
	
	
	/*熟知滚动*/
	var $xqindex = 0,$remdinterval = null,$fig = true;
	var $xqlength = $('#jpcenter ul li').length;
	$('#xqlbtop').click(function(){
		$xqindex = $xqindex + 1;
		if ($xqindex>=($xqlength-3)) {
			$xqindex = $xqlength-3;
		}
		$('#xqlb ul').stop(true).animate({'top':-150*$xqindex},200);
	});
	$('#xqlbbottom').click(function(){
		$xqindex = $xqindex - 1;
		if ($xqindex<0) {
			$xqindex = 0;
		}
		$('#xqlb ul').stop(true).animate({'top':-150*$xqindex},200);
	});
	$('#xqlb').mouseenter(function(){
		clearInterval($remdinterval);
	});
	$('#xqlb').mouseleave(function(){
		automove($xqindex);
	});
	automove();
	
	function automove(){
		$remdinterval = setInterval(function(){
			if ($fig===true) {
				$xqindex = $xqindex + 1;
				if ($xqindex>=($xqlength-3)) {
				$fig = false;
				}
			}else{
				$xqindex = $xqindex - 1;
				if ($xqindex==0) {
					$fig = true;
				}
			}
			
			
			$('#xqlb ul').stop(true).animate({'top':-155*$xqindex},200);
		},1500);
	}
	
	$('.tab li').each(function(k,v){
		$(v).mouseenter(function(){
			$(this).addClass('h_list').siblings().removeClass('h_list');
		});
		$(v).mouseleave(function(){
			$(this).removeClass('h_list');
		});
		$(v).click(function(){
			$(this).addClass('h_list').siblings().removeClass('h_list');
		});
	});
	
	
	$('.abs_ul li').each(function(k,v){
		
		$(v).mouseenter(function(){
			$(this).addClass('abs_hot').siblings().removeClass('abs_hot');
		});
		$(v).mouseleave(function(){
			$(this).removeClass('abs_hot');
		});
		$(v).click(function(){
			
			$(this).addClass('abs_active').siblings().removeClass('abs_active');
		});
	});
	
	
	
	/*滚动条运动到指定的位置*/
	var $a = $('#xqrtop').offset().top;
	$(window.document).scroll(function(){
		var $b = $(document).scrollTop();
		console.log($a);
		if ($b>$a) {
			$('#xqrtop').css({'position':'fixed','top':0});
		}else{
			$('#xqrtop').css({'position':'static','top':''});
		}
	});

	
	$('.pj ul li').each(function(k,v){
		$(v).children('a').click(function(){
			$(this).addClass('cur').parent().siblings().children('a').removeClass('cur');
		});
	});
	
	$('.abs_ul li').eq(0).click(function(){
		$('html,body').animate({'scrollTop':$('.mc').offset().top-37},100);
	});
	$('.abs_ul li').eq(1).click(function(){
		$('html,body').animate({'scrollTop':$('.my_comment_pre').offset().top-37},100);
	});
	$('.abs_ul li').eq(2).click(function(){
		$('html,body').animate({'scrollTop':$('.pj').offset().top-37},100);
	});
	$('.abs_ul li').eq(3).click(function(){
		$('html,body').animate({'scrollTop':$('.my_goods_info').offset().top-37},100);
	});
	$('.abs_ul li').eq(4).click(function(){
		$('html,body').animate({'scrollTop':$('.my_goods_info2').offset().top-37},100);
	});
	$('.abs_ul li').eq(5).click(function(){
		$('html,body').animate({'scrollTop':$('.wenti').offset().top-37},100);
	});
	
	
	$(window.document).scroll(function(){
		var $stop = $(document).scrollTop();
		
		
		if ($stop>=$('.mc').offset().top-37&&$stop<$('.my_comment_pre').offset().top-37) {
			$('.abs_ul li').eq(1).addClass('abs_active').siblings().removeClass('abs_active');
		}
		if ($stop>=$('.my_comment_pre').offset().top-37&&$stop<$('.pj').offset().top-37) {
			$('.abs_ul li').eq(1).addClass('abs_active').siblings().removeClass('abs_active');
		}
		if ($stop>=$('.pj').offset().top-37&&$stop<$('.my_goods_info').offset().top-37) {
			$('.abs_ul li').eq(2).addClass('abs_active').siblings().removeClass('abs_active');
		}
		if ($stop>=$('.my_goods_info').offset().top-37&&$stop<$('.my_goods_info2').offset().top-37) {
			$('.abs_ul li').eq(3).addClass('abs_active').siblings().removeClass('abs_active');
		}
		if ($stop>=$('.my_goods_info2').offset().top-37&&$stop<$('.wenti').offset().top-37) {
			$('.abs_ul li').eq(4).addClass('abs_active').siblings().removeClass('abs_active');
		}
		
		if ($stop>=$('.wenti').offset().top) {
			$('.abs_ul li').eq(5).addClass('abs_active').siblings().removeClass('abs_active');
		}
	});
	
	
	
	
	
	//这是右侧的变懒
	$('#a2 #a2top').click(function(){
		$('html,body').animate({'scrollTop':0},100);
	});
	
	$('#a2 #a2user h3 span').each(function(k,v){
		$(v).mouseenter(function(){
			$(this).addClass('span').siblings().removeClass('span');
		});
	});
	
	$('#tc').mouseenter(function(){
		$('#tc a').animate({'top':-30},500).siblings().animate({'top':0},500);
	});
	$('#tc').mouseleave(function(){
		$('#tc a').animate({'top':0},500).siblings().animate({'top':30},500);
	});
	
	$('#gz').mouseenter(function(){
		$('#gz >a').animate({'top':-30},500).siblings().animate({'top':0},500);
	});
	$('#gz').mouseleave(function(){
		$('#gz >a').animate({'top':0},500).siblings().animate({'top':30},500);
	});
	
	$('#sc').mouseenter(function(){
		$('#sc >a').animate({'top':-30},500).siblings().animate({'top':0},500);
	});
	$('#sc').mouseleave(function(){
		$('#sc >a').animate({'top':0},500).siblings().animate({'top':30},500);
	});
	
	
	
	
	$('.compare').click(function(){
		$('.comparebox').css({'display':'block'});
	});
	$('.comparebox ul li').each(function(k,v){
		$(v).click(function(){
			$(this).addClass('pare').siblings().removeClass('pare');
			$('.comparebox div').eq($(this).index()+1).addClass('com').siblings().removeClass('com');
		});
	});
	$('.close').click(function(){
		$('.comparebox').css({'display':'none'});
	});


	//这是进行数据的展示和请求
	http://189293b2e7.imwork.net:37381/product/getDetail?pid=04756f19-fd3a-4a6e-8d48-adfbb4c1540e
	var _url = "http://189293b2e7.imwork.net:37381/product/getDetail";
	var _pno = window.location.href.slice(window.location.href.indexOf("?")+1).split("="); 
	
	var id = {"pno":_pno[1]}
	$.getJSON(_url,id,function(data){
		console.log(data);
		var _imgs = data.imgs
		$(".xx").children("p").html(data["title"]);
		$(".new_title").html(data["title"])
		$(".middletp_list").empty();
		$(".middletp").find("img").attr("src","http:"+_imgs[0]+"")
		$("#imgs").attr("src","http:"+_imgs[0]+"")

		$(".span_price1").html(data["price"])
		$(".span_price2").html(data["price"]*1.2)
		
		$(".a_price1").html("铜牌会员："+data["price"]*0.9+"");
		$(".a_price2").html("金牌会员："+data["price"]*0.8+"");
		$(".a_price3").html("钻石会员："+data["price"]*0.7+"");
		
		_imgs.map(function(item,index){
			if(item!=null){
				
				var _img = $('<img src="http:'+item+'">')
				$(".middletp_list").append(_img)
				
				_img.on("mousemove",function(){
					$(".middletp").find("img").attr("src","http:"+item+"")
					$("#imgs").attr("src","http:"+item+"")
				})
			}
			
		})


		
	})


});
