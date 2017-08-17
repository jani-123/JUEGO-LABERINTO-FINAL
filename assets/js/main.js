var play=document.getElementById("play");
var tutorial=document.getElementById("tutorial");
var creditos=document.getElementById("creditos");

var tablero=document.getElementById("tablero");
mapa=[  "                                               ",
		"_______________________________________________",
		"_______________________________________________",
		"______**o________***________________**W________",
		"_________________***_________________*_________",
		"_________________*______________*______________",
		"_________________*_____________________*_______",
		"____*__*_____________________*___*_____*_______", 
		"_____*_*____________________****_*_____________",
		"_____*_________________________________*_______",
		"______________________________________**_______",
		"________________________**____________**_______",
		"_________________________*_____________________",
		"_____________**_*_______***____________________",
		"_____________***_______________________________",
		"_____________**__________________**____________",
		"______**_________________________**____________",
		"______**_________________________*_____________",
		"________*____________**________________________",
		"____________________***________________________",
		"___________________*_**________________________",
		"_______________________________________________",
		"                                               "];

var filas = new Array(mapa.length);
for (var i = 0; i < filas.length; i++) 
{
	filas[i] = new Array(mapa[0].length);
}

var tdActual;

function laberintoCrea(){
	play.style.display="none";
    tutorial.style.display="none";
    creditos.style.display="none";
    var table=document.createElement("table");
    table.setAttribute("class", "table1");
	for (var i=0 ;i< mapa.length;i++)
	{
			var tr=document.createElement("tr");
		for(var j=0 ;j< mapa[0].length;j++)
		{
			var td=document.createElement("td");
			tr.appendChild(td);
			td.setAttribute("class","td1");
			if(mapa[i][j]=="*")
			{
			    td.setAttribute("style", "background-color: purple;");
			}
			if(mapa[i][j]=="_")
			{
			    td.setAttribute("style", "background-color: white;");
			}
			if(mapa[i][j]=="o")
			{
			    var imagen=document.createElement("img");
			    imagen.setAttribute("class","pelota");
			    td.appendChild(imagen);
			    imagen.src="assets/img/pelota.png";
			    tdActual ={x:i,y:j}; // creando un objeto literal
		    }
			if(mapa[i][j]=="W")
			{
			    td.setAttribute("style", "background-color: green;");
			}

			filas[i][j]=td;
		}
			table.appendChild(tr);
    }
		tablero.appendChild(table);
}

play.onclick = function(){
	laberintoCrea();
}

var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
}

document.addEventListener("keydown",teclado);

function teclado(evento)
{

	switch(evento.keyCode){
		case teclas.UP:
           arriba(1,0);
        break;
        case teclas.DOWN:
           abajo(1,0);
        break;
        case teclas.LEFT:
           izquierda(0,1);
        break;
        case teclas.RIGHT:
           derecha(0,1);
        break;

	}

}

var time;

function arriba(a,b)
{
	if( mapa[tdActual.x+a][tdActual.y+b]=="*" ){
      clearTimeout(time);
      return;
    }

	if(mapa[tdActual.x-a][tdActual.y+b] == "_" )
		{
			var imagen = document.createElement("img");
			imagen.src = "assets/img/pelota.png";
			filas[tdActual.x][tdActual.y].removeChild(filas[tdActual.x][tdActual.y].firstChild);
			tdActual.x = tdActual.x-a;
			filas[tdActual.x][tdActual.y].appendChild(imagen);
		}
	time = setTimeout(function(){ arriba(a, b) }, 400);
}

function abajo(a,b)
{
	if( mapa[tdActual.x+a][tdActual.y+b]=="*" ){
      clearTimeout(time);
      return;
    }
	if(mapa[tdActual.x+1][tdActual.y] == "_"|| mapa[tdActual.x+1][tdActual.y] == "W")
		{
			var imagen = document.createElement("img");
			imagen.src ="assets/img/pelota.png";
			filas[tdActual.x][tdActual.y].removeChild(filas[tdActual.x][tdActual.y].firstChild);
			tdActual.x = tdActual.x+1;
			filas[tdActual.x][tdActual.y].appendChild(imagen);
		}
	time = setTimeout(function(){ abajo(a, b) }, 400);
}

function izquierda(a,b)
{
	if( mapa[tdActual.x+a][tdActual.y+b]=="*" ){
      clearTimeout(time);
      return;
    }
	if(mapa[tdActual.x][tdActual.y-1] == "_" )
		{
			var imagen = document.createElement("img");
			imagen.src = "assets/img/pelota.png";
			filas[tdActual.x][tdActual.y].removeChild(filas[tdActual.x][tdActual.y].firstChild);
			tdActual.y = tdActual.y-1;
			filas[tdActual.x][tdActual.y].appendChild(imagen);
		}
	time = setTimeout(function(){ izquierda(a, b) }, 400);
}

function derecha(a,b)
{
	if( mapa[tdActual.x+a][tdActual.y+b]=="*" ){
      clearTimeout(time);
      return;
    }

	if(mapa[tdActual.x+a][tdActual.y+b] == "_" )
		{
			var imagen = document.createElement("img");
			imagen.src = "assets/img/pelota.png";
			filas[tdActual.x][tdActual.y].removeChild(filas[tdActual.x][tdActual.y].firstChild)
			tdActual.y = tdActual.y+b;
			filas[tdActual.x][tdActual.y].appendChild(imagen);
		}
		time = setTimeout(function(){ derecha(a, b) }, 400);
}

	