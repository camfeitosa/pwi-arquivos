if not exists CREATE DATABASE etec;

USE etec; 

CREATE TABLE usuario(

	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
	nome VARCHAR (30),
	senha VARCHAR (20), 
	telefone VARCHAR (20),
	imagem VARCHAR (50)	
);

INSERT INTO usuario (id, nome, senha, telefone) VALUES (NULL, 'Rachel', '1234', '1234-1234');  
INSERT INTO usuario (id, nome, senha, telefone) VALUES (NULL, 'Monica', '4321', '1598-1587');
INSERT INTO usuario (id, nome, senha, telefone) VALUES (NULL, 'Chandler', '5214', '1234-1565');
INSERT INTO usuario (id, nome, senha, telefone) VALUES (NULL, 'Joey', '9632', '8523-8523');
INSERT INTO usuario (id, nome, senha, telefone) VALUES (NULL, 'Ross', '9654', '1234-9874');
INSERT INTO usuario (id, nome, senha, telefone) VALUES (NULL, 'Phoebe', '9634', '2365-8547');  
INSERT INTO usuario (id, nome, senha, telefone) VALUES (NULL, 'Murilo', '6325', '9875-9875');
INSERT INTO usuario (id, nome, senha, telefone) VALUES (NULL, 'Camila', '3254', '7452-7452');   