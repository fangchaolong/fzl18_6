// 添加、修改cookie
function setCookie(sName, sValue, iDay, path) {

	var oDate = new Date();
	oDate.setDate(oDate.getDate() + iDay);
	document.cookie = sName + '=' + encodeURIComponent(sValue) + ';expires=' + oDate + ';path=' + path;
}


// 查询cookie
function getCookie(sName) {
	var sCookie = document.cookie;
	var aCookie = sCookie.split('; ');

	for(var i = 0; i < aCookie.length; i++) {
		var aTemp = aCookie[i].split('=');
		if(aTemp[0] === sName) {
			return decodeURIComponent(aTemp[1]);
		}
	}
}

// 删除cookie
function removeCookie(sName, path) {
	document.cookie = sName + '=;expires=-1;path=' + path;
};