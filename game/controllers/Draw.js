function draw(){
	background(50);

	for(var i=0; i<faseAtual.length; i++){
		colisao = collideRectRect(player.x-17, player.y-17, 34, 34, faseAtual[i].x, faseAtual[i].y, faseAtual[i].largura, faseAtual[i].altura);
		if(faseAtual[i].tipo != "arbusto"){
			faseAtual[i].desenhar();
			//fill(255);
			//noStroke();
			//ellipse(faseAtual[i].x+faseAtual[i].largura/2, faseAtual[i].y+faseAtual[i].altura/2, 2, 2);
		}
		if(faseAtual[i].fisica && colisao){
			player.colidir(faseAtual[i]);
		}
	}

	player.mover();
	player.desenhar();
	resetMatrix();
	//fill(255);
	//noStroke();
	//ellipse(player.x, player.y, 2, 2);

	for(var i=0; i<faseAtual.length; i++){
		if(faseAtual[i].tipo == "arbusto"){
			faseAtual[i].desenhar();
		}
	}
}