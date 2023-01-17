CREATE DATABASE books_store;
use books_store;

CREATE TABLE `Books` (
  `id_book` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(45) NOT NULL,
  `title` varchar(45) NOT NULL,
  `author` varchar(45) NOT NULL,
  `stock` int(11) NOT NULL,
  PRIMARY KEY (`id_book`)
  );
  
CREATE TABLE `Members` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(45) NOT NULL,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `transactions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45),
  `code` varchar(45),
  `borrow_date` datetime,
  `return_date` datetime,  
  `quantity` int NOT NULL,
  `description` varchar(45),
  PRIMARY KEY (`id`)
## FOREIGN KEY (name) REFERENCES members (name),
##  FOREIGN KEY (code2) REFERENCES books (`code`)
);

update books set stock = 0 where id_book = 1;
select * from books;

insert into members (code, name)
values ('M001', 'Angga'),
		('M002', 'Feri'),
		('M003', 'Putri');
		
insert into books (code, title, author, stock)
values ('JK-45', 'Harry Potter', 'J.K Rowling', 1),
	   ('SHR-1', 'A Study in Scarlet', 'Arthur Conan Doyle', 1),
	   ('TW-11', 'Twilight', 'Stephenie Meyer', 1),
	   ('HOB-83', 'The Hobbit, or There and Back Again', 'J.R.R. Tolkien', 1),
	   ('NRN-7', 'The Lion, the Witch and the Wardrobe', 'C.S. Lewis', 1);

select * from transactions;