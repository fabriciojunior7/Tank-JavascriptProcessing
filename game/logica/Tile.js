function Tile(x, y, imagem, fisica, tipo){

	//Atributos-Construtor
	Entidade.call(this, x, y, imagem, tipo);
	this.fisica = fisica;

	//Metodos
	this.desenhar = function(){
		resetMatrix();
		image(this.imagem, this.x, this.y);
	}
	
}