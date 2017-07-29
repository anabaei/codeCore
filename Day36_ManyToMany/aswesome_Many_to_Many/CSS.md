# CSS
some csss
.voting_widget {
width: 75px;
display: flex;
flex-shrink: 0;
flex-flow: column;
aligh-item: center;
width: 100px;
justify-content: center;    -- it makes it 
}

.answer-list > li {
 display: flex;
 margin: 5px 0;  -- it margines top & bottum and zero asides 
}



flex-shrink is 1 by default 


```
```
 -----------   
 selectize.js 
 dist, 
 js, css, sectize folder, 
 dist/js/selectize.js copy to asset javascript add new file selectize.min.js  and past there, 
 we should user standanlone folders 
 we need to select our input object, and then call selectize on it, 
 
 inside application.js 
 //=requre jquery3
 //= require selectize.min.js 
 //=require jquery_ujs
 //= require tree. 
 
 
 # change question.coffee to question.js 
 then write your js there
to load after page is loaded 

$(function() {
 $('#quesiton_tag_list').selectize(
  delimeter: ',',
  persist: false,
  create: function(input){
   return {
    value: input,
    text: input
   }
 })
 
 
 
 $('#quesiton_tag_list').selectize(
  delimeter: ',',
  persist: false,
  create: function(input){
   return {
    value: input,
    text: input
   }
  }
 )
 
 in rails console we can have 
 Question.join(:tags_
 
 *difference between find & find_by 
 find_by if the result has not found it is nil  
 find if not find returns 404 error so it is suggested. 
 

/// Product backlog devides into small parts, spring backlog: assign each backlog to each team , sprint each team does own baclklog sprint. spring is a timeframe you get the work done. 
Wireframe s sketch that how pages connected to each other and then go to ERD.

https://github.com/voormedia/rails-erd 
after running: open erd.pdf
