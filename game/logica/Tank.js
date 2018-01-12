function Tank(x, y, imagem){
	
	//Atributos - Construtor
	Entidade.call(this, x, y, imagem, "tank");
	this.wasd = [false, false, false, false];
	this.velocidade = 2;

	//Metodos
	this.mover = function () {
		//Eixo X
		if(this.wasd[1] && this.x > this.altura/2){
			this.x -= this.velocidade;
			this.rotacao = 3*PI/2;
		}
		else if(this.wasd[3] && this.x < LARGURA - this.altura/2){
			this.x += this.velocidade;
			this.rotacao = PI/2;
		}
		//Eixo Y
		else if(this.wasd[0] && this.y > this.altura/2){
			this.y -= this.velocidade;
			this.rotacao = 0;
		}
		else if(this.wasd[2] && this.y < ALTURA-this.altura/2){
			this.y += this.velocidade;
			this.rotacao = PI;
		}
	}

	this.colidir = function (tile){
		//Eixo X
		if(abs(this.y-(tile.y+tile.altura/2)) < abs(this.x-(tile.x+tile.largura/2)) && this.x <= tile.x){
			this.x -= this.velocidade;
		}
		else if(abs(this.y-(tile.y+tile.altura/2)) < abs(this.x-(tile.x+tile.largura/2)) && this.x > tile.x){
			this.x += this.velocidade;
		}
		//Eixo Y
		if(abs(this.x-(tile.x+tile.largura/2)) < abs(this.y-(tile.y+tile.altura/2)) && this.y <= tile.y){
			this.y -= this.velocidade;
		}
		else if(abs(this.x-(tile.x+tile.largura/2)) < abs(this.y-(tile.y+tile.altura/2)) && this.y > tile.y){
			this.y += this.velocidade;
		}
	}

	this.botaoPressionado = function (key) {
		//Eixo X
		if(key == 65 || key == 37){
			this.wasd[1] = true;
		}
		else if(key == 68 || key == 39){
			this.wasd[3] = true;
		}
		//Eixo Y
		else if(key == 87 || key == 38){
			this.wasd[0] = true;
		}
		else if(key == 83 || key == 40){
			this.wasd[2] = true;
		}
	}

	this.botaoSolto = function (key) {
		//Eixo X
		if(key == 65 || key == 37){
			this.wasd[1] = false;
		}
		else if(key == 68 || key == 39){
			this.wasd[3] = false;
		}
		//Eixo Y
		else if(key == 87 || key == 38){
			this.wasd[0] = false;
		}
		else if(key == 83 || key == 40){
			this.wasd[2] = false;
		}
	}

}