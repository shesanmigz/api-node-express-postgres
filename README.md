# api-node-express-postgres

## A simple project using NodeJS, Express, PostgreSQL, and Sequelize

#### Required installations:
1) **Express**
- `$ npm install --save express body-parser morgan`

2) **Nodemon** - to automatically restart server when codes are changed
- `$ npm i -D nodemon`

3) **PostgreSQL**(v10.3) - database
- https://www.postgresql.org/download/

4) **Sequelize CLI** - to generate database migrations
- `$ npm install -g sequelize-cli`

5) **Sequelize** - an Object-relational mapping (ORM) that will interface with the Postgres database
- `$ npm install --save sequelize pg pg-hstore`

#### Setup:
1) Create a database named `sample-dev`.

2) Customize the database configuration file as needed:
 - `server/config/config.json`

3) Run your database server.

4) Persist models to the database:
 - `$ sequelize db:migrate`

5) Run the application:
 - `$ npm run start:dev`

6) Test the application:
 - Available API endpoints:
   - `http://localhost:9000/api/languages` - GET, POST
     - required fields: language_name `VARCHAR(20)` and iso_6391 `VARCHAR(2)`
     
   - `http://localhost:9000/api/:language_id/subCategoryLanguages` - POST
     - fields: sub_category_text(50) and sub_category_description VARCHAR(500)
     
   - `http://localhost:9000/api/subCategoryLanguages` - GET


*Notes:*

1) Port number can be changed in file `bin/www`
2) Content-Type header for POST operations is `application/json`
3) Input body in raw JSON format.
