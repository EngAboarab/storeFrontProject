## storeFrontProject
the second project of the Udacity advanced web development course,



## Usage:
this application used as a node based API for a front end store where the user can explore the porduct and order them as well



## the used stack:
express
postgresql
typescript
jasmine
db-migration
bcrypt and jsonwebtoken



## Ports:
- the server run on post 3000 : ```http://localhost:3000```
 - the database is running on the default port :5432



## Databases and tables:
#### DATABASES:
shoping_dev: as the production database
test:as the testing database
#### TABLES:
users: table contains the users details (id,first_name,last_name,password)
products:table contains the products details (id,product_name,price,category)
orders:table contains the orders details (id,user_id,order_completness)
order-product:table contains the order-products details (order_id,product_id,quantity)

## Environments:
  the application contains 2 different environments:

  #### testing :
   activate by changing the ENV variable in .env to test ENV=test, run the test script ```npm run test```

  #### dev :
   activate by changing the ENV variable in .env to dev ENV=dev run the dev script ```npm run watch```

## Setup:
  - install the modules : ```npm install```
  - setup postgresql :
     1. install postgresql with pgadmin
     2. intiate it terminal: ```psql -U postgres```
     3. create a New User with new testing database: ```CREATE USER <write a user> WITH PASSWORD '<write your Password>' CREATEDB;``` 
     4. create the database :```CREATE DATABASE shoping_dev``` 
     5. create a test database(shoping_dev):  ```CREATE DATABASE shoping_test```
  - create .env file with the following cofiguration:
      ```POSTGRES_HOST=localhost
        POSTGRES_DB_DEV=shoping_dev
        POSTGRES_DB_TEST=shoping_test
        POSTGRES_USER=<write a user>
        POSTGRES_PASSWORD=<write your Password>
        ENV=dev
        TOKEN_SECRET=<write the text the will used for token>```

  - testing :
         activate by changing the ENV variable in .env to test ENV=test, run the test script ```npm run test```
  - run the app :
         - activate by changing the ENV variable in .env to dev ENV=dev run the dev script ```npm run watch```
         - EndPoints :
         use the app with referring to the REQUIREMENTS.md file

  ## Note: I am using Postman for endPoint , so I assign the autherization in the headers

   
      
      
## Scripts:
  ```npm run test```: to run the application in testing environment 
  ```npm run watch```: to run the application in dev. environment

