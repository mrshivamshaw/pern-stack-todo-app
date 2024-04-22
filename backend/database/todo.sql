CREATE DATABASE todo;

CREATE TABLE todo(
    id SERIAL PRIMARY KEY,
    description VARCHAR(255),
    status VARCHAR(255),
    title VARCHAR(255)
);