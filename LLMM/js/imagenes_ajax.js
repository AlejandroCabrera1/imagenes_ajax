function cargar_imagenes() {
	const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
		var texto= this.responseText;
		var parrafo=document.getElementsByTagName("p")[0];
		var lista=texto.split(",");
		var select=document.getElementById("creaSelect");
		var opcion_selected=document.createElement("option");
		select.appendChild(opcion_selected);
		opcion_selected.value=-1;
		opcion_selected.selected=true;
		opcion_selected.disabled=true;
		opcion_selected.innerHTML="Seleccione una opción"
			for (i=0; i<lista.length; i++){
				var opcion=document.createElement("option");
				select.appendChild(opcion);
				opcion.innerHTML=i+1;
				opcion.value=lista[i];
			}
		select.onchange=function(){
			if (!document.getElementsByTagName("img")[0]) {
				var parrafo=document.getElementsByTagName("p")[0];
				for (i=0; i<lista.length; i++){
					if (select.value==lista[i]) {
						var	imagen=document.createElement("img");
						parrafo.appendChild(imagen);
						imagen.src=lista[i];
					}
				}
			}
			else{
				document.getElementsByTagName("img")[0].remove();
				var parrafo=document.getElementsByTagName("p")[0];
				for (i=0; i<lista.length; i++){
					if (select.value==lista[i]) {
						var	imagen=document.createElement("img");
						parrafo.appendChild(imagen);
						imagen.src=lista[i];
					}
				}
			}
		}
	}
	xhttp.open("GET", "../../imagenes.txt", true);
	xhttp.send();
}