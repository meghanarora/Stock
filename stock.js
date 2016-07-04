	function myFunction() {
		var symbol = document.getElementById("form1").elements[0].value;
		//console.log(symbol);
		var callback = function(data) {
                    var price=data.query.results.span.content;
                    var changeMe = document.getElementById("stockprice");
                    changeMe.innerHTML = price;
                    console.log(price);
                };
		var url = 'http://query.yahooapis.com/v1/public/yql?';
		//var data=  "q=select%20*%20from%20html%20where%20url%20%3D%22http%3A%2F%2Ffinance.yahoo.com%2Fq%3Fs%3Daapl%22%20and%20xpath%3D%20%22%2F%2Fspan%5B%40id%3D'yfs_l84_aapl'%5D%22&format=json&diagnostics=true&callback=";
		var data=  "q=select%20*%20from%20html%20where%20url%20%3D%22http%3A%2F%2Ffinance.yahoo.com%2Fq%3Fs%3D" + symbol + "%22%20and%20xpath%3D%20%22%2F%2Fspan%5B%40id%3D'yfs_l84_" + symbol + "'%5D%22&format=json&diagnostics=true&callback=";

		$.getJSON(url, data, callback);
	}