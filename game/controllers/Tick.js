function tick(){

	if(frameCount % 6 == 0){
		player.reload += 0.1
		player.reload = arredondar(player.reload, 1);
	}
	
}