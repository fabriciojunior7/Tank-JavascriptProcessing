function Entidade(x, y, imagem, tipo){
	
	//Atributos-Construtor
	this.imagem = imagem;
	this.x = x;
	this.y = y;
	this.largura = imagem.width;
	this.altura = imagem.height;
	this.rotacao = 0;
	this.tipo = tipo;

	//Metodos
	this.desenhar = function () {
		resetMatrix();
		translate(this.x, this.y);
		rotate(this.rotacao);
		image(this.imagem, -this.largura/2, -this.altura/2);
	}

	this.vibrar = function () {
		this.x += random(-1, 1);
		this.y += random(-1, 1);
	}

}