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

-- delete from [table] where [predicate]
delete from "Artist" where "ArtistId" = 276;

-- TCL
commit;
rollback;

/* 
 * Properties of a Transaction (tx)
 * 
 * ACID:
 * 	- Atomicity (all are committed or none are)
 * 	- Consistency (the op does not violate ref integrity)
 * 	- Isolation (the degree to which txs on different threads are separated)
 * 	- Durablity (if the system fails, the DB still maintains the last commit)
 */