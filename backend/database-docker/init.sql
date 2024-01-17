CREATE DATABASE condominio;
SELECT USE condominio;
    create table condominiollz(
                              cnpj VARCHAR(14) NOT NULL PRIMARY KEY,
                              razaosocial VARCHAR(150) NOT NULL,
                              email VARCHAR(150) NOT null,
                              data_Cadastro DATE not nULL
    );