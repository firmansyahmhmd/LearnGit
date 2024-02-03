
CREATE TABLE users (
	user_id INT PRIMARY KEY,
	name VARCHAR(255),
	email VARCHAR(255),
	phone INT,
	gender CHAR(6),
	address VARCHAR(255)
	);

SELECT *
FROM users;

INSERT INTO users (user_id, name, email, phone, gender, address)
VALUES 
	(01012024, 'Ary Hariadi', 'ahartono@gmail.com', 08960101, 'Male', 'Jl. Sembilan Enam Utara'),
	(02012024, 'Bella Rahmatian', 'brahmatian@gmail.com', 08130201, 'Female', 'Jl. Satu Tiga Timur'),
	(03012024, 'Dewangga Putra Aji', 'dputraaji@yahoo.com', 08380301, 'Male', 'Jl. Tiga Delapan Selatan'),
	(04012024, 'Edwin Hutama', 'ehutama@yahoo.com', 08120401, 'Male', 'Jl. Satu Dua Barat'),
	(05012024, 'Fauzan Pramadi', 'fpramadi@gmail.com', 08220501, 'Male', 'JL. Dua Dua Utara');
	
SELECT *
FROM users;

ALTER TABLE users
MODIFY user_id VARCHAR(255), MODIFY phone VARCHAR(255);

SELECT *
FROM users;

UPDATE users
SET phone = 089601012024
WHERE user_id = 01012024;

SELECT *
FROM users;

UPDATE users
SET phone = 081302012024
WHERE user_id = 02012024;

SELECT *
FROM users;

UPDATE users
SET phone = 083803012024
WHERE user_id = 03012024;

SELECT *
FROM users;

UPDATE users
SET phone = 081204012024
WHERE user_id = 04012024;

SELECT *
FROM users;

UPDATE users
SET phone = 082205012024
WHERE user_id = 05012024;

SELECT *
FROM users;

SELECT name, phone, address
FROM users AS user_members;