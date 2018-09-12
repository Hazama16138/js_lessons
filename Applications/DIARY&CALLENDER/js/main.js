(function() {

		//変数定義

		var date = new Date(),
			  year = date.getFullYear(),
			  month = date.getMonth() + 1,
			  today = date.getDate(),
				weekDay = date.getDay(),
				prev_date = new Date(year, month - 1),
				next_date = new Date(year, month),

				table_title = year + "年" +	("0" + month).slice(-2) + "月",

			  firstDate = new Date(year, month - 1, 1),
			  lastDate = new Date(year, month, 0),

				firstWeekDay = firstDate.getDay(),

				title = document.getElementById("title"),
				callender = document.getElementById("callender"),
				prev = document.getElementById("prev"),
				next = document.getElementById("next");

		//関数

		var showCallender = function() {
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
			};

	//処理

	window.onload = function() {

		title.innerHTML = table_title;

		showCallender();

		//イベント処理

		prev.addEventListener('click', function() {

			month -= 1;

			if(month < 1) {
				month = 12;
				year -= 1;
			}

			firstDate = new Date(year, month - 1, 1);
		 	lastDate = new Date(year, month, 0);
			firstWeekDay = firstDate.getDay();

			table_title = year + "年" + ("0" + month).slice(-2) + "月";


			title.innerHTML = table_title;
			//
			showCallender();

		});

		next.addEventListener('click', function() {

			month += 1;

			if(month > 12) {
				month = 1;
				year += 1;
			}

			firstDate = new Date(year, month - 1, 1);
			lastDate = new Date(year, month, 0);
			firstWeekDay = firstDate.getDay();


			table_title = year + "年" + ("0" + month).slice(-2) + "月";

			title.innerHTML = table_title;

			showCallender();

		});
	};
})();
