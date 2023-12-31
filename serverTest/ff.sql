create TABLE user_data(
    id SERIAL PRIMARY KEY,
    nameuser VARCHAR(255),
    passworduser VARCHAR(255),
    idcart INTEGER,
    idhistory INTEGER,
    FOREIGN KEY (idcart) REFERENCES cart (id),
    FOREIGN KEY (idhistory) REFERENCES history (id)
);

create table cart(
    id SERIAL PRIMARY KEY
);

create table history(
    id SERIAL PRIMARY KEY
);

create table cartproduct(
    id SERIAL PRIMARY KEY,
    idcart INTEGER,
    idproduct INTEGER,
    FOREIGN KEY (idcart) REFERENCES cart (id),
    FOREIGN KEY (idproduct) REFERENCES product (id)
);

create table historyproduct(
    id SERIAL PRIMARY KEY,
    idhistory INTEGER,
    idproduct INTEGER,
    FOREIGN KEY (idhistory) REFERENCES history (id),
    FOREIGN KEY (idproduct) REFERENCES product (id)
);

create table product(
    id SERIAL PRIMARY KEY,
    nameproduct VARCHAR(255),
    descriptionproduct VARCHAR(255),
    imgPath VARCHAR(255),
    price INTEGER
);