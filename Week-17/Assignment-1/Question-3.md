# What are the primary keys and foreign keys in a relational database, and how do they establish relationships between tables?

In a relational database, primary keys and foreign keys are fundamental concepts used to establish relationships between tables and ensure data integrity.

## Primary Key:

A primary key is a unique identifier for a record in a table. It ensures that each row in the table is uniquely identifiable and can't contain duplicate values. The primary key is used to enforce entity integrity, which means that each entity (or row) in the table can be uniquely identified.

### Key characteristics of a primary key:

- Uniqueness: No two rows in the table can have the same value for the primary key.
- Non-nullability: The primary key value must always be present and cannot be null.
- Uniqueness enforcement: The database management system (DBMS) enforces the uniqueness of primary key values.

## Foreign Key:

A foreign key is a field or set of fields in one table that refers to the primary key of another table. It establishes a link or relationship between two tables, indicating that there is a connection between the data in these tables. The foreign key in one table essentially references the primary key in another table.

### Key aspects of a foreign key:

- Relationship establishment: A foreign key establishes a relationship between two tables, often referred to as a parent table (with the primary key) and a child table (with the foreign key).
- Referential integrity: The use of foreign keys helps maintain referential integrity, which ensures that relationships between tables remain consistent. It prevents actions that could cause orphaned records (records in the child table without a corresponding record in the parent table) or inconsistencies in data.
- Cascading actions: DBMSs often provide options for cascading actions when dealing with foreign keys. For example, you can specify what happens when a parent record is deleted or updated. Cascading actions can include actions like cascading delete (deleting child records when the parent is deleted) or cascading update (updating child records when the parent is updated).

### Establishing Relationships:

To establish a relationship between tables using primary and foreign keys, you would typically:

1. Identify the primary key of the parent table (the table being referred to).
2. Add a column in the child table (the table with the foreign key) that references the primary key of the parent table. This column is the foreign key.
3. Define the relationship type, such as one-to-one, one-to-many, or many-to-many.
4. Configure any necessary referential integrity constraints or cascading actions based on the database system you're using.

For example, in the context of an "Employee" table and a "Department" table, the "Department ID" in the "Employee" table can be a foreign key that references the "Department ID" in the "Department" table, creating a relationship between employees and departments. This way, you can associate each employee with a specific department using the foreign key relationship.
