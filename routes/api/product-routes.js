const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// GET all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [{ model: Category }, { model: Tag, through: ProductTag }],
    });
    res.status(200).json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// GET one product
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findByPk(req.params.id, {
      include: [{ model: Category }, { model: Tag, through: ProductTag }],
    });
      if (!product) {
        res.status(404).json({ message: 'No product found with this id!' });
        return;
      }
  
      res.status(200).json(product);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
});

// CREATE new product
router.post('/', async (req, res) => {
  try {
    const { product_name, price, stock, tagIds } = req.body; //There was a comment in the sourcecode specifying what the req.body should look like. Here product_name, price, stock and tagIds have extracted explicitly from 'req.body'to ensure correct fields are included in product creation. 

    // Create the product
    const product = await Product.create({ product_name, price, stock });

    // If there are tagIds, create pairings in the ProductTag model
    if (tagIds && tagIds.length) {
      const productTagIdArr = tagIds.map((tag_id) => ({
        product_id: product.id,
        tag_id,
      }));

      // Bulk create in the ProductTag model
      await ProductTag.bulkCreate(productTagIdArr);
    }

    res.status(200).json(product);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});


// UPDATE product
router.put('/:id', async (req, res) => {
  try {
    const [affectedRows] = await Product.update(req.body, {
      where: { id: req.params.id },
    });

    if (affectedRows > 0) {
      if (req.body.tagIds && req.body.tagIds.length) {
        const productTags = await ProductTag.findAll({
          where: { product_id: req.params.id },
        });

        const productTagIds = productTags.map(({ tag_id }) => tag_id);
        const newProductTags = req.body.tagIds
          .filter((tag_id) => !productTagIds.includes(tag_id))
          .map((tag_id) => ({ product_id: req.params.id, tag_id }));

        await ProductTag.bulkCreate(newProductTags);

        const tagsToRemove = productTags
          .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
          .map(({ id }) => id);

        await ProductTag.destroy({ where: { id: tagsToRemove } });
      }

      const updatedProduct = await Product.findByPk(req.params.id, {
        include: [{ model: Category }, { model: Tag, through: ProductTag }],
      });

      res.status(200).json(updatedProduct);
    } else {
      res.status(404).json({ message: 'No product found with this id!' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

//DELETE one product by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const deletedProduct = await Product.destroy({
      where: { id: req.params.id },
    });

    if (deletedProduct > 0) {
      res.status(200).json({ message: 'Product deleted successfully' });
    } else {
      res.status(404).json({ message: 'No product found with this id!' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;

//NOTE: this file now represents an update to some pre-existing code.  The pre-existing code was promise based, but the specs for this project requested that a model (mini-proj module 13) be followed for syntax.  There the syntax used async/await, so I have converted all the code blocks accordingly
