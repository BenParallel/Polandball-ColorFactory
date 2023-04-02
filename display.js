var interval = setInterval(dp,10);
function dp(){
	document.getElementById('paint').innerHTML = '你有 '+paint[0].toString()+'白  '+paint[1].toString()+'红 '	+paint[2].toString()+'黄 '+paint[3].toString()+'蓝 '+paint[4].toString()+'黑';
	document.getElementById('money').innerHTML = '钱'+money;
	document.getElementById('polandh3').innerHTML = '你有 '+num[0].toString()+'只波兰球';
	document.getElementById('franceh3').innerHTML = '你有 '+num[1].toString()+'只法国球';
	document.getElementById('germanh3').innerHTML = '你有 '+num[2].toString()+'只德国球';
	document.getElementById('polandtime').innerHTML = '购买冷却时间 '+time[0].toString()+'秒';
	document.getElementById('francetime').innerHTML = '购买冷却时间 '+time[1].toString()+'秒';
	document.getElementById('germantime').innerHTML = '购买冷却时间 '+time[2].toString()+'秒';
}