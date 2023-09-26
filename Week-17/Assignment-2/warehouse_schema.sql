-- CITIES table
CREATE TABLE CITIES (
    CITY CHAR(20) PRIMARY KEY,
    STATE CHAR(20)
);

-- WAREHOUSES table
CREATE TABLE WAREHOUSES (
    WID INTEGER PRIMARY KEY,
    WNAME CHAR(30),
    LOCATION CHAR(20),
    EXTRA CONTEXT JSON,
    CITY CHAR(20),
    FOREIGN KEY (CITY) REFERENCES CITIES(CITY)
);

-- STORES table
CREATE TABLE STORES (
    SID INTEGER PRIMARY KEY,
    STORE_NAME CHAR(20),
    LOCATION_CITY CHAR(20),
    FOREIGN KEY (LOCATION_CITY) REFERENCES CITIES(CITY)
);

-- CUSTOMER table
CREATE TABLE CUSTOMER (
    CNO INTEGER PRIMARY KEY,
    CNAME CHAR(50),
    ADDR VARCHAR(50),
    CU_CITY CHAR(20),
    FOREIGN KEY (CU_CITY) REFERENCES CITIES(CITY)
);

-- ORDERS table
CREATE TABLE ORDERS (
    ONO INT PRIMARY KEY,
    ODATE DATE,
    CNO INTEGER,
    FOREIGN KEY (CNO) REFERENCES CUSTOMER(CNO)
);

-- ITEMS table
CREATE TABLE ITEMS (
    ITEMNO INTEGER PRIMARY KEY,
    DESCRIPTION TEXT,
    WEIGHT DECIMAL(5,2),
    COST DECIMAL(5,2)
);

-- ORDERS_ITEMS junction table for M:M relationship
CREATE TABLE ORDERS_ITEMS (
    ONO INT,
    ITEMNO INTEGER,
    ORDERED_QUANTITY INT,
    FOREIGN KEY (ONO) REFERENCES ORDERS(ONO),
    FOREIGN KEY (ITEMNO) REFERENCES ITEMS(ITEMNO)
);

-- STORES_ITEMS junction table for M:M relationship
CREATE TABLE STORES_ITEMS (
    SID INTEGER,
    ITEMNO INTEGER,
    QUANTITY INT,
    FOREIGN KEY (SID) REFERENCES STORES(SID),
    FOREIGN KEY (ITEMNO) REFERENCES ITEMS(ITEMNO)
);
