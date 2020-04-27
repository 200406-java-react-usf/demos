## Normalization In Practice

Normalization is a technique for organizing data in a database. It is important that a database is normalized to minimize redundancy (duplicate data) and to ensure only related data is stored in each table. Normalization also prevents any issues stemming from database modifications such as insertions, deletions, and updates.

### Unnormalized Schema

The following schema representation is not compliant with any of the Normal Forms. 

**Table: SalesStaff**
|  id   |      name       |     office    |  age  |  customer1  |  customer2  |  customer3  |
| ----- | --------------- | ------------- | ----- | ----------- | ----------- | ----------- |
|   1   | Alice Anderson  |     Reston    |   28  |  Cognizant  |   Infosys   |             |
|   2   | Bob Bailey      |    Chicago    |   43  | Freddie Mac |    FINRA    | Capital One |
|   3   | Charles Combs   |     Tampa     |   32  |  WellCare   |     TCS     |             |


Some things should jump out to you when you think about this table structure:
- the repeating columns for Customer data. 
- non-atomic values in the `name` column

As a result of these issues, querying this table for data will be awkward. Since we have each salesperson's name in a single cell it will be difficult to sort them by last name. Also, what if we need a salesperson to take on a fourth customer? Or a fifth? Should we just keep adding columns? Obviously not.


### 1st Normal Form (1NF)

A relation is in 1st Normal Form (1NF) describes a relation is in first normal form if and only if the domain of each attribute contains only atomic (indivisible) values, and the value of each attribute contains only a single value from that domain (no repeating columns).

Our table needs some work. First, we will break up the `name` column into two columns: `firstName` and `lastName`. Next, we will work on eliminating those repeating customer columns. The easiest way to do this is to create a new table that stores customer data. Be sure that you make this new table compliant with 1NF as well!

**Table: SalesStaff**
|  id   |  firstName | lastName  |     office    |  age  |
| ----- | ---------- | --------- | ------------- | ----- |
|   1   | Alice      | Anderson  |  Reston       |   28  |
|   2   | Bob        | Bailey    |  Chicago      |   43  |
|   3   | Charles    | Combs     |  Tampa        |   32  |



**Table: Customers**
|  id   |      name       |       hq       | sales_contact |
| ----- | --------------- | -------------- | ------------- |
|   1   | Cognizant       |  New Jersey    |       1       |
|   2   | Infosys         |  Chicago       |       1       |
|   3   | WellCare        |  Florida       |       3       |
|   4   | Capital One     |  Virginia      |       2       |
|   5   | Freddie Mac     |  Virginia      |       2       |
|   6   | TCS             |  New York      |       3       |
|   7   | FINRA           |  Washington DC |       2       |


### 2nd Normal Form (2NF)

A relation is in the 2nd Normal Form (2NF) if it fulfills the following two requirements:

1. It is in first normal form.
2. Does not contain any partial dependencies

It does not have any non-prime attribute that is functionally dependent on any proper subset of any candidate key of the relation. A non-prime attribute of a relation is an attribute that is not a part of any candidate key of the relation. Put simply, a relation is in 2NF if it is in 1NF and every non-prime attribute of the relation is dependent on the whole of every candidate key.

In our table the main thing that violates the 2NF is the fact that we have data regarding an office entity inside of our employee table. We should move office data to its own table (that is also 2NF-compliant). You're probably noticing a pattern here: everytime we advance a Normal Form, we create at least one new table. Which is pretty accurate all the up the highest Normal Forms.

**Table: SalesStaff**
|  id   |  firstName | lastName  |     office    |  age  |  officeId  |
| ----- | ---------- | --------- | ------------- | ----- | ---------- |
|   1   | Alice      | Anderson  |  Reston       |   28  |      1     |
|   2   | Bob        | Bailey    |  Chicago      |   43  |      3     |
|   3   | Charles    | Combs     |  Tampa        |   32  |      2     |


**Table: SalesOffice**
|  id   |     unitStreet    |   city    |    state    |    zip   |
| ----- | ----------------- | --------- | ----------- | -------- |
|   1   | 123 Main St.      | Reston    |  Virginia   |   20170  |
|   2   | 024 Very Real Dr. | Tampa     |  Florida    |   33648  |
|   3   | 966 Somewhere Ln. | Chicago   |  illinois   |   60634  |


**Table: Customers**
|  id   |      name       |       hq       | salesContact |
| ----- | --------------- | -------------- | ------------ |
|   1   | Cognizant       |  New Jersey    |       1      |
|   2   | Infosys         |  Chicago       |       1      |
|   3   | WellCare        |  Florida       |       3      |
|   4   | Capital One     |  Virginia      |       2      |
|   5   | Freddie Mac     |  Virginia      |       2      |
|   6   | TCS             |  New York      |       3      |
|   7   | FINRA           |  Washington DC |       2      |


### 3rd Normal Form (3NF)

A table is said to be in the 3rd Normal Form (3NF) if all of its the columns are functionally dependent on solely the primary key (i.e. no [transitive dependencies](https://en.wikipedia.org/wiki/Transitive_dependency)).

The closest thing to a 3NF violation that our schema has is (and this is being _really_ particular), is that the `zip` column of the `SalesOffice` table tells us what we need to know regarding the city and state of an office. So, we could remove those columns without losing any data, and simplifying our data model.

Additional Resource: [3rd NF Explained in Simple English](https://www.essentialsql.com/get-ready-to-learn-sql-11-database-third-normal-form-explained-in-simple-english/)

**Table: SalesStaff**
|  id   |  firstName | lastName  |     office    |  age  |  officeId  |
| ----- | ---------- | --------- | ------------- | ----- | ---------- |
|   1   | Alice      | Anderson  |  Reston       |   28  |      1     |
|   2   | Bob        | Bailey    |  Chicago      |   43  |      3     |
|   3   | Charles    | Combs     |  Tampa        |   32  |      2     |


**Table: SalesOffice**
|  id   |     unitStreet    |   zip   |
| ----- | ----------------- | ------- |
|   1   | 123 Main St.      |  20170  |
|   2   | 024 Very Real Dr. |  33648  |
|   3   | 966 Somewhere Ln. |  60634  |


**Table: Customers**
|  id   |      name       |       hq       | salesContact |
| ----- | --------------- | -------------- | ------------ |
|   1   | Cognizant       |  New Jersey    |       1      |
|   2   | Infosys         |  Chicago       |       1      |
|   3   | WellCare        |  Florida       |       3      |
|   4   | Capital One     |  Virginia      |       2      |
|   5   | Freddie Mac     |  Virginia      |       2      |
|   6   | TCS             |  New York      |       3      |
|   7   | FINRA           |  Washington DC |       2      |

---

## How Far Is Too Far?

There is such a thing as **"overnormalization"**, and the consequences can be just as bad as a unnormalized database if the use case is not right. You probably notices that as we normalized our schema we ended up creating new tables to store information. In fact the 6th Normal Form has the requirement that the rows of a table contain: the primary key and at most one other attribute.

This may be necessary in some scenarios (e.g. data warehousing - "columnar data store"). However, we are building databases which will be leveraged by web application. Having an unnecessary amount of tables will slow down our query performance (since we will need to perform a large about of table joins). So, for our use cases: compliance to the 3NF is the sweet spot.
