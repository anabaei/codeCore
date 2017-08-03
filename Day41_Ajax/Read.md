
# Chatr in Express

To get started:

```bash
git clone git@github.com:CodeCoreYVR/chatr-express.git
cd chatr-express
yarn
yarn db:setup
```

Go to `http://localhost:3434` to view the app.

Write your client-side JavaScript in `public/javascripts/main.js`!

✨🤓✨


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

```javascript
document.addEventListener('DOMContentLoaded', () => {
 const messageUl = q('#messages');
 getMessages().
 then(messages => renderMessages(messages)) 
 .then(messagesHTML => messagesUl.innerHTML
 messageUl.inn
})
```
* Now we have that and we access it . now we gonna map all the messages and put them inside html 
```javascript
function renderMessages (messages = []) {
return messages.map(question => `<li><p>${message.content}</p></li>`).join(``);
}
```

then finaly the main.js would be like this:
```javascript
// Write chatr code here!

// Shortcut methods for using comming DOM selection methods
function q (cssQuery) {
  return document.querySelector(cssQuery);
}

function qs (cssQuery) {
  return document.querySelectorAll(cssQuery);
}

// Methods for making web requests to our server
function getMessages () {
  return fetch(`/messages`).then(res => res.json());
}

function postMessage (formData) {
  if (!(formData instanceof FormData) && typeof formData === 'object') {
    const {username, flagged, content} = formData;
    const newFormData = new FormData();
    if (username) newFormData.set('username', username);
    if (flagged) newFormData.set('flagged', flagged);
    if (content) newFormData.set('content', content);
    return postMessage(newFormData);
  }

  return fetch(
    `/messages`,
    { method: 'POST', body: formData }
  );
}

function renderMessages (messages = []) {
  return messages
    .map(message => `
      <li>
        <p>${message.content}</p>
      </li>
    ` )
    .join('');
}

document.addEventListener('DOMContentLoaded', () => {
  const messagesUl = q('#messages');

  function refreshMessages () {
    getMessages()
    // .then(messages => renderMessages(messages))
    .then(renderMessages)
    .then(messagesHTML => messagesUl.innerHTML = messagesHTML);
  }

  refreshMessages();
  setInterval(refreshMessages, 1000);
})
```
## 
* every second request from server and grab it put into page


setInterval(refresheMessages(), 1000); it gives set interval undefine so we use without () 
* we have to get 
```javascript
refreshMessages();  // create an instance 
setInterval(refresheMessages, 1000);
```

fData : is a form data 
in console
```javascript
const fData = new FormData()
fData
fData.set('content', 'Hello')
Array.from(fData.entries())

// then everytime it creates a new message 
fetch('/messages', { method: 'POST', body: fData })

``` 
and then it creates it as a funciton `postMessage`. 

// it chekckes whether the input is formdata or not 
const fData = new FormData()
fData instanceof FormData

so if instance is not formData and typeof formData has to be object then cont {userma,flagged, content } = formData;
const newFormData = new FormData();
newFormData.set('username', username);
newFormData.set('flagged', flagged);
newFormData.set('content', content);
return postMessage(newFormData);
}

### debugger is like byebug in rails 

const messagegefo, and in the form data all values are set as their name 

```javascript
messageForm.addEventListener('submit', event => {
event.preventDefault();

});
```

const fd = new FormData(q('#new-message')) 
const form = event.currentTarget;
const fData = new FormData(form);

// then everytime we call it the refresh the messages. 
postMessage(fData).then(refreshMessages)

### Delete 

```javascript
fetch('/messages/40', {method: 'DELETE'})
```
```javascript
<a class="delete-button" href> Delete </a>
```



we add an event listener to delete 

qs('.delete-button').forEach(deleteButton => { deleteButton.addEventListener('click', event => { event.preventDefault(); console.log('delete');


})})})









event.target.matches('.delete-button')  -- true 
event.target.matches('a.delete-button')  -- true 

messageUl.addEventListener('click;, event => {

 if(target.mathces('.delete-button')
}

function deleteMessage(id)
{
  
}




const fData = new FormData();
fData.set('body','Steve');
fetch('/messages', { method: 'POST', body: fData})







