DROP DATABASE IF EXISTS hogwarts;
CREATE DATABASE hogwarts;

\c hogwarts;

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
  ('Hermione Granger', 1),
  ('Ron Weasley', 1),
  ('Neville Longbottom', 1),
  ('Percy Weasley', 1),
  ('Ginevra Weasley', 1),
  ('George Weasley', 1),
  ('Fred Weasley', 1),
  ('Tom Riddle', 2),
  ('Draco Malfoy', 2),
  ('Bellatrix Lestrange', 2),
  ('Ella Wilkins', 2),
  ('Tom Riddle', 2),
  ('Spencer Whiddon', 2),
  ('Cho Chang', 3),
  ('Myrtle Warren', 3),
  ('Cordelia Gifford', 3),
  ('Sue Li', 3),
  ('Nigel Wroxton', 3),
  ('Cedric Diggory', 4),
  ('Hannah Abbott', 4),
  ('Susan Bones', 4),
  ('Satinder Singh', 4);

INSERT INTO classes
  (class_name, teacher)
VALUES
  ('Astronomy', 'Sinistra'),
  ('Charms', 'Flitwick'),
  ('Dark Arts', 'Karkaroff'),
  ('Defence Against the Dark Arts', 'Umbridge'),
  ('Flying', 'Hooch'),
  ('Herbology', 'Sprout'),
  ('History of Magic', 'Binns'),
  ('Muggle Studies', 'Quirrell'),
  ('Potions', 'Snape'),
  ('Transfiguration', 'McGonagall');

INSERT INTO spells
  (spell_name)
VALUES
  ('Wingardium Leviosa'),
  ('Ventus'),
  ('Tergeo'),
  ('Stupefy'),
  ('Serpensortia'),
  ('Repello Muggletum'),
  ('Reducio'),
  ('Reducto'),
  ('Expecto Patronum'),
  ('Expelliarmus'),
  ('Engorgio'),
  ('Duro'),
  ('Deprimo'),
  ('Confundus'),
  ('Crucio'),
  ('Ascendio'),
  ('Avada Kedavra'),
  ('Accio');