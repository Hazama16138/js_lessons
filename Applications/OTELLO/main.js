(function() {

	var order = document.getElementById("order");
	order.innerHTML = '黒';

	var board = [];
	var turn = 1;
	var cell = [
		document.getElementById("cell"),
		document.getElementById("black"),
		document.getElementById("white")
	];
	var b = document.getElementById("board");

	var checkandTurn = function(x, y, flip) {
		var ret = 0;

		for(var dx = -1; dx <= 1; dx++) {
			for(var dy = -1; dy <= 1; dy++) {
				if(dx == 0 && dy == 0) {
					continue;
				}
				var nx = x + dx;
				var ny = y + dy;
				var n = 0;

				while(board[nx][ny] == 3 - turn) {
					n++;
					nx += dx;
					ny += dy;
				}

				if(n > 0 && board[nx][ny] == turn) {
					ret += n;

					if(flip) {
						nx = x + dx;
						ny = y + dy;

						while(board[nx][ny] == 3 - turn) {
							board[nx][ny] = turn;
							nx += dx;
							ny += dy;
						}
					}
				}
			}
		}
		return ret;
	};

	// var turnOthello = function(x, y) {
	// 	var ret = 0;
	//
	// 	for(vx = -1; vx <= 1; vx ++) {
	// 		for(vy = -1; vy <= 1; vy ++) {
	//
	// 			if(vx == 0 && vy == 0) {
	// 				continue;
	// 			}
	//
	// 			var nx = x + vx;
	// 			var ny = y + vy;
	// 			var n = 0;
	//
	// 			while(board[nx][ny] == 3 - turn) {
	// 				nx += vx;
	// 				ny += vy;
	// 				if(n > 0 && board[nx][ny] == turn) {
	// 					break;
	// 				}
	// 				board[nx][ny] = turn;
	// 			}
	//
	// 		}
	// 	}
	// 	return ret;
	// }

	var showBoard = function() {

		for(var x = 1; x <= 8; x++) {
			for(var y = 1; y <= 8; y++) {
				var piece = cell[board[x][y]].cloneNode(true);
				// console.log(piece);

				piece.style.top = x * 72 + "px";
				piece.style.left = y * 72 + "px";
				b.appendChild(piece);

				if(board[x][y] == 0) {
					(function() {
						var _x = x,
								_y = y;
						piece.addEventListener('click', function() {
							if(checkandTurn(_x, _y, true) > 0) {
								board[_x][_y] = turn;
								showBoard();
								turn = 3 - turn;

								switch (turn) {
									case 1:
										order.innerHTML = '黒';
										break;
									case 2:
										order.innerHTML = '白';
										break;
								}
							}
						});
					})();
				}


			}
		}

	}

	onload = function() {

		for(var i = 0; i < 10; i++) {
			board[i] = [];
			for(var j = 0; j < 10; j++) {
				board[i][j] = 0;
			}
		}

		board[4][4] = 2;
		board[5][4] = 1;
		board[4][5] = 1;
		board[5][5] = 2;

		showBoard();


	}

})();
