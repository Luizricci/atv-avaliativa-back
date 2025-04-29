CREATE DATABASE heros

\C heros


CREATE TABLE herois (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,

);

CREATE TABLE editoras (
    id SERIAL PRIMARY KEY,
    name_editora VARCHAR(255) NOT NULL,
    herois_id INTEGER REFERENCES herois(id) ON DELETE CASCADE,
);