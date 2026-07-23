CREATE DATABASE SORTEADOR;
GO

USE SORTEADOR;
GO

CREATE TABLE itens (
    id INT IDENTITY(1,1) PRIMARY KEY,
    categoria VARCHAR(50) NOT NULL,
    nome VARCHAR(250) NOT NULL,
    sorteado BIT NOT NULL DEFAULT 0,
    ativo BIT NOT NULL DEFAULT 1,
    data_cadastro DATETIME NOT NULL DEFAULT GETDATE()
);

CREATE TABLE historico (
    id INT IDENTITY(1,1) PRIMARY KEY,
    item_id INT NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    resultado VARCHAR(250) NOT NULL,
    data_sorteio DATETIME NOT NULL DEFAULT GETDATE(),

    CONSTRAINT FK_Historico_Itens
        FOREIGN KEY (item_id)
        REFERENCES itens(id)
);

select * from itens;

select * from historico;