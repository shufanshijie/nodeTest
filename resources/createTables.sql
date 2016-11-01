create table author (
	id INT not null PRIMARY KEY auto_increment,
	nick_name VARCHAR(50),
	real_name VARCHAR(50),
	picture VARCHAR(200),
	discription text
);
create table book (
	id INT not null PRIMARY KEY auto_increment,
	book_name VARCHAR(50),
	author_id int,
	book_feature VARCHAR(1000),
	book_info text
);
alter table book add COLUMN book_type VARCHAR(50);
alter table book add COLUMN  book_tags VARCHAR(50);
alter table book add COLUMN create_time datetime;
alter table book add COLUMN update_time datetime;
alter table author add COLUMN create_time datetime;
alter table author add COLUMN update_time datetime;
create table chapter (
	id INT not null PRIMARY KEY auto_increment,
	chapter_index INT,
	chapter_name VARCHAR(50),
	book_id INT,
	book_name VARCHAR(50),
	chapter_url VARCHAR(200),
	create_time datetime
);
create table origin_article (
	id INT not null PRIMARY key auto_increment,
	chapter_index int,
	chapter_name VARCHAR(50),
	book_id int,
	book_name VARCHAR(50),
	create_time datetime,
	content text
);