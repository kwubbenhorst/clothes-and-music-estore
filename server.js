const express = require('express');
const routes = require('./routes');
// import sequelize connection
const { sequelize } = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server. This is forcing it for testing, replace later with 
// Sync Sequelize models to the database
// sequelize.sync({ force: false }).then(() => {
//   console.log('Sequelize models synced with the database');
// });
sequelize.sync({ force: true }).then(() => {
  console.log('Sequelize models synced with the database');
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
