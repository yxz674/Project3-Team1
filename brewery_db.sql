CREATE TABLE brewery_info (
    brewery_id INT UNIQUE PRIMARY KEY,
    name VARCHAR(50),
    street VARCHAR(50),
    brewery_type VARCHAR(15),
    city VARCHAR(50),
    state VARCHAR(50),
    website VARCHAR(100),
    longitude DECIMAL(2,2),
    latitude DECIMAL(2,2)
);

CREATE TABLE beer_brewery_id (
    beer_id INT UNIQUE PRIMARY KEY,
    brewery_id INT
    FOREIGN KEY (brewery_id) REFERENCES brewery_info(id)
);

CREATE TABLE beer_info (
    beer_id INT,
    name VARCHAR(50),
    style VARCHAR(50),
    abv DECIMAL(2,2),
    rating DECIMAL(2,2),
    description VARCHAR(500)
    FOREIGN KEY (beer_id) REFERENCES beer_brewery_id(beer_id)
);

CREATE TABLE flavor_info (
    beer_id INT,
    astringency INT,
    body INT,
    alcohol INT,
    bitter INT,
    sweet INT,
    sour INT,
    salty INT,
    fruits INT,
    hoppy INT,
    spices INT,
    malty INT
    FOREIGN KEY (beer_id) REFERENCES beer_brewery_id(beer_id)
);