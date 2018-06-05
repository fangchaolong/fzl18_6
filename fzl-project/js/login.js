var btn;
function checkboxOnclick(checkbox){
	if(checkbox.checked==true){
		btn = checkbox.checked;
		console.log(btn)
	}else{
		btn = checkbox.checked;
		console.log(btn)
	}
}
$(function(){
	var _user = JSON.parse(localStorage.getItem("user"));
	if(_user){
		$(".jizhu").attr("checked","checked")
		$('#user').val(_user["name"]);
		$('#pass').val(_user["password"]);

	}

	
	

	$('#content #left').animate({'left':"180px"},1000);
	
	
	/*验证手机号码*/
	
	// $('#user').focus(function(){
	// 	$('.user').css({'display':'none'});
	// });
	// $('#user').blur(function(){
	// 	var ouser = $('#user').val();
		
		
	// 	let reg = /^1[0-9]{10}$/;
	// 	if (!(reg.test(ouser))) {
	// 		$('.user').css({'display':'block'});
	// 		$('.user').text("手机号码格式不正确，请输入11位手机号!")
	// 	}
	// });

	// $('#pass').focus(function(){
	// 	$('.pass').css({'display':'none'});
	// });
	// $('#pass').blur(function(){
	// 	var opass = $('#pass').val();
	// 	let reg=/^[a-zA-Z0-9]{6,21}$/;
	// 	if (!(reg.test(opass))) {
	// 		$('.pass').css({'display':'block'});
	// 		$('.pass').text("密码格式不正确，请输入6-21位由数字和英文字母组成！")
	// 	}
	// });
	// function checkboxOnclick(checkbox){
	// 	if(checkbox.checked==true){
	// 		console.log("a")
	// 	}else{
	// 		console.log("b")
	// 	}
	// }

	
	 $(".login").on("click",function(){
	 	var ouser = $('#user').val();
	 	var opass = $('#pass').val();
	// 	var reg1 = /^1[0-9]{10}$/;
	// 	let reg2 = /^[a-zA-Z0-9]{6,21}$/;
	// 	if (!(reg1.test(ouser))) {
	// 		$('.user').css({'display':'block'});
	// 		$('.user').text("手机号码格式不正确，请输入11位手机号!")
	// 	}else if(!(reg2.test(opass))) {
	// 		$('.user').css({'display':'none'});
	// 		$('.pass').css({'display':'block'});
	// 		$('.pass').text("密码格式不正确，请输入6-21位由数字和英文字母组成！")
	// 	}else{
	// 		$('.pass').css({'display':'none'});

			var user = {"eno": ouser,"password":opass}
			



			axios.get("http://189293b2e7.imwork.net:37381/employee/login?eno="+ouser+"&password="+opass+"").then(function(res){
				 //console.log(res.data);
				 if(res.data.code==1){
					if(btn){
						localStorage.setItem("user",JSON.stringify(user));
						
					}
					localStorage.setItem("token",JSON.stringify(res.data.token));
					console.log(JSON.parse(localStorage.getItem("user"))["name"],JSON.parse(localStorage.getItem("user"))["password"])
					
					window.location.href = "index.html";
				}

				
				 
			})

		//}


	});

	$(".wangji").on("click",function(){
		localStorage.removeItem('user');
	})

});
