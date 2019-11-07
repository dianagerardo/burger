-- Write SQL queries this file that do the following:

-- Create the `burgers_db`.
-- Switch to or use the `burgers_db`.
-- Create a `burgers` table with these fields:
-- **id**: an auto incrementing int that serves as the primary key.
--  **burger_name**: a string.
-- **devoured**: a boolean.

DROP DATABASE IF EXISTS burgers_db;

-- Create the database burgers_db and specified it for use.
CREATE DATABASE burgers_db;

USE burgers_db;

-- Create the table burgers.
CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  devoured boolean NOT NULL,
  PRIMARY KEY (id)
);

