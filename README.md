# simpleOrderSystem


Start MySQL Container
> docker run -d --name some-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root mysql:latest

Log in MySQL CLI
> docker exec -it some-mysql bash
> mysql -u root -p

Run script to create DataBase (migration/dbCreation.sql)

Run script to create entities (migration/createEntities.sql)

Run script to insert initials objects in DB (migration/insertEntities.sql)

Running the application
> npm start

List All Products
> GET http://localhost:3000/products/?orderBy=name&orderDirection=asc
Where orderDirection could be asc or desc and where orderBy could be id. name or product_status

Create a Product
> POST http://localhost:3000/products
> {
>     "productName": "D Product C",
>     "merchantId": 2,
>     "price": 2345,
>     "productStatus": "ON_STOCK"
> }
Where productStatus could be ON_STOCK or OUT_OF_STOCK

Create an Order
> POST http://localhost:3000/order
> {
> 	"userId": 1,
> 	"products": [{
> 		"productId": 1,
> 		"quantity": 4
> 	}, {
> 		"productId": 2,
> 		"quantity": 2
> 	}]
> }

Add a Product to an Order
> PUT http://localhost:3000/order
> {
> 	"userId": 1,
> 	"productId": 1,
> 	"quantity": 1,
> 	"orderStatus": "OPEN" 
> }

Get Report Data
> GET localhost:3000/report
