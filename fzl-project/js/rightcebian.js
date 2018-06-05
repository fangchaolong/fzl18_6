$(function(){
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
});
