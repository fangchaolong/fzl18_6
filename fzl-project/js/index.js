$(function(){

	var _user = JSON.parse(localStorage.getItem("user"));
	if(_user){
		console.log(_user)
		$(".index_user").empty;
		$(".index_user").html(""+_user["eno"]+"")
	}


	$('#navl dl').each(function(k,v){
		$('.twonav').css({'z-index':'-999'});
		$(v).on('mouseenter',function(){
			$('.twonav').each(function(m,n){
				$(this).css({'z-index':'999','top':v.offsetTop-32*(k>0?1:0)});
			});
			$('.twonav').mouseenter(function(){
				$(this).css({'z-index':'999','top':v.offsetTop-32*(k>0?1:0)});
			});
			$('.twonav').on('mouseleave',function(){
			$(this).removeClass('dlbg');
			$('.twonav').css({'z-index':'-999','top':0});
		});
			$(this).addClass("dlbg").siblings().removeClass('dlbg');
			
		});
		$(v).on('mouseleave',function(){
			$(this).removeClass('dlbg');
			$('.twonav').css({'z-index':'-999','top':0});
		});
	});
	
	$('.navraa').on('mouseenter',function(){
		$(this).addClass('navrss').next().removeClass('navrss');
		$('.navra1').css({'display':'block',}).next().css({'display':'none'});
	});
	$('.navrbb').on('mouseenter',function(){
		$(this).addClass('navrss').prev().removeClass('navrss');
		$('.navra2').css({'display':'block',}).prev().css({'display':'none'});
	});
	
	
	
	//定时器
	
	function buff($buffnum){
		
		/*if ($buffnum!==0) {
			var $buffnum=$buffnum;
		}
		var $buffnum = 0;*/
		var $buffnum  = $buffnum>0?$buffnum:0;
		$buffinterval = setInterval(function(){
			$buffnum++;
			
			if ($buffnum>5) {
				$buffnum = 0;
			}
			
			$('#imgul li').eq($buffnum).addClass("imgli").siblings().removeClass("imgli");
			$('#dian a').eq($buffnum).addClass("dianss").siblings().removeClass("dianss");
		},2000);
	};

	buff();
	
	$('#dian a').each(function(k,v){
		$(v).on('click',function(){
			clearInterval($buffinterval);
			$(this).addClass("dianss").siblings().removeClass("dianss");
			$buffnum = $(this).index();
			$('#imgul li').eq($buffnum).addClass("imgli").siblings().removeClass("imgli");
			buff($buffnum);
		});
	});
	
	
	/*图片的left运动*/
	
	$('.bannerb1 a').each(function(k,v){
		$(v).on('mouseenter',function(){
			$(this).children('img').stop(true).animate({'left':-100},400);
		});
		$(v).on('mouseleave',function(){
			$(this).children('img').stop(true).animate({'left':0},400);
		});
	});
	/*a标题运动*/
	$('#bannerba>a').each(function(k,v){
		$(this).css('color','#000');
		$(v).on('mouseenter',function(){
			$(this).css('color','red').siblings().css('color','#000');
			$('.bannerb1').eq(k).addClass('bannerb2').siblings().removeClass('bannerb2');
			$('#borderba').stop(true).animate({'left':90*k},400);
		});
		
	});
	
	/*上下抖动*/
	$('#hotstoret1 div a').each(function(k,v){
		$(v).children('img').on('mouseenter',function(){
			$(this).animate({'top':20},100).animate({'top':32},100).animate({'top':24},100).animate({'top':32},100).animate({'top':28},100).animate({'top':32},100);
		});
		$(v).children('img').on('mouseleave',function(){
			$(this).stop().animate({'top':32},100);
		});
	});
	
	
	
	
	/*rem 中a标题运动*/
	$('#recommend>div>a').each(function(k,v){
		
		$(v).eq(5).off();
		$(v).on('mouseenter',function(){
			$(this).css('color','red').siblings().css('color','#000');
			$('#recommend>div>a').has('span').css('color','red');
			$('.remd').eq(k).addClass('remd2').siblings().removeClass('remd2');
			
			if ($(this).index()>4) {
				k=4;
				
				$(this).prev().css('color','red');
			}
			
			$('#rmd').stop(true).animate({'left':202*k},200);
			
		});
		
	});
	var $k=0, $remdinterval = null;
	$('.remd4').on('mouseenter',function(){
		$('.remd4').children('div').eq(1).css({'display':'block'});
		clearInterval($remdinterval);
	});
	$('.remd4 #remdleft').on('click',function(){
			$k = $k-1;
			if ($k<0) {
				$k=2;
			}
			$('.remd4').children('div').eq(0).children('a').eq($k).animate({'opacity':1},500).siblings().animate({'opacity':0},0);
		});
		$('.remd4 #remdright').on('click',function(){
			$k = $k+1;
			if ($k>2) {
				$k=0;
			}
			$('.remd4').children('div').eq(0).children('a').eq($k).animate({'opacity':1},500).siblings().animate({'opacity':0},0);
		});
	$('.remd4').on('mouseleave',function(){
		$('.remd4').children('div').eq(1).css('display','none');
		automove($k);
	});
	automove();
	function automove(){
		$remdinterval = setInterval(function(){
			$k++;
			if ($k>2) {
				$k=0;
			}
			$('.remd4').children('div').eq(0).children('a').eq($k).animate({'opacity':1},2000).siblings().animate({'opacity':0},2000);
		},2000);
	}
	
	
	/*这是1f 食品*/
	$('.food .foodtop p a').each(function(k,v){
		$(v).on('mouseenter',function(){
			$(this).addClass('a').siblings().removeClass('a');
			$('.food1').eq($(this).index()).addClass('abs2').siblings().removeClass('abs2');
		});
		$('.food1').on('mouseenter',function(){
			$('.food .foodtop p a').eq($(this).index()).addClass('a').siblings().removeClass('a');
		});
	});
	
	/*这是商标1*/
	var $f=0;
	var $length = $('#icon ul li').length;
	$('#icon #icondrtleft').on('click',function(){
			$f= $f-1;
			
			if ($f<0) {
				$f=0;
			}
			$('#icon ul').animate({'left':-120*$f},1000);
		});
	$('#icon #icondrtright').on('click',function(){
			$f = $f+1;
			console.log($length);
			if ($f>=($length-10)) {
				console.log(1);
				$f = $length-10;
			}
			$('#icon ul').animate({'left':-120*$f},1000);
		});	
	
	/*这是2f的服装*/
	$('.clothing .clothingtop p a').each(function(k,v){
		$(v).on('mouseenter',function(){
			$(this).addClass('a').siblings().removeClass('a');
			$('.clothing1').eq($(this).index()).addClass('abs2').siblings().removeClass('abs2');
		});
		$('.clothing1').on('mouseenter',function(){
			$('.clothing .clothingtop p a').eq($(this).index()).addClass('a').siblings().removeClass('a');
		});
	});
	
	
	/*这是商标2*/
	var $d=0;
	var $length2 = $('#icon2 ul li').length;
	$('#icon2 #icon2drtleft').on('click',function(){
			$d= $d-1;
			
			if ($d<0) {
				$d=0;
			}
			$('#icon2 ul').animate({'left':-120*$d},1000);
		});
	$('#icon2 #icon2drtright').on('click',function(){
			$d = $d+1;
			console.log($length2);
			if ($d>=($length2-10)) {
				console.log(1);
				$d = $length2-10;
			}
			$('#icon2 ul').animate({'left':-120*$d},1000);
		});
		
		
		
	/*这是3f的服装*/
	$('.makeup .makeupgtop p a').each(function(k,v){
		
		$(v).on('mouseenter',function(){
			$(this).addClass('a').siblings().removeClass('a');
			$('.makeup1').eq($(this).index()).addClass('abs2').siblings().removeClass('abs2');
		});
		$('.makeup1').on('mouseenter',function(){
			$('.makeup .makeuptop p a').eq($(this).index()).addClass('a').siblings().removeClass('a');
		});
	});
	
	/*这是商标3*/
	var $a3=0;
	var $length3 = $('#icon3 ul li').length;
	$('#icon3 #icon3drtleft').on('click',function(){
			$a3= $a3-1;
			
			if ($a3<0) {
				$a3=0;
			}
			$('#icon3 ul').animate({'left':-120*$a3},1000);
		});
	$('#icon3 #icon3drtright').on('click',function(){
			$a3 = $a3+1;
			console.log($a3);
			if ($a3>=($length3-10)) {
				
				$a3 = $length3-10;
			}
			$('#icon3 ul').animate({'left':-120*$a3},1000);
		});
		
	
	/*这是4F 手机数码*/
	$('.phone .phonetop p a').each(function(k,v){
		$(v).on('mouseenter',function(){
			$(this).addClass('a').siblings().removeClass('a');
			$('.phone1').eq($(this).index()).addClass('abs2').siblings().removeClass('abs2');
		});
		$('.phone').on('mouseenter',function(){
			$('.phone .phonetop p a').eq($(this).index()).addClass('a').siblings().removeClass('a');
		});
	});
	
	/*这是商标4*/
	var $a4=0;
	var $length4 = $('#icon4 ul li').length;
	$('#icon4 #icon4drtleft').on('click',function(){
			$a4= $a4-1;
			
			if ($a4<0) {
				$a4=0;
			}
			$('#icon4 ul').animate({'left':-120*$a4},1000);
		});
	$('#icon4 #icon4drtright').on('click',function(){
			$a4 = $a4+1;
			
			if ($a4>=($length4-10)) {
				console.log(1);
				$a4 = $length4-10;
			}
			$('#icon4 ul').animate({'left':-120*$a4},1000);
		});
		
	
	
	/*这是5F 家用电器*/
	$('.home .hometop p a').each(function(k,v){
		$(v).on('mouseenter',function(){
			$(this).addClass('a').siblings().removeClass('a');
			$('.home1').eq($(this).index()).addClass('abs2').siblings().removeClass('abs2');
		});
		$('.home').on('mouseenter',function(){
			$('.home .hometop p a').eq($(this).index()).addClass('a').siblings().removeClass('a');
		});
	});
	/*这是商标5*/
	var $a5=0;
	var $length5 = $('#icon5 ul li').length;
	$('#icon5 #icon5drtleft').on('click',function(){
			$a5= $a5-1;
			
			if ($a5<0) {
				$a5=0;
			}
			$('#icon5 ul').animate({'left':-120*$a5},1000);
		});
	$('#icon5 #icon5drtright').on('click',function(){
			$a5 = $a5+1;
			
			if ($a5>=($length5-10)) {
				console.log(1);
				$a5 = $length5-10;
			}
			$('#icon5 ul').animate({'left':-120*$a5},1000);
		});
	
	
	
	/*这是6F 家用日用*/
	$('.homeday .homedaytop p a').each(function(k,v){
		$(v).on('mouseenter',function(){
			$(this).addClass('a').siblings().removeClass('a');
			$('.homeday1').eq($(this).index()).addClass('abs2').siblings().removeClass('abs2');
		});
		$('.homeday').on('mouseenter',function(){
			$('.homeday .homedaytop p a').eq($(this).index()).addClass('a').siblings().removeClass('a');
		});
	});
	/*这是商标6*/
	var $a6=0;
	var $length6 = $('#icon6 ul li').length;
	$('#icon6 #icon6drtleft').on('click',function(){
			$a6= $a6-1;
			
			if ($a6<0) {
				$a6=0;
			}
			$('#icon6 ul').animate({'left':-120*$a5},1000);
		});
	$('#icon6 #icon6drtright').on('click',function(){
			$a6 = $a6+1;
			
			if ($a6>=($length6-10)) {
				console.log(1);
				$a6 = $length6-10;
			}
			$('#icon6 ul').animate({'left':-120*$a6},1000);
		});
		
		
		
	
	/*这是7F 酒水饮料*/
	$('.wine .winetop p a').each(function(k,v){
		$(v).on('mouseenter',function(){
			$(this).addClass('a').siblings().removeClass('a');
			$('.wine1').eq($(this).index()).addClass('abs2').siblings().removeClass('abs2');
		});
		$('.wine').on('mouseenter',function(){
			$('.wine .winetop p a').eq($(this).index()).addClass('a').siblings().removeClass('a');
		});
	});
	/*这是商标7*/
	var $a7=0;
	var $length7 = $('#icon7 ul li').length;
	$('#icon7 #icon7drtleft').on('click',function(){
			$a7= $a7-1;
			
			if ($a7<0) {
				$a7=0;
			}
			$('#icon7 ul').animate({'left':-120*$a7},1000);
		});
	$('#icon7 #icon7drtright').on('click',function(){
			$a7 = $a7+1;
			
			if ($a7>=($length7-10)) {
				console.log(1);
				$a7 = $length7-10;
			}
			$('#icon7 ul').animate({'left':-120*$a7},1000);
	});
	
	
	/*这是8F 母婴用品*/
	$('.mother .mothertop p a').each(function(k,v){
		$(v).on('mouseenter',function(){
			$(this).addClass('a').siblings().removeClass('a');
			$('.mother1').eq($(this).index()).addClass('abs2').siblings().removeClass('abs2');
		});
		$('.mother').on('mouseenter',function(){
			$('.mother .mothertop p a').eq($(this).index()).addClass('a').siblings().removeClass('a');
		});
	});
	/*这是商标8*/
	var $a8=0;
	var $length8 = $('#icon8 ul li').length;
	$('#icon8 #icon8drtleft').on('click',function(){
			$a8= $a8-1;
			
			if ($a8<0) {
				$a8=0;
			}
			$('#icon8 ul').animate({'left':-120*$a8},1000);
		});
	$('#icon8 #icon8drtright').on('click',function(){
			$a8 = $a8+1;
			
			if ($a8>=($length8-10)) {
				
				$a8 = $length8-10;
			}
			$('#icon8 ul').animate({'left':-120*$a8},1000);
		});
		
	
	//这是左侧的边栏
	
	$(window.document).scroll(function(){
		var $stop = $(document).scrollTop();
		console.log($('#contentbox').offset().top);
		if ($stop>=$('.food').offset().top) {
			$('#a1').css({'display':'block','left':$('#contentbox').offset().left});
		}else{
			$('#a1').css('display','none');
		}
		if ($stop>=$('.food').offset().top&&$stop<$('.clothing').offset().top) {
			$('#a1').children('a').eq(0).addClass('ala').siblings().removeClass('ala');
		}
		if ($stop>=$('.clothing').offset().top&&$stop<$('.makeup').offset().top) {
			$('#a1').children('a').eq(1).addClass('ala').siblings().removeClass('ala');
		}
		if ($stop>=$('.makeup').offset().top&&$stop<$('.phone').offset().top) {
			$('#a1').children('a').eq(2).addClass('ala').siblings().removeClass('ala');
		}
		if ($stop>=$('.phone').offset().top&&$stop<$('.home').offset().top) {
			$('#a1').children('a').eq(3).addClass('ala').siblings().removeClass('ala');
		}
		if ($stop>=$('.home').offset().top&&$stop<$('.homeday').offset().top) {
			$('#a1').children('a').eq(4).addClass('ala').siblings().removeClass('ala');
		}
		if ($stop>=$('.homeday').offset().top&&$stop<$('.wine').offset().top) {
			$('#a1').children('a').eq(5).addClass('ala').siblings().removeClass('ala');
		}
		if ($stop>=$('.wine').offset().top&&$stop<$('.mother').offset().top) {
			$('#a1').children('a').eq(6).addClass('ala').siblings().removeClass('ala');
		}
		if ($stop>=$('.mother').offset().top) {
			$('#a1').children('a').eq(7).addClass('ala').siblings().removeClass('ala');
		}
	});

	$('#a1 a').eq(0).click(function(){
		
		$('#a1 a').eq(0).addClass('ala').siblings().removeClass('ala');
		$('html,body').animate({'scrollTop':$('.food').offset().top+1},100);
	});
	$('#a1 a').eq(1).click(function(){
		
		$('#a1 a').eq(1).addClass('ala').siblings().removeClass('ala');
		$('html,body').animate({'scrollTop':$('.clothing').offset().top+1},100);
	});
	$('#a1 a').eq(2).click(function(){
		
		$('#a1 a').eq(2).addClass('ala').siblings().removeClass('ala');
		$('html,body').animate({'scrollTop':$('.makeup').offset().top+1},100);
	});
	$('#a1 a').eq(3).click(function(){
		
		$('#a1 a').eq(3).addClass('ala').siblings().removeClass('ala');
		$('html,body').animate({'scrollTop':$('.phone').offset().top+1},100);
	});
	$('#a1 a').eq(4).click(function(){
		
		$('#a1 a').eq(4).addClass('ala').siblings().removeClass('ala');
		$('html,body').animate({'scrollTop':$('.home').offset().top+1},100);
	});
	$('#a1 a').eq(5).click(function(){
		
		$('#a1 a').eq(5).addClass('ala').siblings().removeClass('ala');
		$('html,body').animate({'scrollTop':$('.homeday').offset().top+1},100);
	});
	$('#a1 a').eq(6).click(function(){
		
		$('#a1 a').eq(6).addClass('ala').siblings().removeClass('ala');
		$('html,body').animate({'scrollTop':$('.wine').offset().top+1},100);
	});
	$('#a1 a').eq(7).click(function(){
		
		$('#a1 a').eq(7).addClass('ala').siblings().removeClass('ala');
		$('html,body').animate({'scrollTop':$('.mother').offset().top+1},100);
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
	
	$('#a3 #a3a a').click(function(){
		$('#a3').css('display','none');
	});
	
	/*图层模板*/
	$('#a4 #a4a h1 a').click(function(){
		$('#a4').css("display",'none');
	});
	
	
	
	
	
	
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
});
