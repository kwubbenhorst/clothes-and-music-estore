// The three api-route files are already aggregated by index.js within the api folder. Now they are passed out from there to be transferred through here to the server.js file which calls on them in app.use(routes);
const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;