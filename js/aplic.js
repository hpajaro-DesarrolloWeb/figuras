log=console.log;
entradas=document.getElementById("entradas");
frm=document.getElementById("formulario");
xcombo= document.getElementById("combo");
xcombo.addEventListener("change",entradaDatos);
boton=document.getElementById("btn-calcular");
boton.addEventListener("click",calcular);

crearCombo();
//------------------------------------------------

function crearCombo(){
		for (let i=0;i<9;i++){
		    obj=document.createElement("option");
		    obj.value=comboDef[i]["val"];
		    obj.innerHTML=comboDef[i]["lab"];
		    xcombo.appendChild(obj);
		}
}

function entradaDatos(){
	  entradas.innerHTML=""; 

     fig=xcombo.options[xcombo.selectedIndex].value;
     if (fig=="nada") retrun;
     vista=vistasDef[fig];
     adicionarImagen(fig);
   
     for (let i=0; i< vista.length;i++){

     	xlabel=document.createElement("label");
     	xlabel.htmlFor=vista[i]["campo"];
     	xlabel.innerHTML=vista[i]["lab"]
     	xinput=document.createElement("input");
     	xinput.type="number";
      xinput.name=vista[i]["campo"];
      entradas.appendChild(xlabel);
      entradas.appendChild(xinput);
     }
    
    
}
function adicionarImagen(fig){
  divImagen=document.getElementById("imagen");
  divImagen.innerHTML="";
  ximagen=document.createElement("img");
  ximagen.src=clasesDef[fig+"_img"];
  divImagen.appendChild(ximagen);

}
function calcular(){

   datos=document.getElementsByTagName("input");
   valores=[];
   for (let i=0;i<datos.length-1;i++){
      valores[i]=datos[i].value;
   }

   Objeto = factory(fig,valores);
   if (!Objeto.soy()){
    this.resultado= document.getElementById("result");
    this.resultado.innerHTML="<span class='rojo'>La figura no cumple caracteristicas. Verifique </span>";
     return;
    }

  Objeto.mostrar();   
}
function factory(fig,valores){

    xclase=clasesDef[fig];
    let nargu = (xclase.match(/\$a/g)||[]).length;

    for (let i=1;i <= nargu;i++){
    	var indice ="$a"+i;
    	xclase=xclase.replace(indice,valores[i-1])
    }

    return  eval(xclase);
}

