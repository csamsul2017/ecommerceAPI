const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    category: {
      type: Array,
    },
    size: {
      type: Number,
    },
    color: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', ProductSchema);
