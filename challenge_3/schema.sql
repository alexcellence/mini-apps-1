DROP DATABASE IF EXISTS customer_data;
CREATE DATABASE customer_data;
USE customer_data;
CREATE TABLE customer_data (
  name VARCHAR(30),
  email VARCHAR(30),
  password VARCHAR(20),
  address1 VARCHAR(30),
  address2 VARCHAR(30),
  city VARCHAR(20),
  state VARCHAR(3),
  zipCode int,
  phoneNumber int,
  creditCard int,
  expiration int,
  CVV int,
  billingZipCode int
);