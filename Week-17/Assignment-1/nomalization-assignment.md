# Question 1: Normalize the table to 1NF, 2NF, and 3NF

Consider the following unnormalized table for a bookstore database:

| Book ID | Title                 | Author              | Genre   | Publisher     | ISBN           | Price |
| ------- | --------------------- | ------------------- | ------- | ------------- | -------------- | ----- |
| 101     | To Kill a Mockingbird | Harper Lee          | Fiction | HarperCollins | 978-0061120084 | 10.99 |
| 102     | The Great Gatsby      | F. Scott Fitzgerald | Fiction | Scribner      | 978-0743273565 | 12.50 |
| 103     | Principles of Physics | Jearl Walker        | Science | Wiley         | 978-0321976444 | 50.00 |

## 1NF (First Normal Form):

In 1NF, we need to make sure that each column holds atomic values and there are no repeating groups. To achieve this, we'll remove the repeating attributes and create a separate table for authors and publishers.

### Books Table:

| Book ID | Title                 | Genre   | ISBN           | Price |
| ------- | --------------------- | ------- | -------------- | ----- |
| 101     | To Kill a Mockingbird | Fiction | 978-0061120084 | 10.99 |
| 102     | The Great Gatsby      | Fiction | 978-0743273565 | 12.50 |
| 103     | Principles of Physics | Science | 978-0321976444 | 50.00 |

### Authors Table:

| Author              | Book ID |
| ------------------- | ------- |
| Harper Lee          | 101     |
| F. Scott Fitzgerald | 102     |
| Jearl Walker        | 103     |

### Publishers Table:

| Publisher     | Book ID |
| ------------- | ------- |
| HarperCollins | 101     |
| Scribner      | 102     |
| Wiley         | 103     |

## 2NF (Second Normal Form):

In 2NF, we ensure that non-key attributes are fully functionally dependent on the entire primary key. Here, the primary key is (Book ID).

The Genre attribute depends only on the Book ID, so no changes are needed.

## 3NF (Third Normal Form):

In 3NF, we ensure that non-key attributes are not transitively dependent on the primary key. Here, the Publisher attribute is transitively dependent on the Book ID through the Author.

So, we've removed the transitive dependency by creating a separate table for publishers and a junction table to establish the relationship between books and publishers.

### Books Table:

| Book ID | Title                 | Genre   | ISBN           | Price |
| ------- | --------------------- | ------- | -------------- | ----- |
| 101     | To Kill a Mockingbird | Fiction | 978-0061120084 | 10.99 |
| 102     | The Great Gatsby      | Fiction | 978-0743273565 | 12.50 |
| 103     | Principles of Physics | Science | 978-0321976444 | 50.00 |

### Authors Table:

| Author              | Book ID |
| ------------------- | ------- |
| Harper Lee          | 101     |
| F. Scott Fitzgerald | 102     |
| Jearl Walker        | 103     |

### Publishers Table:

| Publisher     | Publisher ID |
| ------------- | ------------ |
| HarperCollins | 1            |
| Scribner      | 2            |
| Wiley         | 3            |

### Books_Publishers Table:

| Book ID | Publisher ID |
| ------- | ------------ |
| 101     | 1            |
| 102     | 2            |
| 103     | 3            |

# [Bonus]Question 2: Database Normalization Practice

Apply Normalization on the below table and return the list of tables after 1NF, 2NF, 3NF, 4NF, 5NF( if applicable)

### Table: Employee Information

| Employee ID | Employee Name | Department | Project ID | Project Name | Start Date | End Date   | Salary |
| ----------- | ------------- | ---------- | ---------- | ------------ | ---------- | ---------- | ------ |
| 101         | John Doe      | HR         | 001        | Project A    | 2023-01-15 | 2023-06-30 | 5000   |
| 101         | John Doe      | HR         | 002        | Project B    | 2023-04-01 | 2023-08-31 | 5200   |
| 102         | Jane Smith    | Marketing  | 001        | Project A    | 2023-02-01 | 2023-05-31 | 5500   |
| 103         | Mike Johnson  | IT         | 002        | Project B    | 2023-03-10 | 2023-08-15 | 6000   |
| 103         | Mike Johnson  | IT         | 003        | Project C    | 2023-06-15 | 2023-11-30 | 6200   |
| 104         | Sarah Brown   | HR         | 002        | Project B    | 2023-04-20 | 2023-07-31 | 4800   |
| 105         | Robert Lee    | Finance    | 001        | Project A    | 2023-05-05 | 2023-09-30 | 5200   |
| 106         | Lisa Wang     | IT         | 001        | Project A    | 2023-06-01 | 2023-12-31 | 5800   |

