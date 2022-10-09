const { Pool } = require('pg');

const DB_URI = process.env.DB_URI;


/*
CREATE TABLE users (
    username varchar(15) PRIMARY KEY,
    password varchar
);

CREATE TABLE accounts (
    account_id SERIAL PRIMARY KEY,
    signup_date date,
    street_address varchar,
    city varchar,
    state varchar(2),
    zip_code integer CHECK (zip_code BETWEEN 0 AND 99999)
);

CREATE TYPE y_or_n AS ENUM ('Y', 'N');

CREATE TABLE clients (
    account_id integer REFERENCES accounts(account_id),
    first_name varchar,
    last_name varchar,
    primary_ind y_or_n,
    birth_dt date,
    effective_dt date,
    expiration_dt date,
    PRIMARY KEY(account_id, first_name, birth_dt, primary_ind)
);

CREATE TABLE visits (
    account_id integer REFERENCES accounts(account_id),
    visit_dt date,
    PRIMARY KEY(account_id, visit_dt)
);
*/