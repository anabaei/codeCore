

https://www.postgresql.org/docs/9.1/static/sql-altertable.html

```sql
// POSTGRESQL 

CREATE table amir1(
  id SERIAL,
  make VARCHAR(50),
  MODEL VARCHAR(50),
  DESCRIPTION TEXT
  );
  
  INTEGER
  VARCHAR
  TEXT 
  DECIMAL
  BOOLEAN
  DATETIME

  SERIAL : GENERATE ID AUTOMATICALLY
  ```
 IT NEEDEDS	COLUMN NAME OR TABLE NAME 
 USES FOR STRINGS ONLY 

  IF TABLE NAME IS CAPITAL WE SHOULD USE "" OR MAKE IT SMALL LETTER 

CAPITALAZIE SELECT FROM WHERE ETC ... CONVENTION

NAME OF TABLES ARE PLURAL AND LOWER CASES

```sql
  SELECT * FROM AMIR1 where flase; // returns just column names 
  alter table amir1 add  column users varchar(255);
  alter table amir1 rename  users to locations;
  Insert into amir1 (make, model) values ('GERMANY','BMW');

  select * from students where registration_date > current_date - 20;

  select count(*) from students where registration_date > current_date - 20;
  registration_date > (now() - interval '20 days');
  registration_date between '2017-06-02' AND current_date;

  select * from students where age is not NULL;
  select * from students where first_name ILIKE 'Jo%';
```
  Ilike case insensitive;
```sql
  select * from country where name like 'a%' or name like 'b%';

  select * from students where registration_date between current_date -25 And current_date -20;
  Order by age ASC,last_name desc;

  select * from students  OFFSET 10 LIMIT 10;
  select * from students WHERE age > 25 offset 20 ;
 select * from students WHERE first_name like '%a' offset 20  limit 20;

select count(*) AS student_counts from students;
select sum(age) AS student_counts from students;
select first_name, sum(age) AS student_counts from students group by  first_name, age order by first_name;

select ROUND(avg(age),2) from students where registration_date > '2017-01-01';

select last_name, Round(AVG(age),2) As AVERAGE  from students  where age is not NULL group by  last_name order by AVERAGE Desc offset 10 limit 5;

select array_agg(first_name), last_name, Round(AVG(age),2) As AVERAGE  from students   
group by  last_name;

select json_object_agg(first_name,last_name), last_name, Round(AVG(age),2) As AVERAGE  from students   
group by  last_name;
update students 
set first_name='tammam'
where id=1;

update students set (first_name, last_name) = ('John','Snow') where id = 22;

update students set (first_name, last_name) = ('John','Snow') where id = 22;
select * from students;
 
 insert into students (first_name, last_name, age, email, registration_date, phone_number) values ('Amir', 'Nabaei', '99', 'amircmpt@gmail.com', '2017-06-07' ,'6045189612');
 select * from students order by age desc;

  select * from students order by age desc;
  
  update students set (age) = (50) where id = (select id from students order by id desc limit 1);
  select * from students where age = 50;





