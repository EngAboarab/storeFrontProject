# API Requirements
<!-- The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application.  -->

## API Endpoints

## Note: I am using Postman for endPoint , so I assign the autherization in the headers

#### Products
- Index [token required]: ```GET /products```
- Show (args: product id):```GET /products/show params(id)```
- Create (args: Product)[token required]:```POST /products/create params(name,price,category)```


#### Users
- Index [token required]:```GET /users``` 
- Show (args: id)[token required]: ```GET /users/show  params(id)```
- Create (args: User)[token required]: ```POST /users/create params(firstName,lastName,password)```
-Update[token required]:```PUT /users/update params(firstName,lastName)```

#### Orders
- Index orders for certain user[token required]:```GET /orders/  params(userId)```
- Show for certain user[token required]:```GET /orders/show  params(userId,orderId)```
-Create order by uder [token required]: ```POST /orders/create params(productId,quantity,orderCompletness)``` note the default value for order completness is false
- Current Order by user (args: user id)[token required]:```GET /Orders/show  params(id)```
- Update Order [token required]:```PATCH /Orders/update params(id,orderCompletness)```


## Data Shapes
#### Product
 column |  type
-------------------------
-  id | INT PRIMARY KEY
- product_name |  VARCHAR(100)
- price | INT
- category  | VARCHAR(128)

#### User
 column |  type
-------------------------
- id    | INT PRIMARY KEY
- firstName | VARCHAR(100)
- lastName  | VARCHAR(100)
- password  | VARCHAR(128)

#### Orders
column |  type
-------------------------
- id    | INT PRIMARY KEY
- user_id   | INT FOREIGN KEY
- order_completeness | Boolean

#### Order_product
column |  type
-------------------------
- order_id  | INT FOREIGN KEY
- product_id    |  INT FOREIGN KEY
- quantity      | INT 





