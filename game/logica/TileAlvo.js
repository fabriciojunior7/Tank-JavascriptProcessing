function TileAlvo(x, y, imagem, fisica, tipo, life){

	//Atributos-Construtor
	Tile.call(this, x, y, imagem, fisica, tipo);
	this.life = life;

	//Metodos
	this.danificar = function(i){
		this.life--;
		if(this.life <= 0){
			this.destruir(i)
		}
	}

	this.destruir = function(i){
		faseAtual.splice(i, 1);
	}
	
}