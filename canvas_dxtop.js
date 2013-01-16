window.addEventListener("load", doFirst, false)

Tahta = new Object()
Tahta.boy = 40
Tahta.sol = 0
Tahta.sag = Tahta.sol + Tahta.boy

Top = new Object()
Top.hizX = +1
Top.hizY = -3
Top.x = 50
Top.y = 50
Top.r = 4
Top.sol = ""
Top.sag = ""
Top.ust = ""
Top.alt = ""

Oyun = new Object()
Oyun.basladi = false
Oyun.zaman = "";
Oyun.x = 600
Oyun.y = 400
Oyun.can = 3
Oyun.puan = 0
Oyun.bolum = 1
Oyun.bolumsayisi = 3

tas = new Array()

function doFirst() {
	window.addEventListener("mousemove", tahtaYurut, false)
	//window.addEventListener("mousemove",oyunBaslat,false)
	Oyun.olay = window.addEventListener("click", oyunBaslat, false)

	alan = document.getElementById("alan")
	alanx = alan.getContext("2d")

	tahta = document.getElementById("tahta")
	tahtax = tahta.getContext("2d")

	taslar = document.getElementById("taslar")
	taslarx = taslar.getContext("2d")

	puan = document.getElementById("puan")
	puan.innerHTML = "Puan : " + Oyun.puan

	can = document.getElementById("can")
	can.innerHTML = "Can : " + Oyun.can

	tahtaYurut()
	tasDiz()

}

function topBaslat() {
	Oyun.basladi = true
	Top.x += Top.hizX
	Top.y += Top.hizY

	alanx.clearRect(0, 0, 600, 400)
	alanx.beginPath()
	alanx.arc(Top.x, Top.y, Top.r, 0, 2 * Math.PI)
	alanx.fill()

	topKontrol()
}

function tahtaYurut(e) {
	//her fare hareketinde tahtayı yeniden çizer
	tahtax.clearRect(0, 0, 600, 10)
	if ( typeof (e) == "undefined") {
		Tahta.sol = 200
		Tahta.sag = Tahta.sol + Tahta.boy
	} else {
		Tahta.sol = e.clientX - (Tahta.boy / 2)
		Tahta.sag = e.clientX + (Tahta.boy / 2)
	}

	tahtax.fillRect(Tahta.sol, 5, 40, 5)
	topYurut()
}

function topYurut() {

	if (Oyun.basladi == false) {

		Top.x = Tahta.sol + (Tahta.boy / 2)
		Top.y = 382

		alanx.clearRect(0, 0, 600, 400)
		alanx.beginPath()
		alanx.arc(Top.x, Top.y, Top.r, 0, 2 * Math.PI)
		alanx.fill()

	}

}

function oyunBaslat(e) {

	if (!Oyun.basladi) {
		Oyun.basladi = true
		Oyun.zaman = setInterval(topBaslat, 20)

		// top hız ayarlaması
		Top.hizX = +1
		Top.hizY = -3

	}

}

function topKontrol() {
	Top.sol = Top.x - Top.r
	Top.sag = Top.x + Top.r
	Top.ust = Top.y - Top.r
	Top.alt = Top.y + Top.r

	if (Top.sol <= 0 || Top.sag >= Oyun.x) {
		Top.hizX *= -1
	}
	if (Top.ust <= 0 || Top.alt >= Oyun.y) {
		Top.hizY *= -1
	}

	if (Top.alt >= Oyun.y - 15) {

		if (Tahta.sol <= Top.x && Top.x <= Tahta.sag) {
			//tahtayı tuttrunca
			Top.hizY *= -1

			if ((Top.x - Tahta.sol) < 9) {
				Top.hizX -= 6
			} else if ((Top.x - Tahta.sol) < 17) {
				Top.hizX -= 3
			} else if ((Top.x - Tahta.sol) < 25) {

			} else if ((Top.x - Tahta.sol) < 33) {
				Top.hizX += 3
			} else if ((Top.x - Tahta.sol) < 41) {
				Top.hizX += 6
			}

			//hız ayarlaması
			if (Top.hizX > 4)
				Top.hizX = 4
			else if (Top.hizX < -4)
				Top.hizX = -4
			//hız ayarlama son
			//interval ayar
			/*
			 if(Top.hizX==5 || Top.hizX==-5)
			 Oyun.zaman=setInterval(topBaslat,27)
			 else if(Top.hizX==4 || Top.hizX==-4)
			 Oyun.zaman=setInterval(topBaslat,25)
			 else if(Top.hizX==3 || Top.hizX==-3)
			 Oyun.zaman=setInterval(topBaslat,23)
			 else if(Top.hizX==2 || Top.hizX==-2)
			 Oyun.zaman=setInterval(topBaslat,21)
			 else
			 Oyun.zaman=setInterval(topBaslat,20)
			 */

		} else {
			//tahtayı tutturamassa
			yandi()

			/*
			 Oyun.basladi=false
			 tahtaYurut()
			 tasDiz()
			 */

		}
	}
	if (Top.ust <= 300) {
		//taslar kontrol

		carptimi()
	}

}

