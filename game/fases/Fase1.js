var fase =
"tttttttttttttttttttt"+
"tttttttttttttttttttt"+
"aaaaaaaaaaaaaaaaaaaa"+
"aapppppppaapppppppaa"+
"aaaaaaaaaaaaaaaaaaaa"+
"aaaaaaaaaaaaaaaaaaaa"+
"appaappaappaappaappa"+
"appaappaappaappaappa"+
"aaaaaaaaappaaaaaaaaa"+
"aaaaaaaappppaaaaaaaa"+
"aaaaaaappppppaaaaaaa"+
"pppaaappppppppaaappp"+
"pp------tttt------pp"+
"p---A----tt----A---p"+
"t--AAA---tt---AAA--t"+
"tt--A----tt----A--tt"+
"ttt------tt------ttt"+
"tttt----tttt----tttt"+
"tttttttttttttttttttt"+
"tttttttttttttttttttt";

function Fase1() {
	lista = fase.split("");
	fasePronta = [];

	for(var i=0; i<lista.length; i++){
		for(var j=0; j<lista.length; j++){
			if(lista[j*20+i] == "a"){
				fasePronta.push(new Arbusto(i*40, j*40));
			}
			else if(lista[j*20+i] == "p"){
				fasePronta.push(new Pedra(i*40, j*40));
			}
			else if(lista[j*20+i] == "t"){
				fasePronta.push(new Terra(i*40, j*40));
			}
			else if(lista[j*20+i] == "A"){
				fasePronta.push(new Agua(i*40, j*40));
			}
			if(j>18){
				break;
			}
		}
	}

	return fasePronta;
}