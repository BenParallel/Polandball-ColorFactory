var tab1 = document.getElementById('mainpage');
var tab2 = document.getElementById('shoppage');
tab1.style.display='block';
tab2.style.display='none';
document.getElementById("buy").onclick = function(){
	tab1.style.display='block';
	tab2.style.display='none';
};
document.getElementById("shop").onclick = function(){
	tab1.style.display='none';
	tab2.style.display='block';
};