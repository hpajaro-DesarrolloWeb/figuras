clasesDef={"circ" :"new Circulo(' ',$a1)", 
            "circ_img": "imagenes/Circulo2.png",     
	        "cuad" :"new Cuadrado(' ',$a1)",
	        "cuad_img": "imagenes/Cuadrado2.png",
	        "tria" :"new TrianguloEquilatero(' ',$a1)",
	        "tria_img": "imagenes/Triangulo1.png",
	        "rect" :"new Rectangulo(' ',$a1,$a2)",
	        "rect_img": "imagenes/Rectangulo.jpg",
	        "trap" :"new Trapecio(' ',$a1,$a2,$a3,$a4,$a5)",
	        "trap_img": "imagenes/Trapecio.jpg",
	        "hexa" :"new Hexagono(' ',$a1)", 
	        "hexa_img": "imagenes/Hexagono.jpg",
	        "oval" :"new Ovalo(' ',$a1,$a2)",
	        "oval_img": "imagenes/Ovalo.jpg",
	        "pent" :"new Pentagono(' ',$a1)",
	        "pent_img": "imagenes/Pentagono.jpg"
       };

 vistasDef={"circ" :[{"lab":"Radio","campo":"radio"}],           
        "cuad" :[{"lab":"Lado","campo":"lado"}],
        "pent" :[{"lab":"Lado","campo":"lado"}],
        "tria" :[{"lab":"Lado","campo":"lado"}],
        "rect" :[{"lab":"Base","campo":"base"},
                 {"lab":"Altura","campo":"altura"}],      
        "trap" :[{"lab":"Lado Inf","campo":"ladoInf"},
                 {"lab":"Lado Sup","campo":"ladoSup"},
				 {"lab":"Lado Izq","campo":"ladoIzq"}, 
				 {"lab":"Lado Der","campo":"ladoDer"},               
                 {"lab":"Altura","campo":"altura"}],
        "hexa" :[{"lab":"Lado","campo":"lado"}],
        "oval" :[{"lab":"Radio Menor","campo":"radioMenor"},
                 {"lab":"Radio Mayor","campo":"radioMayor"}]
       };

 comboDef=[  {"lab":"Elija Figura","val":"nada"},
             {"lab":"Circulo","val":"circ"},
		     {"lab":"Cuadrado","val":"cuad"},
		     {"lab":"Pentagono","val":"pent"},
		     {"lab":"Hexagono","val":"hexa"},
		     {"lab":"Ovalo","val":"oval"},
		     {"lab":"Rectangulo","val":"rect"},	      
		     {"lab":"Triangulo","val":"tria"},
		     {"lab":"Trapecio","val":"trap"}]