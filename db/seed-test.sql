DROP DATABASE IF EXISTS hogwarts_test;
CREATE DATABASE hogwarts_test;

\c hogwarts_test;

CREATE TABLE houses
(
  house_id SERIAL PRIMARY KEY,
  house_name VARCHAR(40),
  founder VARCHAR(40),
  animal VARCHAR(40)
);

CREATE TABLE students
(
  student_id SERIAL PRIMARY KEY,
  student_name VARCHAR(40),
  house_id INT,
  FOREIGN KEY (house_id) REFERENCES houses(house_id)
);

CREATE TABLE classes
(
  class_id SERIAL PRIMARY KEY,
  class_name VARCHAR(40),
  teacher VARCHAR(40)
);

CREATE TABLE spells
(
  spell_id SERIAL PRIMARY KEY,
  spell_name VARCHAR(40)
);

INSERT INTO houses
  (house_name, founder, animal)
VALUES
  ('Gryffindor', 'Godric Gryffindor', 'Lion'),
  ('Slytherin', 'Salazar Slytherin', 'Serpent'),
  ('Ravenclaw', 'Rowena Ravenclaw', 'Eagle'),
  ('Hufflepuff', 'Helga Hufflepuff', 'Badger');

INSERT INTO students
  (student_name, house_id)
VALUES
  ('Harry Potter', 1),
  ('Fred Weasley', 1),
  ('Tom Riddle', 2),
  ('Spencer Whiddon', 2),
  ('Cho Chang', 3),
  ('Nigel Wroxton', 3),
  ('Satinder Singh', 4);

INSERT INTO classes
  (class_name, teacher)
VALUES
  ('Astronomy', 'Sinistra'),
  ('Charms', 'Flitwick'),
  ('Dark Arts', 'Karkaroff');

INSERT INTO spells
  (spell_name)
VALUES
  ('Wingardium Leviosa'),
  ('Ventus'),
  ('Tergeo'),
  ('Stupefy');