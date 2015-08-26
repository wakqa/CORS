
//var Request = new XMLHttpRequest();

//Request.open('GET', 'http://private-06b80-wakanda.apiary-mock.com/notes');

//Request.onreadystatechange = function () {
//  if (this.readyState === 4) {
//    console.log('Status:', this.status);
//    console.log('Headers:', this.getAllResponseHeaders());
//    console.log('Body:', this.responseText);
//  }
//};

//Request.send(JSON.stringify(body));



var Request = new XMLHttpRequest();
Request.open('GET', 'http://private-06b80-wakanda.apiary-mock.com/notes');

Request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

Request.send();

//var state = client.readyState;
//if(state == 4){
//    response = client.status;
//}    
//return response;