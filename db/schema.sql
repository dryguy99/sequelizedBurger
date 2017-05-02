
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
	`id` INTEGER(11) auto_increment NOT NULL,
	`burger_name` VARCHAR(100) Not Null,
	`devoured` BIT(1) NOT NULL,
	`date` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL,
	PRIMARY KEY (`id`)
	);
