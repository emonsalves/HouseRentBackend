CREATE DATABASE houserents;

\ c houserents;

CREATE TABLE users (
    id SERIAL,
    name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    address VARCHAR(50) NOT NULL,
    phone INTEGER NOT NULL,
    password VARCHAR(50) NOT NULL,
    id_role INTEGER,
    id_type INTEGER,
    active BOOLEAN NOT NULL
);

INSERT INTO
    users(
        rut,
        name,
        last_name,
        email,
        address,
        phone,
        password,
        id_role,
        id_type,
        active
    )
VALUES
    (
        '16609755-k',
        'enzo',
        'monsalves',
        'enzo@gmail.com',
        'chaullin 290',
        966454756,
        1,
        1,
        true
    );