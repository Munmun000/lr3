create Table cart(
    id SERIAL PRIMARY KEY
);

create Table item(
    id SERIAL PRIMARY KEY,
    nameItem VARCHAR(255),
    descriptionItem VARCHAR(255),
    imgPath VARCHAR(255),
    price INTEGER,
    idCart INTEGER,
    FOREIGN KEY (idCart) REFERENCES cart (id),
    idIventory INTEGER,
    FOREIGN KEY (idIventory) REFERENCES iventory (id)
);

create Table iventory(
    id SERIAL PRIMARY KEY
);

-- create Table user(
--     id SERIAL PRIMARY KEY,
--     nameUser VARCHAR(255),
--     passwordUser VARCHAR(255),
--     cartUser INTEGER,
--     UNIQUE FOREIGN KEY (idCart) REFERENCES cart (id),
--     idIventory INTEGER,
--     FOREIGN KEY (idIventory) REFERENCES iventory (id)
-- );

CREATE TABLE "user" (
    id SERIAL PRIMARY KEY, 
    nameUser VARCHAR(255),
    passwordUser VARCHAR(255),
    cart_id INTEGER,
    FOREIGN KEY (cart_id) REFERENCES cart (id),
    inventory_id INTEGER,
    FOREIGN KEY (inventory_id) REFERENCES iventory (id)
);