### Step-by-Step Guidelines:

### Step 1: First Normal Form (1NF)

Ensure each column contains atomic values and eliminate repeating groups. In this case, we see that the table already has atomic values. However, we have repeating groups with Employee ID, Employee Name, Department, Project ID, Project Name, Start Date, End Date, and Salary.

### Table after 1NF:

| Employee ID | Employee Name | Department | Project ID | Project Name | Start Date | End Date   | Salary |
| ----------- | ------------- | ---------- | ---------- | ------------ | ---------- | ---------- | ------ |
| 101         | John Doe      | HR         | 001        | Project A    | 2023-01-15 | 2023-06-30 | 5000   |
| 101         | John Doe      | HR         | 002        | Project B    | 2023-04-01 | 2023-08-31 | 5200   |
| 102         | Jane Smith    | Marketing  | 001        | Project A    | 2023-02-01 | 2023-05-31 | 5500   |
| 103         | Mike Johnson  | IT         | 002        | Project B    | 2023-03-10 | 2023-08-15 | 6000   |
| 103         | Mike Johnson  | IT         | 003        | Project C    | 2023-06-15 | 2023-11-30 | 6200   |
| 104         | Sarah Brown   | HR         | 002        | Project B    | 2023-04-20 | 2023-07-31 | 4800   |
| 105         | Robert Lee    | Finance    | 001        | Project A    | 2023-05-05 | 2023-09-30 | 5200   |
| 106         | Lisa Wang     | IT         | 001        | Project A    | 2023-06-01 | 2023-12-31 | 5800   |

### Step 2: Second Normal Form (2NF)

In this case, a potential primary key could be a combination of Employee ID and Project ID, as they uniquely identify each record. There are no partial dependencies, as all attributes are fully dependent on the primary key.

### Table after 2NF:

| Employee ID | Project ID | Start Date | End Date   | Salary |
| ----------- | ---------- | ---------- | ---------- | ------ |
| 101         | 001        | 2023-01-15 | 2023-06-30 | 5000   |
| 101         | 002        | 2023-04-01 | 2023-08-31 | 5200   |
| 102         | 001        | 2023-02-01 | 2023-05-31 | 5500   |
| 103         | 002        | 2023-03-10 | 2023-08-15 | 6000   |
| 103         | 003        | 2023-06-15 | 2023-11-30 | 6200   |
| 104         | 002        | 2023-04-20 | 2023-07-31 | 4800   |
| 105         | 001        | 2023-05-05 | 2023-09-30 | 5200   |
| 106         | 001        | 2023-06-01 | 2023-12-31 | 5800   |

### Employee Table:

| Employee ID | Employee Name | Department |
| ----------- | ------------- | ---------- |
| 101         | John Doe      | HR         |
| 101         | John Doe      | HR         |
| 102         | Jane Smith    | Marketing  |
| 103         | Mike Johnson  | IT         |
| 103         | Mike Johnson  | IT         |
| 104         | Sarah Brown   | HR         |
| 105         | Robert Lee    | Finance    |
| 106         | Lisa Wang     | IT         |

### Project Table:

| Project ID | Project Name |
| ---------- | ------------ |
| 001        | Project A    |
| 002        | Project B    |
| 001        | Project A    |
| 002        | Project B    |
| 003        | Project C    |
| 002        | Project B    |
| 001        | Project A    |
| 001        | Project A    |

### Step 3: Third Normal Form (3NF)

Remove transitive dependencies. The Department attribute is transitively dependent on the Employee ID, so we'll move it to the Employee table.

### Employee Table:

| Employee ID | Employee Name | Department |
| ----------- | ------------- | ---------- |
| 101         | John Doe      | HR         |
| 101         | John Doe      | HR         |
| 102         | Jane Smith    | Marketing  |
| 103         | Mike Johnson  | IT         |
| 103         | Mike Johnson  | IT         |
| 104         | Sarah Brown   | HR         |
| 105         | Robert Lee    | Finance    |
| 106         | Lisa Wang     | IT         |

### Step 4: Fourth Normal Form (4NF)

There are no multi-valued dependencies in the current context, so we don't need to create additional tables.

### Step 5: Fifth Normal Form (5NF) [If Applicable]

Since there are no complex multi-valued relationships, we don't need to apply the 5th Normal Form in this scenario.
