create database saep;
use saep;

create table usuario(
id int primary key auto_increment,
nome varchar(30) not null,
email varchar(20) not null,
);

create table tarefas(
id int primary key auto_increment,
nomeTarefa varchar(90) not null,
descricao varchar(255) not null,
status varchar(60) not null default "a fazer",
setor varchar(50) not null,
prioridade varchar(70) not null,
CONSTRAINT fk_usuario FOREIGN KEY (id)
REFERENCES usuario(id)
);

 drop table tarefas;
