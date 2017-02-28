var express = require('express');

var app = express();
var myOutput = 	{
	  unix: null,
		natural: null
	};
	
var port = process.env.PORT || 8080;	
	
var months = ['January','February','March','April','May','Jun','July','August','September','October','November','December'];

app.get('/', function (req, res) {
  
  res.send("Timestamp Microservice (FreeCodeCamp microservice project1");

});


app.get('/:myUrl', function (req, res) {
  
  res.send(makeItSo(req.params.myUrl));

});

app.listen(port, function () {
  console.log('Example app listening on port' +port+ ' !');
});

function makeItSo(myValue) { 
	
	if (myValue == "") {
		return myOutput;
		
	}
	else if (myValue == parseInt(myValue)) {
		//that is unix date
		var temp = new Date(myValue*1000);
		myOutput.natural = months[temp.getMonth()] + " " + temp.getDate() + ", " + temp.getFullYear();
		myOutput.unix = parseInt(myValue);
		return myOutput;
	}
	else {
		//pretend it is natural date
		myOutput.unix = Date.parse(myValue);
		
		//check if it is really natural date
		if (isNaN(myOutput.unix)) {
			myOutput.natural = null;
			return myOutput;
		}
		else {
			myOutput.natural = myValue;
			return myOutput;
		}
	}
}

