CREATE DATABASE heros;

\c heros;


CREATE TABLE herois (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    editoras_id INTEGER REFERENCES editoras(id) 
);

CREATE TABLE editoras (
    id SERIAL PRIMARY KEY,
    name_editora VARCHAR(255) NOT NULL
);

INSERT INTO editoras (name_editora) VALUES 
('Marvel'),
('DC');

INSERT INTO herois (name, editoras_id) VALUES 
('Hulk', 1), 
('Superman', 2), 
('Batman', 2),
('Mulher-Maravilha', 2),
('Flash', 2),
('Homem de Ferro', 1), 
('Thor', 1), 
('Capitão América', 1), 
('Homem-Aranha', 1),
('Pantera Negra', 1);
