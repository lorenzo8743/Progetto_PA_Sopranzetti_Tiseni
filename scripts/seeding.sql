CREATE DATABASE ProgettoPA;
\c ProgettoPA
CREATE TABLE utenti(
    codice_fiscale CHAR(16) PRIMARY KEY,
    email_address VARCHAR(50) UNIQUE NOT NULL,
    numero_token INT NOT NULL,
    common_name VARCHAR(50) NOT NULL,
    country_name CHAR(2) NOT NULL,
    state_or_province CHAR(2) NOT NULL,
    locality VARCHAR(50) NOT NULL,
    organization VARCHAR(50) NOT NULL,
    organizational_unit VARCHAR(30) NOT NULL,
    SN VARCHAR(50) NOT NULL
);

CREATE TABLE Documenti(
    ID SERIAL PRIMARY KEY,
    codice_fiscale_richiedente CHAR(16)
    uri_firmato VARCHAR(100),
    uri_non_firmato VARCHAR(100) NOT NULL,
    numero_firmatari INT NOT NULL,
    nome_documento VARCHAR(50) NOT NULL, 
    stato_firma BOOL NOT NULL,
    FOREIGN KEY codice_fiscale_richiedente REFERENCES utenti(codice_fiscale)
);

CREATE TABLE ProcessiFirma(
    codice_fiscale_firmatario CHAR(16),
    ID_documento INT,
    stato BOOL NOT NULL,
    PRIMARY KEY (codice_fiscale_firmatario,ID_documento),
    FOREIGN KEY codice_fiscale_firmatario REFERENCES utenti(codice_fiscale),
    FOREIGN KEY ID_documento REFERENCES Documenti(ID)
)
INSERT INTO users (name, surname) VALUES ('Adriano', 'Mancini'), ('Elisa', 'Rossi');