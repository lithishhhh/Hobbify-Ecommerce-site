const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, default: '' },
    price: { type: Number, required: true },
    rating: { type: Number, default: 4.5 },
    reviews: { type: Number, default: 0 },
    tag: { type: String, default: 'Popular' },
    image: { type: String, required: true },
    hobby: { type: mongoose.Schema.Types.ObjectId, ref: 'Hobby', required: true },
    stock: { type: Number, default: 1 },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
