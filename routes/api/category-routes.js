const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// GET all categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// GET one category by its `id` value
router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!category) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }
    res.status(200).json(category);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// CREATE a new category
router.post('/', async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(200).json(category);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

// UPDATE a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const [affectedRows] = await Category.update(req.body, {
      where: { id: req.params.id },
    });
    if (affectedRows > 0) {
      const updatedCategory = await Category.findByPk(req.params.id);
      res.status(200).json(updatedCategory);
    } else {
      res.status(404).json({ message: 'No category found with this id!' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// DELETE a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const deletedCategory = await Category.destroy({
      where: { id: req.params.id },
    });
    if (deletedCategory > 0) {
      res.status(200).json({ message: 'Category deleted successfully' });
    } else {
      res.status(404).json({ message: 'No category found with this id!' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
