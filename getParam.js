function getParam(x) {
	var paramArray=window.location.search.replace("?","");
	paramArray=paramArray.replaceAll("=","&");
	paramArray=paramArray.split("&");
	if (paramArray.includes(x))
	if (!(paramArray.indexOf(x)%2))
		return paramArray[paramArray.indexOf(x)+1];
}