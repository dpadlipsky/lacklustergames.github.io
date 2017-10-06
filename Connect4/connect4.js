class board {
	constructor() {
		this.board = createArray(7, 6);
		this.turnNumber = 0;
	}
	reset() {
		for (var i = 0; i < 7; i++) {
			for (var j = 0; j < 6; j++) {
				this.board[i][j] = null;
			}
		}
	}
	printBoard() {
		for (var i = 0; i < 7; i++) {
			console.log(this.board[i].toString());
		}
	}
	doTheMove(input) {
		for (var i = 5; i >= 0; i--) {
			if (this.board[input][i] == null) {
				break;
			}
		}
		if (this.board[input][0] != null) {
			console.log("TOP!=NULL");
			console.log(this.board.toString());
			return false;
		} else {
			if (this.turnNumber % 2 == 0) {
				this.board[input][i] = "x";
			} else {
				this.board[input][i] = "o";
			}
			return true;
		}
		return true;
	}
	winCheckFlag(flag, depth, i, j) {
		console.log(i.toString() + " " + j.toString())
		var bool = false;
		if (depth == 4) {
			console.log("TRUE");
			bool = true;
		} else {
			if (flag == 1) {
				if (this.board[i][j] == this.board[i][j - 1]) {
					i = i;
					j = j - 1;
					depth++;
					if (this.winCheckFlag(1, depth, i, j)) {
						return true;
					}
				} else {
					bool = false;
				}
			} else if (flag == 2) {
				if (this.board[i][j] == this.board[i + 1][j]) {
					i = i + 1;
					j = j;
					depth++;
					if (this.winCheckFlag(2, depth, i, j)) {
						return true;
					}
				} else {
					bool = false;
				}
			} else if (flag == 3) {
				if (this.board[i][j] == this.board[i + 1][j - 1]) {
					i = i + 1;
					j = j - 1;
					depth++;
					if (this.winCheckFlag(3, depth, i, j)) {
						return true;
					}
				} else {
					bool = false;
				}
			} else if (flag == 4) {
        if (this.board[i][j] == this.board[i - 1][j - 1]) {
					i = i - 1;
					j = j - 1;
					depth++;
					if (this.winCheckFlag(4, depth, i, j)) {
						return true;
					}
				} else {
					bool = false;
				}
      }
		}
		return bool;
	}
	winCheck() {
		var bool = false;
		for (var i = 0; i < 7; i++) {
			for (var j = 5; j >= 3; j--) {
				if (this.board[i][j] != null) {
					if (this.board[i][j] == this.board[i][j - 1]) {
						if (this.winCheckFlag(1, 2, i, j - 1)) {
							return true;
						}
					}
				}
			}
		}
		for (var i = 0; i < 4; i++) {
			for (var j = 5; j >= 0; j--) {
				if (this.board[i][j] != null) {
					if (this.board[i][j] == this.board[i + 1][j]) {
						if (this.winCheckFlag(2, 2, i + 1, j)) {
							return true;
						}
					}
				}
			}
		}
		for (var i = 0; i < 4; i++) {
			for (var j = 5; j >= 3; j--) {
				if (this.board[i][j] != null) {
					if (this.board[i][j] == this.board[i + 1][j - 1]) {
						if (this.winCheckFlag(3, 2, i + 1, j - 1)) {
							return true;
						}
					}
				}
			}
		}
    for (var i = 3; i < 7; i++) {
			for (var j = 5; j >= 3; j--) {
				if (this.board[i][j] != null) {
					if (this.board[i][j] == this.board[i - 1][j - 1]) {
						if (this.winCheckFlag(4, 2, i - 1, j - 1)) {
							return true;
						}
					}
				}
			}
		}
		return bool;
	}
}
var game = new board();
game.reset();
updateVisual();
game.printBoard();
var gameOver = false;

function createArray(length) {
	var arr = new Array(length || 0),
		i = length;
	if (arguments.length > 1) {
		var args = Array.prototype.slice.call(arguments, 1);
		while (i--) arr[length - 1 - i] = createArray.apply(this, args);
	}
	return arr;
}

function updateVisual() {
	var a;
	for (var i = 0; i < 7; i++) {
		for (var j = 0; j < 6; j++) {
			a = "sqr" + j + i;
			if (game.board[i][j] == null) {
				document.getElementById(a).style.backgroundImage = null;
			} else if (game.board[i][j] == "x") {
				document.getElementById(a).style.backgroundImage = "url('red.gif')";
			} else if (game.board[i][j] == "o") {
				document.getElementById(a).style.backgroundImage = "url('black.gif')";
			}
		}
	}
}
function resetGame(){
    gameOver=false;
    game.turnNumber=false;
    game.reset();
    updateVisual();
}

function turn(input) {
  if (!gameOver){
  	if (game.doTheMove(input)) {
  		game.turnNumber++;
  	}
  	updateVisual();
    if (game.turnNumber%2==0){
      document.getElementById("screenText").innerHTML = "Player 1's Turn!";
    }
    else{
      document.getElementById("screenText").innerHTML = "Player 2's Turn!";
    }
    gameOver=game.winCheck();
    if (gameOver){
      if (game.turnNumber%2==0){
        document.getElementById("screenText").innerHTML = "Player 2 Wins!";
      }
      else {
        document.getElementById("screenText").innerHTML = "Player 1 Wins!";

      }
      document.getElementById("playagain").innerHTML = "Press any button to play again!";
    }
  }
  else {
    resetGame();
    document.getElementById("playagain").innerHTML = "";
    document.getElementById("screenText").innerHTML = "Player 1's Turn!";
  }
}

function buttonPress(buttonName) {
	var arr = buttonName.split('');
	arr[buttonName.length - 2] = arr[buttonName.length - 1];
	arr.splice(arr.length - 1, 1);
	console.log(arr.toString());
	buttonName = arr.join('');
	switch (buttonName) {
		case "sqr0":
			turn(0);
			break;
		case "sqr1":
			turn(1);
			break;
		case "sqr2":
			turn(2);
			break;
		case "sqr3":
			turn(3);
			break;
		case "sqr4":
			turn(4);
			break;
		case "sqr5":
			turn(5);
			break;
		case "sqr6":
			turn(6);
			break;
	}
}
