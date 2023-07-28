-- create database test;
-- use test;
create table employee(
id int primary key not null  ,
name varchar(30),
age int not null ,
email varchar(40)
);

insert into employee values(0,'dao', 11 , 'vido@gmail.com'),
(2,'davio',  13 , 'davido@gmail.com'),
(3,'davdo',  13 , 'davdo@gmail.com'),
(4,'daido',  13 , 'daido@gmail.com'),
(1,'davido',  11 , 'ido@gmail.com');
