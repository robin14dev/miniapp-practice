CREATE TABLE users (
  id INT AUTO_INCREMENT,
  infoId VARCHAR(30),
  password varchar(255),
  nickname varchar(255),
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  updated_at datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);
CREATE TABLE logs (
  id INT AUTO_INCREMENT,
  user_id varchar(255),
  weatherStatus varchar(255),
  temperature INT,
  location VARCHAR(20),
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);
CREATE TABLE advices (
  id INT AUTO_INCREMENT,
  logs_weatherStatus varchar(255),
  icon VARCHAR(20),
  message varchar(255),
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);
-- 관계 추후 설정
-- ALTER TABLE orders
-- ADD FOREIGN KEY (user_id) REFERENCES users (id);
-- ALTER TABLE order_items
-- ADD FOREIGN KEY (order_id) REFERENCES orders (id);
-- ALTER TABLE order_items
-- ADD FOREIGN KEY (item_id) REFERENCES items (id);
/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql -p -DminiApp
 *  to create the database and the tables.*/