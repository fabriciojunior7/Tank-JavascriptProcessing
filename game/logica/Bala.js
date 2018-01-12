function Bala(x, y, direcao){
	
	///Atributos-Construtor
	Entidade.call(this, x, y, bala1Imagem, "bala");
	this.rotacao = direcao;
	this.velocidade = 5;
	this.fora = false;

	//Metodos
	this.atualizar = function(){
		//Direcoes X
		if(this.rotacao == 3*PI/2){
			this.x -= this.velocidade;
		}
		else if(this.rotacao == PI/2){
			this.x += this.velocidade;
		}
		//Direcoes Y
		else if(this.rotacao == 0){
			this.y -= this.velocidade;
		}
		else if(this.rotacao == PI){
			this.y += this.velocidade;
		}
		//Distancia da Tela
		if(this.x < 0 || this.x > LARGURA || this.y < 0 || this.y > ALTURA){
			this.fora = true;
		}
	}

	this.destruir = function(i){
		if(this.fora){
			projeteis.splice(i, 1);
			return true;
		}
		return false;
	}

}