$(function(){
	$('#right p>a').each(function(k,v){
		$(v).mouseenter(function(){
			$(this).addClass('a').siblings().removeClass('a');
			$('form').eq($(this).index()).addClass('form3').siblings().removeClass('form3');
		});
	});
	
	$('#content #left').animate({'left':"180px"},1000);
	/*验证手机号码*/
	
	/*$('#tel').focus(function(){
		$('.tel').css({'display':'none'});
	});
	$('#tel').blur(function(){
		var otel = $('#tel').val();
		
		
		let reg = /^1[0-9]{10}$/;
		if (!(reg.test(otel))) {
			$('.tel').css({'display':'block'});
			$('.tel').text("手机号码格式不正确，请输入11位手机号!")
			
		}
	});

	$('#password1').focus(function(){
		$('.password1').css({'display':'none'});
	});
	$('#password1').blur(function(){
		var opassword1 = $('#password1').val();
		let reg=/^[a-zA-Z0-9]{6,21}$/;
		if (!(reg.test(opassword1))) {
			$('.password1').css({'display':'block'});
			$('.password1').text("密码格式不正确，请输入6-21位由数字和英文字母组成！<br />")
		}
	});
	
	
	$('#password12').focus(function(){
		$('.password12').css({'display':'none'});
	});
	$('#password12').blur(function(){
		var opassword12 = $('#password12').val();
		var opassword1 = $('#password1').val();
		if (opassword12!==opassword1) {
			$('.password12').css({'display':'block'});
			$('.password12').text("密码格式不正确，请输入6-21位由数字和英文字母组成！<br />")
		}
	});
	
	
	
	/*验证邮箱*/
	
	/*$('#email').focus(function(){
		$('.email').css({'display':'none'});
	});
	$('#email').blur(function(){
		var oemail = $('#email').val();
		
		
		let reg = /^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;
		if (!(reg.test(oemail))) {
			$('.email').css({'display':'block'});
			$('.email').text("邮箱不存在")
		}
	});

	$('#password2').focus(function(){
		$('.password2').css({'display':'none'});
	});
	$('#password2').blur(function(){
		var opassword2 = $('#password2').val();
		let reg=/^[a-zA-Z0-9]{6,21}$/;
		if (!(reg.test(opassword2))) {
			$('.password2').css({'display':'block'});
			$('.password2').text("密码格式不正确，请输入6-21位由数字和英文字母组成！<br />")
		}
	});
	
	
	$('#password22').focus(function(){
		$('.password22').css({'display':'none'});
	});
	$('#password22').blur(function(){
		var opassword22 = $('#password22').val();
		var opassword2 = $('#password2').val();
		if (opassword22!==opassword2) {
			$('.password22').css({'display':'block'});
			$('.password22').text("密码格式不正确，请输入6-21位由数字和英文字母组成！<br />")
		}
	});}*/
	
/*1、验证邮箱的正则表达式：
  if(!(/^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/.test(email))){  
	  str += "邮箱格式不正确<br />"; 
	  
}*/


	function yanzhengma(){
		/*随机生成4位验证码*/
		/*step1:将所有字母，数字装入一个数组备用*/
		var codes=[];
		//数字:48-57;unicode编码
		for(var i=48;i<57;codes.push(i),i++);
		/*console.log(codes);*/
		//大写字母:65-90;unicode编码
		for(var i=60;i<90;codes.push(i),i++);
		//小写字母:97-122;unicode编码
		for(var i=97;i<122;codes.push(i),i++);
		var arr=[];
		for(var i=0;i<4;i++) {   //从0-61之间取随机数
			var index = Math.floor(Math.random() * (61 - 0 + 1) + 0);
			var char = String.fromCharCode(codes[index]);
			arr.push(char);
		}
		/*console.log(arr);*/
		var code=arr.join("");
		return code
	}
	
	var yanzheng = true;
	$(".yan_btn").css({"display":"none"})
		$(".huoqu").on("click",function(){
			console.log(yanzheng)
			$(".yan_btn").css({"display":"block"})
			if(yanzheng){
				yanzheng = false;
				$(this).css({"background":"#ccc"})
				$(".yan_btn").text(yanzhengma())			
				var a = 60;
				var timee = setInterval(function(){
					a--;
					console.log(a)
					$(".huoqu").text(a);
					if(a<=0){
						$(".huoqu").text("获取验证码");
						$(".huoqu").css({"background":"#F44444"})
						yanzheng = true;
						clearInterval(timee)
						
					}
				},1000)
				
			}
		})
	
	

	$('#tel').focus(function(){
		$('.tel').css({'display':'none'});
	});
	$('#password1').focus(function(){
		$('.password1').css({'display':'none'});
	});
	$('#password12').focus(function(){
		$('.password12').css({'display':'none'});
	});
	$(".join").on("click",function(){
	 	var opassword1 = $('#password1').val();
	 	var opassword12 = $('#password12').val();
	 	var otel = $('#tel').val();
		var reg1 = /^1[0-9]{10}$/;
		var reg=/^[a-zA-Z0-9]{6,21}$/;
		if (!(reg1.test(otel))) {
			$('.tel').css({'display':'block'});
			$('.tel').text("手机号码格式不正确，请输入11位手机号!")
			
		}else if (!(reg.test(opassword1))) {
			$('.tel').css({'display':'none'});
			$('.password1').css({'display':'block'});
			$('.password1').text("密码格式不正确，请输入6-21位由数字和英文字母组成！<br />")
		}else if (opassword12!==opassword1) {
			$('.password1').css({'display':'none'});
			$('.password12').css({'display':'block'});
			$('.password12').text("密码格式不正确，请输入6-21位由数字和英文字母组成！<br />")
		}else{
			$('.password12').css({'display':'none'});
			var user = {"eno": otel,"password":opassword1}
			axios.post("http://189293b2e7.imwork.net:37381/employee/login",user).then(function(res){
				console.log(res);
				if(res.data!=0){
					window.location.href = "./login.html";
				}
			})
			// axios.get("http://189293b2e7.imwork.net:37381/employee/add?name="+otel+"&password="+opassword1+"").then(function(res){
			// 	//console.log(res.data) 
			// 	if(res.data!=0){
			// 		 window.location.href = "./login.html";
			// 	 }
			// })
		}
	})


	$('#email').focus(function(){
		$('.email').css({'display':'none'});
	});
	$('#password2').focus(function(){
		$('.password2').css({'display':'none'});
	});
	$('#password22').focus(function(){
		$('.password22').css({'display':'none'});
	});
	$(".join2").on("click",function(){
		var oemail = $('#email').val();
		var opassword2 = $('#password2').val();
		var opassword22 = $('#password22').val();
		var reg3 = /^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;
		let reg4=/^[a-zA-Z0-9]{6,21}$/;
		if (!(reg3.test(oemail))) {
			$('.email').css({'display':'block'});
			$('.email').text("邮箱不存在")
		}else if(!(reg4.test(opassword2))){
			$('.email').css({'display':'none'});
			$('.password2').css({'display':'block'});
			$('.password2').text("密码格式不正确，请输入6-21位由数字和英文字母组成！<br />")
		}else if (opassword22!==opassword2) {
			$('.password2').css({'display':'none'});
			$('.password22').css({'display':'block'});
			$('.password22').text("密码格式不正确，请输入6-21位由数字和英文字母组成！<br />")
		}else{
			$('.password22').css({'display':'none'});
			alert("bbbb")
		}
	})
});