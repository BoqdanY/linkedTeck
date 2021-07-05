let burg = document.getElementById('burg');
let burger = document.getElementById('burger');
let a = 0;



function bug(){
	if (a == 0){
		burger.style.opacity = "1";
		a +=1;
		console.log("112");
	}else{
		burger.style.opacity = "0";
		a -= 1;
		console.log("11");
	}
}