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

-- stored procedures (doesn't have an explicit return; uses call to invoke)
 create or replace procedure insert_numbers(n integer, n2 integer)
 as $$
	begin 
 		insert into a values (n), (n2);
 	end
 $$ language plpgsql;

call insert_numbers(42, 24);
select * from a;

/* 
    Triggers
    
    syntax:
    
        create trigger [name]
        [before|after|instead of] [insert|update|delete] on [table]
        for each [row|statement]
        execute function [function-name|procedure-name]
 */
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