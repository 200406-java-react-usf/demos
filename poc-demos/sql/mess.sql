select * from "Artist";

select * from "Album" a;

/*
 * WHERE clause comparison operators:
 * 		=, >, <, <=, >=
 * 		NOT EQUAL: != or <>
 */
-- god awful not equal operator
select *
from "Artist" a 
where a."Name" <> 'AC/DC';

-- like operator
select * 
from "Artist" a
where a."Name" like 'Three%'

select *
from "Artist" a 
where a."Name" like '%d';


-- single record insert
insert into "Artist" values (276, 'Natasha Bedingfield');

-- multi-record insert!
insert into "Artist" values 
	(277, 'Greta Van Fleet'),
	(278, 'Sum 41'),
	(279, 'Three Days Grace');

-- update [table] set [column] = [new value] where [predicate]
update "Artist"
set "Name" = 'Sublime' 
where "Name" = 'Sum 41';

-- order by (asc is implicit)
select *
from "Artist"
order by "ArtistId" desc;

-- delete from [table] where [predicate]
delete from "Artist" where "ArtistId" = 276;

-- TCL
commit;
rollback;

-- Scalar
select floor(5.8);
select round(5.8);
select abs(-42);

-- String concat
select 'Hello ' || ', world!';
select concat('Hello, ', 'world!'); 
select 'Hello, World' as hello;

-- subquery using scalar function
select *
from "Artist" a 
where a."ArtistId" = (
	select floor(5.8)
)


-- Aggregate
select distinct ("Title") from "Album" 
where "Title" = 'Minha Historia';

select * from "Album";
--update "Album" set "Title" = null where "AlbumId" = 347; -- violates table constraints
select count("Title") from "Album"; -- only counts non-null values

select min("UnitPrice") from "Track";
select max("UnitPrice") from "Track";
select avg("UnitPrice") from "Track";

/* 
 * Properties of a Transaction (tx)
 * 
 * ACID:
 * 	- Atomicity (all are committed or none are)
 * 	- Consistency (the op does not violate ref integrity)
 * 	- Isolation (the degree to which txs on different threads are separated)
 * 	- Durablity (if the system fails, the DB still maintains the last commit)
 */

-- joins

-- inner join ("inner" is implied)
-- with an "on" clause
select al."AlbumId", al."Title", ar."Name" as Artist
from "Album" al
join "Artist" ar
on al."ArtistId"  = ar."ArtistId"; 

-- inner join
-- with an "using" clause (the two tables have a col w/ the same name)
select al."AlbumId", al."Title", ar."Name" as Artist
from "Album" al
join "Artist" ar
using ("ArtistId");

-- self join (join on another record within the same table)
--select distinct("eportsTo" ) 
--from "Employee" e1
--join "Employee" e2
--on e1."ReportsTo" = 2;

-- multi table joins
select t."TrackId", al."Title", ar."Name" 
from "Track" t
join "Album" al
using ("AlbumId")
join "Artist" ar
using ("ArtistId");

/* 
 * Set Operations
 * 	- UNION (removes duplicates)
 *  - UNION ALL (preserves duplicates)
 *  - INTERSECT (gives all records in common between the result sets)
 *  - EXCEPT (gives the difference between two result sets)
 */

/*
 * Rules for set operations:
 * 	1. All result sets MUST have the same # of columns
 *  2. Each column must be compatible with the columns being unioned
 */


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


-- PL/pgSQL = Procedure Language extension of PostGreSQL
-- NOT A SUBLANGUAGE! but and extension...

-- stored functions

-- create [or replace] function [name] (params) 
-- returns [type]
-- as '
--	begin
-- 		[logic]
--	end
-- '
-- language plpgsql;

/*
 * There are 3 different kinds of params: IN, OUT, INOUT
 * 	- IN param: input value; read, but it is not changed nor returned
 *  - OUT param: output value; no taken in nor read, but will be changed and returned
 *  - INOUT: both input and output value; the value is taken in and read, changed, and returned
 */

create or replace function multiply(x numeric, y numeric)
returns numeric as '
	begin 
		return x * y;
	end
' language plpgsql;

select multiply(5, 4);

create or replace function multiply(x numeric, y numeric, z numeric)
returns numeric as '
	begin
		return $1 * $2 * $3; -- another way to access params inside a fn
	end
' language plpgsql;

select multiply(2, '42', 42); -- omg...pgsql can do type coercion.

-- use dollar quotes ($$) to wrap up logic for plpgsql
create or replace function get_largest() returns text as $$
	
	declare 
	
		largest integer;
		track_name text;
		result text;
	
	begin 
		
		select max("TrackId") 
		into largest
		from "Track";
	
		select "Name" 
		into track_name
		from "Track"
		where "TrackId" = largest;
	
		result := largest || ' - ' || track_name;
	
		return result;
	
	end

$$ language plpgsql;

select get_largest();
select *
from "Track" t
order by "TrackId" desc;

-- anonymous PLSQL statements
-- always returns void
do $$

	declare 
	
		largest integer;
		track_name text;
		result text;
	
	begin 
		
		select max("TrackId") 
		into largest
		from "Track";
	
		select "Name" 
		into track_name
		from "Track"
		where "TrackId" = largest;
	
		result := track_name;

		insert into b values (result, largest);
		
	end

$$ language plpgsql;

alter table b
	add column numbuh numeric;

select * from b;

 -- Procedure that returns a single result set (cursor)
CREATE OR REPLACE FUNCTION get_all)() RETURNS refcursor AS $$
    DECLARE
      ref refcursor;                                                     -- Declare a cursor variable
	BEGIN
	  OPEN ref FOR SELECT city, state FROM cities;   -- Open a cursor
	  RETURN ref;                                                       -- Return the cursor to the caller
	END;
$$ LANGUAGE plpgsql;

-- will work on functions returning cursors
--create or replace function get_all_artists()
--returns refcursor as $$
--
--	declare 
--		my_cursor refcursor;	
--	begin 
--		open my_cursor for
--		select *
--		from "Artist";
--	
--		return my_cursor;
--	end
--
--$$ language plpgsql;
--fetch all in select get_all_artists();


-- stored procedures (doesn't have an explicit return; uses call to invoke)
 create or replace procedure insert_numbers(n integer, n2 integer)
 as $$
	begin 
 		insert into a values (n), (n2);
 	end
 $$ language plpgsql;

call insert_numbers(42, 24);
select * from a;

-- triggers

-- syntax
-- create trigger [name]
-- [before|after|instead of] [insert|update|delete] on [table]
-- for each [row|statement]
-- execute function [function-name|procedure-name]

create table colors (
	id integer primary key,
	color text
);

insert into colors values 
	(1, 'blue'),
	(2, 'red'),
	(3, 'green'),
	(4, 'grey');

select * from colors;
update colors set color = 'blue' where id = 4;

-- tg_op = trigger operations, holds info about the trigger being executed
create or replace function no_more_blues() 
returns trigger
as $$

	begin
		
		if (tg_op = 'insert') then
			if (new.color = 'blue') then
				return null;
			end if;
		end if;
	
		if (new.color = 'blue') then
			return null;
		end if;
	
		return new;
	
	end

$$ language plpgsql;

drop trigger no_blues on public.colors;

create trigger no_blues
before insert or update on colors
for each row
execute function no_more_blues();

select * from colors;
insert into colors values (5, 'yellow');
update colors set color = 'blue' where id = 5;

create view view_colors as 
select * from colors;

-- does the trigger fire off if we manipulate a view based on the table?
-- it does not
select * from view_colors;
insert into view_colors values (7, 'blue');
update view_colors set color = 'blue' where id = 5;

