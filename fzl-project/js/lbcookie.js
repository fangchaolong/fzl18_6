$(function(){
	var oList = document.getElementById('sq');
	var aAddBtn = oList.getElementsByClassName("gg")
	//console.log(aAddBtn)
	console.log($(".gg"))
	for(var i = 0; i < aAddBtn.length; i++) {
		$(aAddBtn[i]).on("click",function () {
			console.log("adasdasasd")
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
			console.log(getCookie('goods'))
			
			var bBtn = true;// 假设当前商品没有被添加过
			if(aGoods === undefined) {
				// cookie直接存一个数组[{}, {}]
				console.log("111")
				aGoods = [];
			} else {
		  //	JSON转为对象
		  console.log("2222")
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
				console.log("3333")
				aGoods.push(oGoods);
			}
			

			// 写入cookie
			setCookie('goods', JSON.stringify(aGoods), 7, '/');
		});
	}
})
	