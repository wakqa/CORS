
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button5 = {};	// @Button
	var button4 = {};	// @Button
	var button3 = {};	// @Button
	var button2 = {};	// @Button
	var button1 = {};	// @Button
// @endregion// @endlock

// eventHandlers// @lock

	button5.click = function button5_click (event)// @startlock
	{// @endlock
		var Request = new XMLHttpRequest();

		Request.open('PUT', 'http://192.168.223.42:8081/rest/Employees/');

		Request.onreadystatechange = function () {
		  if (this.readyState === 4) {
		    console.log('Status:', this.status);
		    console.log('Headers:', this.getAllResponseHeaders());
		    console.log('Body:', this.responseText);
		  }
		};

		Request.send(null);
	};// @lock

	button4.click = function button4_click (event)// @startlock
	{// @endlock
		var xhr = new XMLHttpRequest();
		xhr.open("DELETE","http://192.168.223.42:8081/rest/Employees(9)");
		xhr.onreadystatechange = function () {
		  if (this.readyState === 4) {
		    console.log('Status:', this.status);
		    console.log('Headers:', this.getAllResponseHeaders());
		    console.log('Body:', this.responseText);
		  }
		};
		xhr.send(null);
	};// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		
		var xhr = new XMLHttpRequest();
		xhr.open("POST","http://192.168.223.42:8081/rest/Employees/?$method=update");
		var s = JSON.stringify({ 
   			name: "Soufiane"
		});
			xhr.onreadystatechange = function () {
		  if (this.readyState === 4) {
		    console.log('Status:', this.status);
		    console.log('Headers:', this.getAllResponseHeaders());
		    console.log('Body:', this.responseText);
		  }
		};
		xhr.send(s);
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		var xhr = new XMLHttpRequest();
		xhr.open("POST","http://192.168.223.42:8081/rest/$directory/login");
		var s = JSON.stringify(["user","user"]);
			xhr.onreadystatechange = function () {
		  if (this.readyState === 4) {
		    console.log('Status:', this.status);
		    console.log('Headers:', this.getAllResponseHeaders());
		    console.log('Body:', this.responseText);
		  }
		};
		xhr.send(s);
	};// @lock

	button1.action = function button1_action (event)// @startlock
	{// @endlock
		var Request = new XMLHttpRequest();

		Request.open('GET', 'http://192.168.223.42:8081/rest/$catalog/Employees/');

		Request.onreadystatechange = function () {
		  if (this.readyState === 4) {
		    console.log('Status:', this.status);
		    console.log('Headers:', this.getAllResponseHeaders());
		    console.log('Body:', this.responseText);
		  }
		};

		Request.send(null);
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button5", "click", button5.click, "WAF");
	WAF.addListener("button4", "click", button4.click, "WAF");
	WAF.addListener("button3", "click", button3.click, "WAF");
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("button1", "action", button1.action, "WAF");
// @endregion
};// @endlock
