-- basic queries (note that double quotes are used; this is 
-- because of the way the tables where created -- see chinook.sql)
select * from "Artist";

-- use a WHERE clause to filter results
select * from "Album" where "name" = 'AC/DC';

/*
 * WHERE clause comparison operators:
 * 		=, >, <, <=, >=
 * 		NOT EQUAL: != or <>
 */
-- not-equal operator
select *
from "Artist" a 
where a."Name" <> 'AC/DC';

-- not-equal operator
select *
from "Artist" a 
where a."Name" != 'AC/DC';

-- subquery using scalar function
select *
from "Artist" a 
where a."ArtistId" = (
	select floor(5.8)
)

-- like operator
select * 
from "Artist" a
where a."Name" like 'Three%'

select *
from "Artist" a 
where a."Name" like '%d';




-- order by (asc is implicit)
select *
from "Artist"
order by "ArtistId" desc;




-- Scalar functions
select floor(5.8);
select round(5.8);
select abs(-42);

-- String concat
select 'Hello ' || ', world!';
select concat('Hello, ', 'world!');


-- Aggregate
select distinct ("Title") from "Album" 
where "Title" = 'Minha Historia';

select * from "Album";
select count("Title") from "Album"; -- only counts non-null values

select min("UnitPrice") from "Track";
select max("UnitPrice") from "Track";
select avg("UnitPrice") from "Track";



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
select "reportsTo" 
from "Employee" e1
join "Employee" e2
on e1."ReportsTo" = 2;

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