function setup(){
	tela = createCanvas(LARGURA, ALTURA);
	tela.position(windowWidth/2 - LARGURA/2, windowHeight/2 - ALTURA/2);
	frameRate(fps);

	player = new Tank(LARGURA/2, ALTURA-26, tankImagem);
	faseAtual = Fase1();
}