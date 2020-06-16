const express = require('express');
const router = express.Router();
const Item = require('./ShoppingList');

// @route    GET api/v1/shoppinglist
// @desc     Get the shopping list
// @access   Private
router.get('/', async (req, res) => {
  try {
    const items = await Item.find().sort({
      name: -1,
    });
    res.json(items);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    POST api/shoppinglist
// @desc     Add to the shopping list
// @access   Private
router.post('/', async (req, res) => {
  const { name, description, quantity } = req.body;
  try {
    const newItem = new Item({
      name,
      description,
      quantity,
    });

    const item = await newItem.save();

    res.json(item);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    DELETE api/shoppinglist/:id
// @desc     Delete item
// @access   Private
router.delete('/:id', async (req, res) => {
  try {
    let item = await Item.findById(req.params.id);

    if (!item)
      return res
        .status(404)
        .json({ msg: 'item not found in the shopping list' });

    await Item.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Item Removed from the shopping list' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
module.exports = router;
