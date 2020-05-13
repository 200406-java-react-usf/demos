-- views
-- when we execute a query, we generate a result set
-- sometimes we may frequently use that result set as 
-- a base for executing other queries.
-- views are basically just saved result sets, that  
-- act as a virtual "table"

-- apparently, you can insert records into the view
-- and it will also add them to the original table
create table demo_customer (
	id serial,
	fn varchar(25),
	ln varchar(25)
);

insert into demo_customer (fn, ln) values
	('Wezley', 'Singleton'), 
	('Nick', 'Jurczak'), 
	('Steve', 'Kelsey');

select * from demo_customer dc;

create view view_demo_customers as
select * from demo_customer;

select * from view_demo_customers;

insert into demo_customer (fn, ln) 
values ('Trevin', 'Chester');

insert into view_demo_customers (fn, ln) 
values ('test1', 'test1'); 