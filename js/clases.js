class Figura {
 
     constructor(nombre,imagen){
            this.nombre=nombre;
            this.imagen=imagen;
     }

     area(){}

     perimetro(){}

     get Nombre(){ return this.nombre;}

     set Nombre(valor){this.nombre=valor;}

     get Imagen(){ return this.imagen;}

     set Imagen(valor){this.imagen=valor;}
    
      soy(){
        return true;
     }
     mostrar(){
        let xarea=this.area().toFixed(2);
        let xperi=this.perimetro().toFixed(2);
        this.resultado= document.getElementById("result");
        this.resultado.innerHTML="El <span class='enfasis'>Area</span> del <span class='enfasis'>"+this.Nombre +"</span> es = "+xarea+" y su <span class='enfasis'>Perimetro</span>  es=  "+xperi;
     }
}

class PoligonoRegular extends Figura{

	constructor(nombre,imagen, lado,numlados){
		super(nombre,imagen)
		this.lado = lado;
		this.numLados = numlados;
	}

	get Lado(){ return this.lado }

	set Lado(valor){ this.lado=valor;}
	
	get NumLados(){ return this.lado }

	set NumLados(valor){this.numLados=valor; }
	
	perimetro(){ return  this.lado * this.numLados; }

  apotema(){}
	
	area(){ return this.perimetro() * this.apotema()/2};
	
 
}

class TrianguloEquilatero extends PoligonoRegular{
      constructor(imagen,lado){
      	super("Triangulo Equilatero",imagen,lado,3);    
      }
      
     apotema(){return  (Math.sqrt(3) / 4) * this.lado;}

}

class Cuadrado  extends PoligonoRegular{
       constructor(imagen,lado){
       super("Cuadrado",imagen,lado,4);
      }

     apotema(){ return  this.lado / 2;}
}

class Hexagono extends PoligonoRegular{
      constructor(imagen,lado){
	     super("Hexagono",imagen,lado,6);
	   }

     apotema(){ return  (this.lado/(2*Math.tan(60 * Math.PI / 180))); }

}
class Pentagono extends PoligonoRegular{
      constructor(imagen,lado){
       super("Pentagono",imagen,lado,5);
     }

     apotema(){ return  (this.lado/(2*Math.tan(72 * Math.PI / 180))); }

}
class Circulo extends Figura {
      
       constructor(imagen,radio){
           super("Circulo",imagen);
           this.radio=radio;
       }

       get Radio(){	 return this.radio;}

       set Radio(valor){ this.radio=valor;}

      area(){ return Math.PI * (this.radio ** 2);}

      perimetro(){ return  2*Math.PI * this.radio; }
}

class Ovalo extends Figura{
         constructor(imagen,radioMenor, radioMayor){
           super("Ovalo",imagen);
           this.radioMenor=radioMenor;
           this.radioMayor=radioMayor;
          }

     get RadioMenor(){ return this.radioMenor;  }

     set RadioMenor(valor){ this.radioMenor = valor ;}

     get RadioMayor(){ return this.radioMayor;  }

     set RadioMayor(valor){ this.radioMayor = valor;}
     
     soy(radioMenor,radioMayor){
         if (this.radioMenor == this.radioMayor) 
            return false;
         else 
         	return true;         
     }

     area(){   return Math.PI * this.radioMenor * this.radioMayor; }

     perimetro(){ 
     	let r=this.radioMenor; let s=this.radioMayor;
        return Math.PI*(3*(r+s)- Math.sqrt((3*r+s)*(r+3*s)));
     }

     soy(){
      if (this.radioMenor === this.radioMayor)
        return false;
      else 
        return true;
     }
 
}

class Rectangulo extends Figura{

     constructor(imagen,base, altura){
           super("Rectangulo",imagen);
           this.base = base;
           this.altura =altura;
          }

     get Base(){ return this.base;  }

     set Base(valor){ this.base = valor ;}

     get Altura(){ return this.altura;  }

     set Altura(valor){ this.altura = valor;}

     area(){ return this.base * this.altura;}
     
     perimetro(){return 2 * this.base + 2 * this.altura; }

     soy(){
       if (this.base === this.altura)
        return false;
      else 
         return true;
     }
}

class Trapecio extends Figura{

    constructor(imagen,ladoInf, ladoSup, ladoIzq,ladoDer,altura){
           super("Trapecio",imagen);
           this.ladoInf = ladoInf;
           this.ladoSup = ladoSup;
           this.ladoIzq =ladoIzq;
           this.ladoDer =ladoDer;
           this.altura =altura;
          }

     get LadoInf(){ return this.ladoInf;  }

     set LadoInf(valor){ this.ladoInf = valor ;}
     
     get LadoSup(){ return this.ladoSup;  }

     set LadoSup(valor){ this.ladoSup = valor ;}


     get LadoIzq(){ return this.ladoIzq;  }

     set LadoIzq(valor){ this.ladoIzq = valor ;}
     

     get LadoDer(){ return this.ladoDer;  }

     set LadoDer(valor){ this.ladoDer = valor ;}

   
     get Altura(){ return this.altura;  }

     set Altura(valor){ this.altura = valor;}

     area(){ return (this.ladoInf +this.LadoSup) * this.altura / 2;  }

     perimetro(){
        return this.ladoIzq + this.LadoDer + this.LadoInf + this.ladoSup;
     }
            
       soy(){
          if(this.ladoIzq < this.altura){ return false;}  // debe aumentar el ladoIzq
          let a1= Math.sqrt(this.ladoIzq ** 2 - this.altura ** 2 );
          log(`a1=${a1}`);

          if (a1 > Math.abs(this.ladoInf-this.ladoSup))
                return  false; // Debe disminuir el LadoIzq
          else{
          
              let a2 = Math.abs(this.ladoInf - this.ladoSup - a1);
              log(`a2=${a2}`);
              this.ladoDer = Math.sqrt(this.altura ** 2 + a2 ** 2);
               return true;
             }
      }
}