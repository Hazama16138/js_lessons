	(function() {
		// document.write('hello world');

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
								board[_x][_y] = 2;
								showBoard();
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
