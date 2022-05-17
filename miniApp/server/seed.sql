INSERT INTO advices (weatherStatus, icon, message)
VALUES ("clear sky", 'route', 'good sky!! 맑은하늘'),
  ("rain", 'route', 'rainyday!! 우산챙겨'),
  (
    "overcast clouds",
    'route',
    'overcast??? what is it?? anyway clouds!!'
  )
  /*  Execute this file from the command line by typing:
   *    mysql -u root < server/seed.sql -p -Dcmarket
   *  to create the database and the tables.*/