(function() {

//変数定義

		var date = new Date(),
			  year = date.getFullYear(),
			  month = date.getMonth() + 1,
			  today = date.getDate(),
				weekDay = date.getDay(),

			  table_title = year + "年" + month + "月",

			  firstDate = new Date(year, month - 1, 1),
			  lastDate = new Date(year, month, 0),

				firstWeekDay = firstDate.getDay(),

				title = document.getElementById("title"),
				callender = document.getElementById("callender"),
				prev = document.getElementById("prev"),
				next = document.getElementById("next");

//処理

	window.onload = function() {

		title.innerHTML = table_title;

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

		//イベント処理

		prev.addEventListener('click', function() {

			title.innerHTML = "hello prev world!";

		});

		next.addEventListener('click', function() {

			title.innerHTML = "hello next world!";

		});
	};
})();
