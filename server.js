const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// // Define a default route so that the user doesn't get "Wrong Route! if they enter just localhost:3001 as their endpoint in the browser"
// app.get('/', (req, res) => {
//   res.send('Welcome to the root of the application!');
// });

// sync sequelize models to the database, then turn on the server. 
sequelize.sync({ force: false }).then(() => {
  console.log('Sequelize models synced with the database');
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
