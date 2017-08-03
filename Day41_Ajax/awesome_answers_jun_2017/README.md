# Ajax

just automatic data 
Javascript engine request a data to server which is Ajax

#### XML HTTP request 
make a get request, to this url. once that set up then you send it. 

Jquery ended up 

use the method ajax, and method and make a property and once it is complete you get response. 

new standards

fetch gives new promise, then you get the promise back and response object then you get back and you get back. 

### Json
lightweight format of javascript. create objects of strings.

```javascript
fetch(`/messages`)
fetch(`/messages`).then(response => response.text())
// this is jason returns instead 
fetch(`/messages`).then(response => response.json()).then(console.info)   
// above returns an array of objects which are messages this is making basic request. 
```
* write a function to get all the messages and show them in page
* becuase we run it several times, so we create a function getMessages 
```javascript
function getMessages() {
return fetch('messages').then(res => res.json());
}
```
by defining const getmessages = function () => {} and function getessates are available everywhere but with const it only acceissble after it in DOM. 

```javascript
/// short cuts functions to fetch into web request 
function q (cssQuery){
	return document.querySelector(cssQuery);
}
function qs (cssQuery){
	return document.querySelectorAll(cssQuery);
}

function getMessages() {
return fetch('messages').then(res => res.json());
}
```