function tasDiz() {

	tassayisi = 0

	taslarx.clearRect(0, 0, 600, 600)

	for (ind in tas[Oyun.bolum]) {

		if (tas[Oyun.bolum][ind].hak > 0) {
			if (tas[Oyun.bolum][ind].hak == 1) {
				taslarx.fillStyle = 'orange'
			} else if (tas[Oyun.bolum][ind].hak == 2) {
				taslarx.fillStyle = 'blue'
			} else if (tas[Oyun.bolum][ind].hak >= 3) {
				taslarx.fillStyle = 'red'
			}

			taslarx.fillRect(tas[Oyun.bolum][ind].x, tas[Oyun.bolum][ind].y, 38, 13)
			tassayisi++

		}

		tas[Oyun.bolum][ind].alt = tas[Oyun.bolum][ind].y + 13
		tas[Oyun.bolum][ind].sag = tas[Oyun.bolum][ind].x + 38
	}

	if (tassayisi == 0) {
		bolumBitti()
	}

}

function carptimi() {

	for (ind in tas[Oyun.bolum]) {

		if (tas[Oyun.bolum][ind].alt >= Top.ust && tas[Oyun.bolum][ind].y <= Top.alt && tas[Oyun.bolum][ind].x <= Top.x && tas[Oyun.bolum][ind].sag >= Top.x && tas[Oyun.bolum][ind].hak > 0) {

			tas[Oyun.bolum][ind].hak--
			Top.hizY *= -1
			tasDiz()
			Oyun.puan++

		} else if (tas[Oyun.bolum][ind].alt >= Top.ust && tas[Oyun.bolum][ind].x <= Top.sag && tas[Oyun.bolum][ind].sag >= Top.sol && tas[Oyun.bolum][ind].y <= Top.alt && tas[Oyun.bolum][ind].hak > 0) {

			tas[Oyun.bolum][ind].hak--
			Top.hizX *= -1
			tasDiz()
			Oyun.puan++

		}

		puan.innerHTML = "Puan : " + Oyun.puan

	}

}

function yandi() {
	Oyun.basladi = false
	Oyun.can--
	if (Oyun.can < 1) {
		oyunBitti()
	} else {
		alert("yandin")
	}

	clearInterval(Oyun.zaman)
	tahtaYurut()
	can.innerHTML = "Can : " + Oyun.can
}

function oyunBitti() {

	taslarx.font = "bold 22px Tahoma"
	taslarx.textAlign = "start"
	taslarx.fillText("Oyun Bitti", 50, 50)
	//taslarx.fillText("Puan : " + Oyun.puan, 50, 80)
	clearInterval(Oyun.zaman)
	Oyun.olay = false

}

function bolumBitti() {

	Oyun.bolum++

	if (Oyun.bolum > Oyun.bolumsayisi) {
		oyunBitti()
	} else {
		taslarx.font = "bold 22px Tahoma"
		taslarx.textAlign = "start"
		taslarx.fillText("Bölüm Bitti Yeni Bölüm", 50, 50)
		//taslarx.fillText("Puan : " + Oyun.puan, 50, 80)
		clearInterval(Oyun.zaman)
		alert("bölüm biti yeni bölüm başlıyor")


		Oyun.basladi = false

		clearInterval(Oyun.zaman)
		tahtaYurut()
		tasDiz()	
	


	}



}
