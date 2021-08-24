# simpleOrderSystem


Start MySQL Container
> docker run -d --name some-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root mysql:latest

Log in MySQL CLI
> docker exec -it some-mysql bash
> mysql -u root -p

Run script to create DataBase (migration/dbCreation.sql)

Run script to create entities (migration/createEntities.sql)

Run script to insert initials objects in DB (migration/insertEntities.sql)
