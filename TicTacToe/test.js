console.log("V0.1.2");
class board{
    constructor(x,y){
		this.tile = [];
		this.score = [];
		this.score[0] = 0;
		this.score[1] = 0;
	}
    drawBoard(){
        // out << "Player 1  |Player 2\n" << score[0] <<"         |"<< score[1]<< "\n\n\n\n";
        // for (var i = 0; i < 9; i=i+3)
 //        {
            console.log(this.tile);
//        }

    }
    reset()
    {
        for (var i = 0; i < 9; i++)
        {
            this.tile[i] = i+1;
        }
    }
    winCheck()
    {
        var bl = false;
        if (this.tile[0]==this.tile[1]&&this.tile[1]==this.tile[2])
        {
            bl = true;
        }
        else if (this.tile[3] == this.tile[4] && this.tile [4] == this.tile[5])
        {
            bl=true;
        }
        else if (this.tile[6] == this.tile[7] && this.tile [7] == this.tile[8])
        {
            bl = true;
        }
        else if (this.tile[0] == this.tile[3] && this.tile [3] == this.tile[6])
        {
            bl=true;
        }
        else if (this.tile[1] == this.tile[4] && this.tile [4] == this.tile[7])
        {
            bl=true;
        }
        else if (this.tile[2] == this.tile[5] && this.tile [5] == this.tile[8])
        {
            bl=true;
        }
        else if (this.tile[0] == this.tile[4] && this.tile [4] == this.tile[8])
        {
            bl=true;
        }
        else if (this.tile[2] == this.tile[4] && this.tile [4] == this.tile[6])
        {
            bl=true;
        }
        else
        {
            bl = false;
        }
        // console.log(bl);
        return bl;
    }
    updateBoard(lett, input){
            this.tile[input-1] = lett;
    }
    returnValue(pI){
        return this.tile[pI-1];
    }
    // void increaseScore(player)
//     {
//         score[player-1]++;
//     }
}
// console.log("BOARD LOADED");
var game = new board();
var turnNumber = 0;
var gameOver = false;
var gameNumber = 0;
boardtest();
// var playerHeader = "Player 1          |Player 2";
// document.getElementById("scores").innerHTML = playerHeader;
// updateScreen();
// function lick(){
// 	var color = document.getElementById("colorPick").value;
// 	console.log(color);
// 	document.body.style.background = color;
// }
function boardtest(){
	game.reset();
  // var nums = game.score[0].toString +""
	// game.drawBoard();

}
function turn(input){
  if (!gameOver){
    if ((gameNumber+turnNumber)%2== 0){
  		game.updateBoard('x',input);
  	}
  	else{
  		game.updateBoard('o',input);
  	}
  	// game.drawBoard();
  	turnNumber++;
    if ((gameNumber+turnNumber)%2==0){
      document.getElementById("screenText").innerHTML = "Player 1's Turn!";
    }
    else{
      document.getElementById("screenText").innerHTML = "Player 2's Turn!";
    }
    gameOver=game.winCheck();

    if (gameOver){
      if ((gameNumber+turnNumber)%2==0){
        document.getElementById("screenText").innerHTML = "Player 2 Wins!";
        game.score[1]++;
      }
      else{
        document.getElementById("screenText").innerHTML = "Player 1 Wins!";
        game.score[0]++;
      }
      document.getElementById("playagain").innerHTML = "Press any button to play again!";
    }
    else if (turnNumber==9){
      gameOver=true;
      document.getElementById("screenText").innerHTML = "It is a tie!";
      document.getElementById("playagain").innerHTML = "Press any button to play again!";


    }
  }
  updateScreen()
}
function updateScreen(){
	for (var i = 0; i < game.tile.length; i++){
		var a = "tile"+(i+1).toString();
		if (game.tile[i]=="x"){
			// document.getElementById(a).bgColor = '#000000';
      document.getElementById(a).style.backgroundImage = "url('x.png')";

		}
		else if (game.tile[i]=="o"){
			// document.getElementById(a).bgColor = '#FFFFFF';
      document.getElementById(a).style.backgroundImage = "url('c.png')";


		}
    else {
      // document.getElementById(a).bgColor ="white";
      document.getElementById(a).style.backgroundImage = null;


    }
	}
  document.getElementById("SCORES1").innerHTML = game.score[0];
  document.getElementById("SCORES2").innerHTML =game.score[1];


}
function resetGame(){
  game.reset();
  updateScreen();
  turnNumber=0;
  gameNumber++;
  gameOver=false;
  if (gameNumber%2==0){
    document.getElementById("screenText").innerHTML = "Player 1's Turn!";
  }
  else {
    document.getElementById("screenText").innerHTML = "Player 2's Turn!";

  }
  document.getElementById("playagain").innerHTML = "";


}
function tile1(){
  if (gameOver){
    resetGame();
  }
  else if (game.returnValue(1)==1)
	{
		turn(1);
		updateScreen();
	}
}
function tile2(){
  if (gameOver){
    resetGame();
  }
  else if (game.returnValue(2)==2)
	{
		turn(2);
		updateScreen();
	}

}
function tile3(){
  if (gameOver){
    resetGame();
  }
	else if (game.returnValue(3)==3)
	{
		turn(3);
		updateScreen();
	}
}
function tile4(){
  if (gameOver){
    resetGame();
  }
  else if (game.returnValue(4)==4)
	{
		turn(4);
		updateScreen();
	}
}
function tile5(){
  if (gameOver){
    resetGame();
  }
  else if (game.returnValue(5)==5)
	{
		turn(5);
		updateScreen();
	}
}
function tile6(){
  if (gameOver){
    resetGame();
  }
  else if (game.returnValue(6)==6)
	{
		turn(6);
		updateScreen();
	}
}
function tile7(){
  if (gameOver){
    resetGame();
  }
  else if (game.returnValue(7)==7)
	{
		turn(7);
		updateScreen();
	}
}
function tile8(){
  if (gameOver){
    resetGame();
  }
  else if (game.returnValue(8)==8)
	{
		turn(8);
		updateScreen();
	}

}
function tile9(){
  if (gameOver){
    resetGame();
  }
  else if (game.returnValue(9)==9)
	{
		turn(9);
		updateScreen();
	}
}
// console.log("loaded.");
