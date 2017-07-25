# Many to Many 

has_and_belongs_to_many 
means that the join table woold not have a corresponding model, but the associated table is not accessable, we use another way 

create join table and access it,
so it is like 'like' table among users and questions

* Connecting togather through a table togather  
`rails g model like user:references question:references` 



