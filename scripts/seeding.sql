CREATE DATABASE progettopa;
\c progettopa
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
    SN VARCHAR(50) NOT NULL,
    challenging_codes CHAR(32) NOT NULL
);

CREATE TABLE Documenti(
    id SERIAL PRIMARY KEY,
    codice_fiscale_richiedente CHAR(16) NOT NULL,
    uri_firmato VARCHAR(100),
    uri_non_firmato VARCHAR(100) NOT NULL,
    numero_firmatari INT NOT NULL,
    nome_documento VARCHAR(50) NOT NULL, 
    hash_documento VARCHAR(256) UNIQUE NOT NULL,
    createdAt TIMESTAMP NOT NULL,
    stato_firma BOOL NOT NULL,
    FOREIGN KEY (codice_fiscale_richiedente) REFERENCES utenti(codice_fiscale)
);

CREATE TABLE ProcessiFirma(
    codice_fiscale_firmatario CHAR(16),
    id_documento INT,
    stato BOOL NOT NULL,
    PRIMARY KEY (codice_fiscale_firmatario,ID_documento),
    FOREIGN KEY (codice_fiscale_firmatario) REFERENCES utenti(codice_fiscale),
    FOREIGN KEY (ID_documento) REFERENCES Documenti(ID)
);
INSERT INTO utenti (codice_fiscale, email_address, numero_token, common_name, country_name, state_or_province, locality,organization, organizational_unit, SN, challenging_codes) VALUES ('MNCDRN82T30D542U', 'demo@mailinator.com','100','Adriano Mancini','IT','FM','Fermo','ACME','IT','Mancini', 'abcdefghijklmnopqrstuvwxyzABCDEF');
INSERT INTO utenti (codice_fiscale, email_address, numero_token, common_name, country_name, state_or_province, locality,organization, organizational_unit, SN, challenging_codes) VALUES ('LSPDRN94T30D542U', 'demo1@mailinator.com','100','Lorenzo Sopranzetti','IT','AN','Filottrano','ACME','IT','Sopranzetti', 'aZcEeBghijKlmNopQrstuVwAyzabbccd');
INSERT INTO utenti (codice_fiscale, email_address, numero_token, common_name, country_name, state_or_province, locality,organization, organizational_unit, SN, challenging_codes) VALUES ('ETVDGN92T31T542U', 'demo2@mailinator.com','10','Lorenzo Tiseni','IT','MC','Porto Recanati','ACME','IT','Tiseni', 'ZZdEFgHHIjLkOOPqRaSgUVabcZZbcdEF');
INSERT INTO utenti (codice_fiscale, email_address, numero_token, common_name, country_name, state_or_province, locality,organization, organizational_unit, SN, challenging_codes) VALUES ('GHELFN85G56A271E', 'demo3@mailinator.com','1','Bruno Rossi','IT','AN','Ancona','ACME','IT','Rossi', 'UiOsGGhifcKlMnODxxAzeRkvbZssDEVF');
INSERT INTO utenti (codice_fiscale, email_address, numero_token, common_name, country_name, state_or_province, locality,organization, organizational_unit, SN, challenging_codes) VALUES ('EFGLOR66T67A341E', 'demo4@mailinator.com','20','Guido Guidi','IT','FM','Fermo','ACME','IT','Guidi', 'AFcDevvSlKJJznBQwRtGGHzDSQalhfmt');
