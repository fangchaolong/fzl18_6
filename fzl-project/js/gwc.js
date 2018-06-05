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
	
	
	
	$('.scc').on("click",function(){
		$(this).parent().remove();
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
	
	
	var _user = JSON.parse(localStorage.getItem("user"));

	
	axios.get("http://189293b2e7.imwork.net:37381/user/getOrders?uid="+_user["eno"]+"").then(function(data){
		var _data = data.data
		_data.map(function(item,index){
			var _item = item.product;
			var _msg = $(`<tr><td align="center" width="5%"><input type="checkbox" checked="checked"></td><td align="center" width="40%"><img src="${_item["imgUrl"]}"><a href="javascript:;"> ${_item["title"]}</a></td>
			<td align="center" width="15%" class="there"><a class="del" href="javascript:;">-</a><input class="amount" type="text" value="${item["amount"]}"><a class="add" href="javascript:;">+</a></td><td class="price" align="center" width="15%"> ${_item["price"]} </td>
			<td class="price1" align="center" width="15%"> ${parseInt(_item["price"]*0.8)} </td><td align="center" width="10%" data-id='${_item["pid"]}' class="scc" style="cursor:pointer">删除</td></tr>`)
			$("#list").append(_msg);
		})
		var ff = 0;
		$(".price1").map(function(c,d){
			ff = parseFloat(ff) + parseFloat($(d).text());
		})
		$(".zj_price").text(ff)
		$(".add").map(function(a,b){
			var cc = $(".price").eq(a).text();
			$(b).on("click",function(){
				var aa = $(".amount").eq(a).val()
				var bb = parseInt(aa)+1;
				$(".amount").eq(a).val(bb)
				var dd = parseInt(cc)*bb;
				$(".price").eq(a).html(dd)
				$(".price1").eq(a).html(parseInt(dd*0.8))
				var ff = 0;
				$(".price1").map(function(c,d){
					ff = parseFloat(ff) + parseFloat($(d).text());
				})
				$(".zj_price").text(ff)
			})
		})
		$(".del").map(function(a,b){
			var cc = $(".price").eq(a).text();
			$(b).on("click",function(){
				var aa = $(".amount").eq(a).val()
				var bb = parseInt(aa)-1;
				if(bb<=0){
				}else{
					$(".amount").eq(a).val(bb)
					var dd = parseInt(cc)*bb;
					$(".price").eq(a).html(dd)
					$(".price1").eq(a).html(dd*0.8)
				}
				var ff = 0;
				$(".price1").map(function(c,d){
					ff = parseFloat(ff) + parseFloat($(d).text());
				})
				$(".zj_price").text(ff)
			})
		})
		$('.scc').on("click",function(){
			$(this).parent().remove();
			var ff = 0;
			$(".price1").map(function(c,d){
				ff = parseFloat(ff) + parseFloat($(d).text());
			})
			$(".zj_price").text(ff)
		});
	})
	
});
