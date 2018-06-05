window.onload = function(){
	        	var otp = document.getElementsByClassName('tp'),
	        	ofang = document.getElementsByClassName('fang'),
	        	opig = document.getElementsByClassName('pig'),
	        	oimgs = document.getElementById("imgs");
	        otp.onmousemove = function (e) {
	            var evt = e || window.event;
				
	            ofang.style.display = "block";
	            opig.style.display = "block";
	
	            var x = evt.pageX - otp.offsetLeft - ofang.offsetWidth/2;
	            var y = evt.pageY - otp.offsetTop - ofang.offsetHeight/2;
	            if(x <= 0){
	                x = 0;
	            }
	            if(x >= otp.offsetWidth - ofang.offsetWidth){
	                x = otp.offsetWidth - ofang.offsetWidth;
	            }
	            if(y <= 0){
	                y = 0;
	            }
	            if(y >= otp.offsetHeight - ofang.offsetHeight){
	                y = otp.offsetHeight - ofang.offsetHeight;
	            }
	            ofang.style.left = x + "px";
	            ofang.style.top = y + "px";
	
	            oimgs.style.left = -ofang.offsetLeft/otp.offsetWidth * oimgs.offsetWidth +"px";
	            oimgs.style.top = -ofang.offsetTop/otp.offsetHeight * oimgs.offsetHeight +"px";
	        }
	        otp.onmouseout = function () {
	           ofang.style.display = "none";
	           opig.style.display = "none";
	        }
	        
}