	function muestra(){
	var tamano = document.getElementById("cuerpo");
	var pantalla = window.innerHeight;
	console.log(tamano.clientHeight);
	console.log(pantalla);
	var tamfooter = pantalla-tamano.clientHeight-200;
	var footer = document.getElementById("piepagina")
	footer.style.height=tamfooter+"px";
	console.log (tamfooter);
	}