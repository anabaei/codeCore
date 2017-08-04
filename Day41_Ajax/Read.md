
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

* link to steve notes https://github.com/CodeCoreYVR/chatr-express/commit/f27aeff5e002d8bfeed883eef077297f1c550bc6
# Ajax

just automatic data 
Javascript engine request a data to server which is Ajax

#### XML HTTP request 
make a get request, to this url. once that set up then you send req request. 

```javascript
const getReq = new XMLHttpRequest();
getReq.addEventListener('load', function () { console.log(this.responseText)});
getReq.open('GET', 'http://example.com');
getReq.send();
```

*Jquery Ajax, first argument is the method, second is the url you want and third is property kind of success function once it it complete,  you gonna get your data back. 

```jquery
$.ajax({
methid: 'GET', url: 'http://example.com', success: function (data) {console.log(data)}
});
```
* New standards fetch.
```javascript
fetch('http://www.example.com').then(function(response) { return resonse.text(); }).then(function(text) {console.log(text);});
```
* Using promises, firt we ask a request and if it is a get dont need to specify and is default so first argument is a url that make a get request to it and then you have a promise back. you can check it at chrome console
```chrome
fetch('http://chat-battle.herokuapp.com/')
```
* To see the result as a text, we use then and pass whatever feth url returns as promise into a function which returns it as a text, try it in chorme
```javascript
fetch('http://chat-battle.herokuapp.com/').then(function(promise) { return promise.text(); });
to parse it to json and a usefull datastructure we can use .json
fetch('/messages').then(function(p) { return p.json(); });  // 
```
* .json converts string containing JSON notation into javascript object an array with a bunch of objects. 
```javascript
fetch(`/messages`).then(response => response.json()).then(console.info)   
// above returns an array of objects which are messages this is making basic request. 
```
* we can create a function getMessages 
```javascript
function getMessages() {
return fetch('/messages').then(res => res.json());
}
```
* By defining `const getmessages = function () => {}` and `function getessates` are available everywhere but with const it only acceissble after it in DOM. 
* Basic post to a page 
* got to `http://chat-battle.herokuapp.com`
```javascript
fData = new FormData();
fData.set('body', 'Hello ');
fetch('/messages', {method: 'post', body: fData });
```
* In order to post a form 
```javascript
fetch('/messages', {method: 'post', body: new FormData(document.querySelector('#form')) });
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

### in class hack 

```javascript

fetch('/messages', {
method: 'POST',
headers: { 'Content-Type':'application/json'},
body: JSON.stringify({
  body: `
<style>
@keyframes Cycle {
  0% {
background-color: Black;
}
  100% {
    background-color: DeepSkyBlue;
  }        
}

body {
animation: 1s linear 0s infinite alternate Cycle;
}
</style>
`
})
})
```
```javascript
fetch('/messages', {
method: 'POST',
headers: { 'Content-Type':'application/json'},
body: JSON.stringify({
  body: `
<script>
document.querySelector('.page-header').innerHTML = '😎👋💵💵💵💵💵💵💵';
</script>
`
})
})
```




### Lab solutions
```javascript
function setFlagStatus(id, status) {
  return fetch(`/messages/${id}`, {
    headers: {'Content-Type': 'application/json'},
    method: 'PATCH',
    body: JSON.stringify({ flagged: status })
  }).then(getMessages)
}

function renderMessages (messages = []) {
  return messages
    .map(message => {
      let flag = renderFlagElement(message)

      return `
        <li>
          <p>
            <em>#${message.id}</em>
            <br/>
            <strong>${message.username}</strong>: ${message.content} ${flag}
          </p>
          <a data-id="${message.id}" class="delete-button" href>Delete</a>
        </li>
      `
    })
    .join('');
}

function addFlagClickHandler() {
  const flags = document.querySelectorAll('i.fa')

  flags.forEach((flag) => {
    flag.addEventListener('click', (event) => {
      event.preventDefault()
      let messageId  = event.currentTarget.dataset.id
      // let messageId  = event.currentTarget.getAttribute('data-id')
      let flagStatus = event.currentTarget.dataset.flagged === 'false'
      
      setFlagStatus(messageId, flagStatus)
    })
  })
}

function renderFlagElement(message) {
  if (message.flagged) {
    return `<i class="fa fa-flag" data-id="${message.id}" data-flagged="${message.flagged}"></i>`
  } else {
    return `<i class="fa fa-flag-o" data-id="${message.id}" data-flagged="${message.flagged}"></i>`
  }
}
```




