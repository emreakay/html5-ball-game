// JavaScript Document
// taslar[0].x
//window.onload(function(){
n=5
tas = new Array();
	for (var i = 0; i <= n; i++){
	 
	 tas[i] = new Array()
	  
	}




//1. bölüm



for (var i=1; i <= 13; i++) {

	tas[1][i] = new Object()
	tas[1][i].x = 40 * i
	tas[1][i].y = 100
	tas[1][i].hak = i%2+1

}

for (var i=14; i <= 26; i++) {

	tas[1][i] = new Object()
	tas[1][i].x = 40 * (i-13)
	tas[1][i].y = 115
	tas[1][i].hak = 3

}

for (var i=27; i <= 39; i++) {

	tas[1][i] = new Object()
	tas[1][i].x = 40 * (i-26)
	tas[1][i].y = 130
	tas[1][i].hak = i%2

}










///////////////////////
// 2. bölüm






for (var i=1; i <= 13; i++) {

	tas[2][i] = new Object()
	tas[2][i].x = 40 * i
	tas[2][i].y = 100
	tas[2][i].hak = i%2+2

}

for (var i=14; i <= 26; i++) {

	tas[2][i] = new Object()
	tas[2][i].x = 40 * (i-13)
	tas[2][i].y = 115
	tas[2][i].hak = 1

}

for (var i=27; i <= 39; i++) {

	tas[2][i] = new Object()
	tas[2][i].x = 40 * (i-26)
	tas[2][i].y = 130
	tas[2][i].hak = i%2+1

}








///////////////////////////
//3. bölüm



for (var i=1; i <= 5; i++) {

	tas[3][i] = new Object()
	tas[3][i].x = 40 * (i+4)
	tas[3][i].y = 55
	tas[3][i].hak = i%2+2

}

for (var i=6; i <= 14; i++) {

	tas[3][i] = new Object()
	tas[3][i].x = 40 * (i-3)
	tas[3][i].y = 70
	tas[3][i].hak = i%2+1

}

for (var i=15; i <= 27; i++) {

	tas[3][i] = new Object()
	tas[3][i].x = 40 * (i-14)
	tas[3][i].y = 85
	tas[3][i].hak = i%2+1

}

for (var i=28; i <= 36; i++) {

	tas[3][i] = new Object()
	tas[3][i].x = 40 * (i-25)
	tas[3][i].y = 100
	tas[3][i].hak = i%2+1

}

for (var i=37; i <= 41; i++) {

	tas[3][i] = new Object()
	tas[3][i].x = 40 * (i-32)
	tas[3][i].y = 115
	tas[3][i].hak = 1

}

for (var i=42; i <= 46; i++) {

	tas[3][i] = new Object()
	tas[3][i].x = 40 * (i-37)
	tas[3][i].y = 130
	tas[3][i].hak = (i+1)%2

}

for (var i=47; i <= 50; i++) {

	tas[3][i] = new Object()
	tas[3][i].x = 40 * (i-42)
	tas[3][i].y = 145
	tas[3][i].hak = (i+1)%2

}








/*

tas[1]=new Object()
tas[1].x=80
tas[1].y=100
tas[1].hak=3


tas[2]=new Object()
tas[2].x=80
tas[2].y=115
tas[2].hak=2		
	
*/	

//})


//alert()
