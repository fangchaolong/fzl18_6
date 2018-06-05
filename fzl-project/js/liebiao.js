$(function(){

	var _user = JSON.parse(localStorage.getItem("user"));
	if(_user){
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
	
	
	var $ai = 0;
	$('.item').each(function(k,v){
		$(v).click(function(){
			$ai = $ai + 1;
			if ($ai%2==0) {
				$(this).children('ul').css({'display':'none'});
				$(this).find('b').css({'background-position': '6px -246px'});
			}else{
				$(this).children('ul').css({'display':'block'});
				$(this).find('b').css({'background-position': '-11px -246px'});
			}
			
		});
	});
	
	
	$('#top2s1').mouseenter(function(){
		$(this).css({'display':'none'});
		$('#top2b1').css({'display':'block'});
		$("#top2b2").css({'display':'none'});
		$('#top2s2').css({'display':'block'});
	});
	$('#top2s2').mouseenter(function(){
		$(this).css({'display':'none'});
		$('#top2b2').css({'display':'block'});
		$("#top2b1").css({'display':'none'});
		$('#top2s1').css({'display':'block'});
	});
	
	
	$('#filter dd').each(function(k,v){
		$(v).click(function(){
			$(this).addClass('curr').siblings().removeClass('curr');
		});
	});
	
	$("#sq ul li").each(function(k,v){
		$(v).on("mouseenter",function(){
			$(this).addClass('cc').siblings().removeClass('cc');
			$(this).find('.gg').css({'display':'block'});
		});
		$(v).on("mouseleave",function(){
			$(this).find('.gg').css({'display':'none'});
			$(this).removeClass('cc').siblings().removeClass('cc');
		});
	});
	
	
	
	/*换页*/
	// $('#ys p a').each(function(k,v){
	// 	$(v).click(function(){
	// 		$(this).addClass('ysa').siblings().removeClass('ysa');
	// 	});
	// });
	// var $ysanum = 0; 
	// var $ysplength = $('#ys p a').length;
	// $('#ysright').click(function(){
	// 	$ysanum = $ysanum + 1;
	// 	if ($ysanum>$ysplength) {
	// 		$ysanum = $ysplength;
	// 	}
	// 	$('#ys p a').eq($ysanum).addClass('ysa').siblings().removeClass('ysa');
	// });
	// $('#ysleft').click(function(){
	// 	$ysanum = $ysanum - 1;
	// 	if ($ysanum<0) {
	// 		$ysanum = 0;
	// 	}
	// 	$('#ys p a').eq($ysanum).addClass('ysa').siblings().removeClass('ysa');
	// });
	
	
	
	var $likeright = 0;
	var $likelength = $('#likeright ul li').length;
	var $aa = null;
	$('.auto').mouseenter(function(){
		clearInterval($aa);
	});
	$('.auto').mouseleave(function(){
		auto1();
	});
	$('#likeright .lright').click(function(){
		$likeright++;
		if ($likeright>$likelength-5) {
			$likeright = 1;
			$('#likeright ul').css({'left':0});
		}
		$('#likeright ul').animate({'left':-184*$likeright},100);
	});
	$('#likeright .lleft').click(function(){
		$likeright--;
		if ($likeright<0) {
			$likeright = $likelength - 6;
			$('#likeright ul').css({'left':-184*($likelength-6)});
		}
		$('#likeright ul').animate({'left':-184*$likeright},100);
	});
	auto1();
	function auto1(){
		$aa = setInterval(function(){
			$likeright++;
			if ($likeright>$likelength-5) {
				$likeright = 1;
				$('#likeright ul').css({'left':0});
			}
			$('#likeright ul').animate({'left':-184*$likeright},100);
		},500);
	}
	
	
	
	
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
	
	
	
	
	
	
	/*============================飞入购物车=================================*/
	var offset = $("#gwc").offset(); 
    var num = 0;
    
    $(window).scrollTop(0);
	$(window).resize(site);
	    function site() {
	        $(window).scrollTop(0);
	        offset=$('#gwc').offset();

    }
	    
	
	var scrollTop;
	$(window).scroll(function() { 
        scrollTop=$(window).scrollTop(); 
    });
    
    $(".gg").on("click",function(event){
		console.log("a") 
        var addcar = $(this); 
       
        var img = addcar.parent().find('img').attr('src'); 
        var flyer = $('<img class="u-flyer" src="'+img+'">'); 
        flyer.fly({ 
            start: {
                left: event.pageX,   //开始位置（必填）#fly元素会被设置成position: fixed 
                top:  event.pageY-scrollTop    //开始位置（必填） 
            }, 
            end: { 
                left: offset.left + 10,  //结束位置（必填） 
                top: offset.top + 100,  //结束位置（必填） 
                width: 0,    //结束时宽度 
                height: 0    //结束时高度 
            }, 
            onEnd: function(){ //结束回调 
                $("#msg").show().animate({width: '150px'}, 200).fadeOut(1000); //提示信息 
                addcar.css("cursor","default").removeClass('orange').unbind('click');
                
               this.destroy(); //移除dom 
            },
            speed: 1.2
        }); 
        
        num ++;  
    $('#gwc .num').text(num);
    
	});
	

	

	var page = 1,size=16;

	function axiosc(page,size){
		$(".sq_ul").empty();
		axios.get("http://189293b2e7.imwork.net:37381/product/getProducts?page="+page+"&size="+size+"").then(function(data){
		console.log(data.data.content)
		$(".sq_ul").children().slice(10);
		var _data = data.data.content;
		var arr = [];
		_data.map(function(item,index){
			var _msg = [];
			_msg.push('<li>')
			_msg.push('<div>')
			_msg.push('<a href="javascript:;"><img src="'+item["imgUrl"]+'"></a>')
			_msg.push('<div><a href="javascript:;">'+item["title"]+'</a></div>')
			_msg.push('<div><span>'+item["price"]+'</span><i>'+item["price"]*1.2+'</i></div>')
			_msg.push('<div>')
			_msg.push('<div>')
			_msg.push('<span>0</span>')
			_msg.push('<span>商品销量</span>')
			_msg.push('</div>')
			_msg.push('<div>')
			_msg.push('<span>0</span>')
			_msg.push('<span>用户评论</span>')
			_msg.push('</div>')
			_msg.push('<div>')
			_msg.push('<span>1545</span>')
			_msg.push('<span>关注人气</span>')
			_msg.push('</div>')
			_msg.push('</div>')
			_msg.push('<div>')
			_msg.push('<a href="javascript:;"></a>')
			_msg.push('<a href="javascript:;"></a>')
			_msg.push('</div>')
			_msg.push('<span class="xp">爆款</span>')
			_msg.push('<a href="javascript:;" class="gg" data-id="2" data-url="img/liebiao_files/147_thumb_G_1452897883992.jpg" data-title="爱绚小米4手机套M4翻盖式保护壳男女四简约超薄磨..." data-price="78.00">加入购物车</a>')
			_msg.push('</div>')
			_msg.push('</li>')
			
			arr.push($(_msg.join("")))
		})
		arr.map(function(v,i){
			$(".sq_ul").append(v)
			v.on("mouseenter",function(){
				$(this).addClass('cc').siblings().removeClass('cc');
				$(this).find('.gg').css({'display':'block'});
			})
			
			v.on("mouseleave",function(){
				$(this).find('.gg').css({'display':'none'});
				$(this).removeClass('cc').siblings().removeClass('cc');
			})

		})
		$(".gg").on("click",function(event){
			console.log("a") 
			var addcar = $(this); 
		   
			var img = addcar.parent().find('img').attr('src'); 
			var flyer = $('<img class="u-flyer" src="'+img+'">'); 
			flyer.fly({ 
				start: {
					left: event.pageX,   //开始位置（必填）#fly元素会被设置成position: fixed 
					top:  event.pageY-scrollTop    //开始位置（必填） 
				}, 
				end: { 
					left: offset.left + 10,  //结束位置（必填） 
					top: offset.top + 100,  //结束位置（必填） 
					width: 0,    //结束时宽度 
					height: 0    //结束时高度 
				}, 
				onEnd: function(){ //结束回调 
					$("#msg").show().animate({width: '150px'}, 200).fadeOut(1000); //提示信息 
					addcar.css("cursor","default").removeClass('orange').unbind('click');
					
				   this.destroy(); //移除dom 
				},
				speed: 1.2
			}); 
			
			num ++;  
		$('#gwc .num').text(num);
		
		});

	})
	
	}


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

	function axiosb(page,size){
	$(".sq_ul").empty();
	axios.get("http://189293b2e7.imwork.net:37381/product/getProducts?page="+page+"&size="+size+"").then(function(data){
		console.log(data.data.content)
		$(".sq_ul").children().slice(10);
		var _data = data.data.content;
		console.log(_data)
		var arr = [];
		_data.map(function(item,index){
			var _msg = [];
			_msg.push('<li>')
			_msg.push('<div>')
			_msg.push('<a href="javascript:;"><img class="lazy" data-origina="'+item["imgUrl"]+'" src="./img/timg.jpg"></a>')
			_msg.push('<div><a href="javascript:;">'+item["title"]+'</a></div>')
			_msg.push('<div><span>'+item["price"]+'</span><i>'+item["price"]*1.2+'</i></div>')
			_msg.push('<div>')
			_msg.push('<div>')
			_msg.push('<span>0</span>')
			_msg.push('<span>商品销量</span>')
			_msg.push('</div>')
			_msg.push('<div>')
			_msg.push('<span>0</span>')
			_msg.push('<span>用户评论</span>')
			_msg.push('</div>')
			_msg.push('<div>')
			_msg.push('<span>1545</span>')
			_msg.push('<span>关注人气</span>')
			_msg.push('</div>')
			_msg.push('</div>')
			_msg.push('<div>')
			_msg.push('<a href="javascript:;"></a>')
			_msg.push('<a href="javascript:;"></a>')
			_msg.push('</div>')
			_msg.push('<span class="xp">爆款</span>')
			_msg.push('<a href="javascript:;" class="gg"  data-id="'+item["pid"]+'" data-url="'+item["imgUrl"]+'" data-title="'+item["title"]+'" data-price="'+item["price"]+'" data-pno="'+item["pno"]+'" >加入购物车</a>')
			_msg.push('</div>')
			_msg.push('</li>')
			
			arr.push($(_msg.join("")))
		})

		var _ysnum = data.data.totalPages;
		$(".ysnum").empty();
		for(var i = 1;i<=_ysnum;i++){
			var _a = $('<a href="javascript:;">'+i+'</a>')
			$(".ysnum").append(_a)
		}

		
	

		
		arr.map(function(v,i){
			$(".sq_ul").append(v)
			lazyimg();
			v.on("mouseenter",function(){
				$(this).addClass('cc').siblings().removeClass('cc');
				$(this).find('.gg').css({'display':'block'});
			})
			
			v.on("mouseleave",function(){
				$(this).find('.gg').css({'display':'none'});
				$(this).removeClass('cc').siblings().removeClass('cc');
			})

		})
		$(".gg").map(function(index,item){
			$(item).on("click",function(event){
				
				var addcar = $(this); 
			   
				var img = addcar.parent().find('img').attr('src'); 
				var flyer = $('<img class="u-flyer" src="'+img+'">'); 
				flyer.fly({ 
					start: {
						left: event.pageX,   //开始位置（必填）#fly元素会被设置成position: fixed 
						top:  event.pageY-scrollTop    //开始位置（必填） 
					}, 
					end: { 
						left: offset.left + 10,  //结束位置（必填） 
						top: offset.top + 100,  //结束位置（必填） 
						width: 0,    //结束时宽度 
						height: 0    //结束时高度 
					}, 
					onEnd: function(){ //结束回调 
						$("#msg").show().animate({width: '150px'}, 200).fadeOut(1000); //提示信息 
						addcar.css("cursor","default").removeClass('orange').unbind('click');
						
					   this.destroy(); //移除dom 
					},
					speed: 1.2
				}); 
				
				num ++;  
			$('#gwc .num').text(num);
			
			});
		})

		
		$('#ys p a').each(function(k,v){
		
			$(v).on("click",function(){
				
				axiosc($(v).text(),16)
				$(this).addClass('ysa').siblings().removeClass('ysa');
			});
		});
		$('#ys p a').eq(0).addClass('ysa').siblings().removeClass('ysa');
		var $ysanum = 0; 
		var $ysplength = _ysnum;
		console.log($ysplength)
		$('#ysright').on("click",function(){
			$ysanum = $ysanum + 1;
			
			if ($ysanum>$ysplength-1) {
				$ysanum = $ysplength;
				page = 9;
			}else{
				page++
				axiosc(page,size);
			}
			console.log(page)
			
			$('#ys p a').eq($ysanum).addClass('ysa').siblings().removeClass('ysa');
		});
		$('#ysleft').on("click",function(){
			
			$ysanum = $ysanum - 1;
			if ($ysanum<0) {
				page = 1
				$ysanum = 0;
			}else{
				page--;
			axiosc(page,size)
				
			}
			$('#ys p a').eq($ysanum).addClass('ysa').siblings().removeClass('ysa');
		});


		
		$(".gg").map(function(index,item){
			$(item).on("click",function () {
				var a = "13914776404";
				var b = $(item).attr("data-pno");
				var c = $(item).attr("data-price");
				var _user = JSON.parse(localStorage.getItem("user"));
				if(_user){
					a = _user["eno"];
				}
				axios.get("http://189293b2e7.imwork.net:37381/user/order?uid="+a+"&pno="+b+"&amount=1&price="+c+"").then(function(datas){
					console.log(datas)
				})
				// 商品信息：商品ID、商品名称、商品价格、商品图片地址、商品数量
				var sId    = this.getAttribute('data-id');
				var sUrl   = this.getAttribute('data-url');
				var sTitle = this.getAttribute('data-title');
				var sPrice = this.getAttribute('data-price');
				var iNum   = 1;
				var oGoods = {
					id: sId,
					title: sTitle,
					price: sPrice,
					url: sUrl,
					num: iNum
				};
				console.log(oGoods)
				// 检测商品列表之前有没有添加过
				var aGoods = getCookie('goods');
				var bBtn = true;// 假设当前商品没有被添加过
				if(aGoods == undefined) {
					// cookie直接存一个数组[{}, {}]
					aGoods = [];
				} else {
			  //	JSON转为对象
					aGoods = JSON.parse(aGoods);
					// 判断商品之前有没有添加过
					for(var i = 0; i < aGoods.length; i++) {
						if(aGoods[i].id == sId) {
							aGoods[i].num++;
							bBtn = false;
						}
					}
				}
				// 如果bBtn的值为true，则说明该商品没有被添加过
				if(bBtn === true) {
					
					aGoods.push(oGoods);
				}
				// 写入cookie
				setCookie('goods', JSON.stringify(aGoods), 7, '/');
			});	
		})
	})	
}
axiosb(page,size);

$(window).on("scroll", function () {
	lazyimg();
})
});
