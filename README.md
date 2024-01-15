# clothes-and-music-estore
An ecommerce application featuring my backend work. An express.js API configured to use Sequelize for interactions with the MySQL database.

![MIT License](https://img.shields.io/badge/MIT-License-blue)


## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)

## Description
This project amplifies sourcecode to provide a fully functional back end for an ecommerce site using express.js for the server and sequelize to interact with the MySQL database. The site sells clothes and music. Its inventory is organized into categories, products, tags, and there is a product-tag table in the database that establishes relationships between products and tags -- something relational databases can do easily by means of a foreign key. Given this backend configuration customers at the front end (not yet created or connected), can browse the store by category, see all products or a specific product and can also search according to tags, which provide different taxonomic options. The store owner can also update his inventory, say a price on a given product, or add a whole new category of product, or a new colour (which would be a tag) in which several of his products are found. Even in the absence of a front end, the Workbench GUI provides a way to visualize the organization of the raw data into tables, and the routes which can be tested using Insomnia provide a way to visualize what information will come back when certain queries are sent and to see how the data in the database itself can be managed in terms of creating, reading, updating or deleting any entry.  Sequelize is the distinctive technology highlighted in this project. MySQL relational databases and Express servers feature in much of my backend work, but this is the first time I have used sequelize.  Learning its syntax and diction is a little different vs. using raw SQL but the simplicity with which the schema, seeding and routing can be established makes it a very appealing technology after the initial learning curve. I am also "sold" on the benefits of modularized programming because of the long-term gains for scalability but the sheer number of different files and the need for middleware such as intervening index.js aggregators whose value doesn't really become apparent until the application grows large, currently number among the challenges and vexations of this build. Clearly this application is still in its demo phase and has been seeded with minimalistic data for demonstration purposes. In the future the "store" would benefit from growing and diversifying its inventory. I am not really sure that there is one thing in this ersatz store I would be tempted to buy!

## Installation
To get this application up and running, you need to have node.js installed on your machine. The dependencies needed such as express, dotenv, mySQL2 and sequelize are all included with the application. You will need to have your own mySQL account and password, so you can customize the .env file with the name of your own store's database and your own password. Once you have made these alterations you will be able to connect to the database using Sequelize. The database will then have to be created manually. The easiest way is with a GUI like MySQL Workbench which allows you simply to execute the code that is in db/schema.sql. This will create your database but will not structure the tables or populate them with data. To do that you need to enter "npm run seed" from the terminal. You will receive an extensive log verifying that each table has been seeded. You can then refresh "schemas" in Workbench and check that tables and data in the tables is present when you select the ecommerce_db schema from the list of databases under the schemas tab (or whatever other name you have given to your own database). The next step is to start the server by running "npm start" in the terminal. Messages should appear that verify the server is listening on port 3001 and that sequelize has synced with the database. Now everything is up and running and you can start testing your endpoints, trying different operations, and making different requests to the API. Tools like Insomnia or Postman can be used for such testing, until you have a front end built to connect to this back end.

## Usage
The functionality of this application -- a working API -- is ultimately to allow you to make requests which retrieve information from the database and that can manage that data. When you open API GET routes in Insomnia for categories, products or tags, you will be able to see the data for each of these routes displayed in formatted JavaScriptObjectNotation (JSON). When you test API POST, PUT and DELETE routes in Insomnia, you will be able successfully to create, update andd delete data in the database. GET requests can fetch all the data from a certain table, or only one entry if the end point specifies the item id. GET requests are for viewing information only. This display functionality is great, once your front-end is hooked up, for rendering searched-for information to the view. But the real value for the business owner as client is in the facility to manage the database, so that the shopper can only search for items that are available. For instance, the store owner can use a POST request to create a new entry (you supply the information for the various columns of the database table in a "body"), a PUT request will update a given entry, retrieved by id (you can update an isolated part of the data-entry for a given item, such as the price of a hoodie), and a DELETE request will remove the entry from the database. This application, since it presently lacks a front end, is not deployed. For a full visual demonstration of the application from how to get it up and running, through to the testing of every end point and type of request in Insomnia, see the walkthrough video at the link below:

https://drive.google.com/file/d/1aumZkV58yrni1EIrGTqx4hHYNj6gBZ03/view?usp=sharing

## Credits
This project uses sourcecode found in the Module 13, Challenge 2 Develop folder of the EdX full stack coding bootcamp curriculum. Most of the original work involved structuring the schema by defining the fields of each model in the models folder, and defining the associations between tables in the index.js file of the models folder. The api-routes in product-routes.js, tag-routes.js and category-routes.js also had to be finished to perform CRUD operations. Finally, sequelize had to be sync'd to the database on server start (modifications to server.js). Original work vs. sourcecode. The use of environment variables and creation of .env file was also something I had to figure out when building this application, although the resultant code is fairly standardized across all applications that employ such a means of security.
Apart from a solitary trawl through npm's documentation, there were just the standard web searches employed by myself as the sole developer of this application.

## License
This project is licensed under the [MIT License](./LICENSE-MIT).

## Contributions
Contributions to the application (especially the building of a complementary front end!) are welcome. If you would like to like to get involved please contact the developer at her email address kwubbenhorst@gmail.com or through her profile on github: github.com/kwubbenhorst

## Tests
N/A

## Questions
If you have questions about this application, please reach out to the developer at the same address: kwubbenhorst@gmail.com
