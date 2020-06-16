const mongoose = require('mongoose');

const ShoppingListSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
});

module.exports = mongoose.model('ShoppingList', ShoppingListSchema);
