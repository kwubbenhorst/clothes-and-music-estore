// This file is an aggregator for the three api-routes files, category-routes.js, product-routes.js and tag-routes.js.  It passes all the api routes out as a bundle to the main index.js file and from there server.js uses them when it calls app.use(routes);
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;
