// This is the main entry point for the application, responsible for initializing the Express server, defining routes,
// and syncing the Sequelize models with the MySQL database. The application relies on the imported 'routes' module for
// handling HTTP requests and the 'sequelize' connection for database interactions.const express = require('express');

const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server. 
sequelize.sync({ force: false }).then(() => {
  console.log('Sequelize models synced with the database');
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
