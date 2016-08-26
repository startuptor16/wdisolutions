var request = require("request"),
  cheerio = require("cheerio"),
  url = "https://www.reddit.com/";
  
request(url, function (error, response, body) {
  	if (!error) {
    	var $ = cheerio.load(body);
      var titles = $("#siteTable .title .title");

      var arr = [];
     	titles.each(function(i,title){
     		console.log($(title).text());
     	})
  	} else {
    	console.log("We’ve encountered an error: " + error);
  	}
});