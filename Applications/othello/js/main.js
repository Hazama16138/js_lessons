	(function() {
		// document.write('hello world');

		var turn = 2;
		var checkAndturn = function(x, y) {
			var ret = 0;

			for(var vx = -1; vx <= 1; vx++) {
				for(var vy = -1; vy <= 1; vy++) {
					if(vx == 0 && vy == 0) {
						continue;
					}

					var nx = x + vx;
					var ny = y + vy;
					var n = 0;

					while(board[nx][ny] == 3 - turn) {
						n++;
						nx += vx;
						ny += vy;
						// board[nx][ny] = turn;
					}

					if (n > 0 && board[nx][ny] == turn) {
						ret += n;

						nx = x + vx;
						ny = y + vy;

						while(board[nx][ny] == 3 - turn) {
								board[nx][ny] = turn;
								nx += vx;
								ny += vy;
						}
					}


					// if(n > 0 && board[nx][ny] == 3 - turn) {
					// 	n++;
					// 	nx += vx;
					// 	ny += vy;
					// }


				}
			}

			return ret;
		}

		var showBoard = function() {

			var b = document.getElementById('board');
			if(b.firstChild) {
				b.removeChild(b.firstChild);
			}
			for(var y = 1; y <= 8; y++) {
				for(var x = 1; x <= 8; x++) {
					var piece = cell[board[x][y]].cloneNode(true);
					piece.style.top = (y - 1) * 32 + 'px';
					piece.style.left = (x - 1) * 32 + 'px';
					b.appendChild(piece);

					if(board[x][y] == 0) {
						(function() {
							var _x = x, _y = y;
							piece.addEventListener('click', function() {
								if(checkAndturn(_x, _y) > 0) {
									board[_x][_y] = turn;
									// checkAndturn(_x, _y);
									showBoard();
									turn = 3 - turn;
								};
							});
						})();
					}
				}
			}
		}
		// var test = document.createElement('div');
		// test.innerHTML = 'hello world';
		// b.appendChild(test);

		var cell = [
			document.getElementById('cell'),
			document.getElementById('white'),
			document.getElementById('black')

		];
		// console.log(cell);

		var board = [];

		onload = function() {

			for(var i = 0; i < 10; i++) {
				board[i] = [];
				for(var j = 0; j < 10; j++) {
					board[i][j] = 0;
				}
			}

			board[4][4] = 1;
			board[4][5] = 2;
			board[5][4] = 2;
			board[5][5] = 1;

			showBoard();

			// console.log(board[3][4]);
		}
	})();
