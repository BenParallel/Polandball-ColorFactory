var interval = setInterval(loop,1000);
var money=0;
var time=[0,0,0];
var paint=[1,1,0,0,0];
var num=[0,0,0];
function update(){
	if(time[0]>0){
		time[0]--;
	}
	if(time[1]>0){
		time[1]--;
	}
	if(time[2]>0){
		time[2]--;
	}	
}
document.getElementById("poland").onclick = function(){
	if(paint[0]>=1&&paint[1]>=1&&time[1]<=0){
		num[0]++;
		paint[0]=paint[0]-1;
		paint[1]=paint[1]-1;
		time[0]=2;
	}	
};

document.getElementById("france").onclick = function(){
	if(paint[0]>=1&&paint[1]>=1&&paint[3]>=1&&time[1]<=0){
		num[1]++;
		paint[0]=paint[0]-1;
		paint[1]=paint[1]-1;
		paint[3]=paint[3]-1;
		time[1]=2;
	}	
};

document.getElementById("german").onclick = function(){
	if(paint[4]>=1&&paint[1]>=1&&paint[2]>=1&&time[2]<=0){
		num[2]++;
		paint[2]=paint[2]-1;
		paint[1]=paint[1]-1;
		paint[4]=paint[4]-1;
		time[2]=5;
	}	
};
document.getElementById("spend_white").onclick = function(){//卖出:while
	if(paint[0]>=1){
		paint[0]=paint[0]-1;
		money+=1;
	}
	
};
document.getElementById("spend_red").onclick = function(){//卖出:red
	if(paint[1]>=1){
		paint[1]=paint[1]-1;
		money+=5;
	}
	
};
document.getElementById("spend_yellow").onclick = function(){//卖出:yellow
	if(paint[2]>=1){
		paint[2]=paint[2]-1;
		money+=20;
	}
	
};
document.getElementById("spend_blue").onclick = function(){//卖出:blue
	if(paint[3]>=1){
		paint[3]=paint[3]-1;
		money+=200;
	}
	
};

document.getElementById("spend_black").onclick = function(){//卖出:blue
	if(paint[4]>=1){
		paint[4]=paint[4]-1;
		money+=2000;
	}
	
};

document.getElementById("buy_white").onclick = function(){//卖入:while
	if(money>=1){
		paint[0]=paint[0]+1;
		money-=1;
	}
	
};

document.getElementById("buy_red").onclick = function(){//卖入:red
	if(money>=5){
		paint[1]=paint[1]+1;
		money-=5;
	}
	
};

document.getElementById("buy_yellow").onclick = function(){//卖入:yellow
	if(money>=20){
		paint[2]=paint[2]+1;
		money-=20;
	}
	
};

document.getElementById("buy_blue").onclick = function(){//卖入:blue
	if(money>=200){
		paint[3]=paint[3]+1;
		money-=200;
	}
	
};

document.getElementById("buy_black").onclick = function(){//卖入:blue
	if(money>=2000){
		paint[4]=paint[4]+1;
		money-=2000;
	}
	
};

function add(){
	paint[0]=paint[0]+num[0];
	paint[1]=paint[1]+num[1];
	paint[2]=paint[2]+num[2];
}



function loop(){
	add();
	update();
}

