window.onload = function () {
	// 获取list
	oList = document.getElementById('list');

	// 读取cookie
	var sGoods = getCookie('goods');

	var aGoods = JSON.parse(sGoods);
	

	// 渲染数据
	for(var i = 0; i < aGoods.length; i++) {
		var otr = document.createElement('tr');
		
		otr.innerHTML = `<td align="center" width="5%"><input type="checkbox" checked="checked"></td><td align="center" width="40%"><img src="${aGoods[i].url}"><a href="javascript:;"> ${aGoods[i].title}</a></td>
		<td align="center" width="15%" class="there"><a href="javascript:;">-</a><input type="text" value="${aGoods[i].num}"><a href="javascript:;">+</a></td><td align="center" width="15%"> ${aGoods[i].price} </td>
		<td align="center" width="15%"> ${aGoods[i].price} </td><td align="center" width="10%" data-id='${aGoods[i].id}' class="scc">删除</td>`;
		//oLi.innerHTML = '<a href="javascript:;">移除该商品</a><img src="' + aGoods[i].url +'" alt=""><div class="title">' + aGoods[i].title +'</div><div class="price">' + aGoods[i].price +'元,' + aGoods[i].num +'个</div>';
		oList.appendChild(otr);
		
		
		
		var obtn = oList.getElementsByClassName('scc');
	
	for (var i = 0;i<obtn.length;i++) {
		obtn[i].onclick = function(){
			var sGoods = getCookie("goods");
			var aGoods = JSON.parse(sGoods);
			var btn = this.getAttribute("data-id");
			for (var j = 0;j<aGoods.length;j++) {
				if (btn===aGoods[j].id) {
					if(aGoods[j].num==1) {
						aGoods.splice(j,1);
					}else if (aGoods[j].num>1) {
						aGoods[j].num--;
					}
				}
			}
			setCookie('goods', JSON.stringify(aGoods), 7, '/');
		};
	}
			
		
	}
};