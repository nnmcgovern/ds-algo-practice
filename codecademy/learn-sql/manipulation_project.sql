CREATE TABLE friends (
  id INTEGER PRIMARY KEY,
  name TEXT,
  birthday DATE
);

INSERT INTO friends (id, name, birthday) VALUES 
(1, "Ororo Munroe", "1940-05-30"),
(2, "Other Friend", "2000-01-01"),
(3, "Me", "1999-07-06");

UPDATE friends SET name = "Storm" WHERE name = "Ororo Munroe";

ALTER TABLE friends ADD COLUMN email;

UPDATE friends SET email = "storm@codecaemy.org" WHERE email IS NULL;

DELETE FROM friends WHERE name = "Storm";

SELECT * FROM friends;