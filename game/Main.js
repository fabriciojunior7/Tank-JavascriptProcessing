//Tela
var tela;
var LARGURA = 800, ALTURA = 800;
var fps = 60;

//Globais
var player;
var projeteis = [];

//Imagens
var tankImagem, arbusto1Imagem, pedra1Imagem, terra1Imagem, agua1Imagem, bala1Imagem;

//Fases
var faseAtual = [];

//Metodos
function windowResized() {
	tela.position(windowWidth/2 - LARGURA/2, windowHeight/2 - ALTURA/2);
}

function arredondar(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}