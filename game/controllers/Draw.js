function draw(){
	background(50);
	tick();

	//Cenario
	for(var i=0; i<faseAtual.length; i++){
		//Colisao Parede
		colisao = collideRectRect(player.x-17, player.y-17, 34, 34, faseAtual[i].x, faseAtual[i].y, faseAtual[i].largura, faseAtual[i].altura);
		if(faseAtual[i].tipo != "arbusto"){
			faseAtual[i].desenhar();
		}
		if(faseAtual[i].fisica && colisao){
			player.colidir(faseAtual[i]);
		}
		//Colisao com Bala
		if(faseAtual[i].tipo == "pedra"){
			for(var j=0; j<projeteis.length; j++){
				colisao = collideRectRect(faseAtual[i].x, faseAtual[i].y, faseAtual[i].largura, faseAtual[i].altura, projeteis[j].x, projeteis[j].y, projeteis[j].largura, projeteis[j].altura);
				if(colisao){
					faseAtual[i].danificar(i);
					projeteis[j].fora = true;
					if(projeteis[j].destruir(j)){
						j--;
					}
				}
			}
		}
	}

	//Balas
	for(var i=0; i<projeteis.length; i++){
		projeteis[i].atualizar();
		projeteis[i].desenhar();
		if(projeteis[i].destruir(i)){
			i--;	
		}
	}

	//Jogador
	player.mover();
	player.desenhar();
	resetMatrix();

	//Arbustos
	for(var i=0; i<faseAtual.length; i++){
		if(faseAtual[i].tipo == "arbusto"){
			faseAtual[i].desenhar();
		}
	}
}