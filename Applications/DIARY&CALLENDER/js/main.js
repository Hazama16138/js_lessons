(function() {

//変数定義

		var date = new Date(),
			  year = date.getFullYear(),
			  month = date.getMonth() + 1,
			  today = date.getDate(),
				weekDay = date.getDay(),

				showCallender = function() {
					var htmlStr = "<tr>";

					for(var i = 0; i < firstWeekDay; i++) {
						htmlStr += "<td>&nbsp;</td>";
					}

					for(var i = 1; i <= lastDate.getDate(); i++, firstWeekDay++) {

						htmlStr += "<td>" + i + "</td>";

						if(firstWeekDay % 7 == 6) {
							htmlStr += "</tr>";
						}

					}

					for(var i = 0; i < 6 - lastDate.getDay(); i++) {
						htmlStr += "<td>&nbsp;</td>"
					}

					callender.innerHTML = htmlStr;
				},

			  table_title = year + "年" + month + "月",

			  firstDate = new Date(year, month - 1, 1),
			  lastDate = new Date(year, month, 0),

				firstWeekDay = firstDate.getDay(),

				title = document.getElementById("title"),
				callender = document.getElementById("callender"),
				prev = document.getElementById("prev"),
				next = document.getElementById("next");

				console.log(firstDate);
				console.log(lastDate);


//処理

	window.onload = function() {

		title.innerHTML = table_title;

		showCallender();

		//イベント処理

		prev.addEventListener('click', function() {

			var prev_date = new Date(year, month - 1),
					prev_year = prev_date.getFullYear(),
					prev_month = prev_date.getMonth();

			firstDate = new Date(year, month - 1, 1);
		 	lastDate = new Date(year, month, 0);
			firstWeekDay = firstDate.getDay();

			year = prev_year;
			month = prev_month;

			console.log(prev_date);
			// if(month == 0) {
			// 	month = 12;
			// 	year = prev_year - 1;
			// }
			// console.log(month);

			table_title = year + "年" + (month + 1) + "月";


			title.innerHTML = table_title;

			showCallender();

		});

		next.addEventListener('click', function() {

			var next_date = new Date(year, month),
				 	next_year= next_date.getFullYear(),
					next_month = next_date.getMonth() + 1;

			firstDate = new Date(year, month, 1);
			lastDate = new Date(year, month + 1, 0);
			firstWeekDay = firstDate.getDay();

			console.log(next_date);

			year = next_year;
			// console.log(year);
			month = next_month;
			// if(month == 0) {
			// 	month = 12;
			// 	year = next_year - 1;
			// }
			// console.log(month);

			table_title = year + "年" + month + "月";


			title.innerHTML = table_title;

			showCallender();

		});
	};
})();
