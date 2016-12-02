function getTime()
{
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	
	var strh= h<10 ? "0"+h : h;
	var strm = m<10 ? "0"+m : m;
	
	var currentTimeStr = strh + ":" +strm;
	return currentTimeStr;
}