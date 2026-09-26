const mongoose = require('mongoose');

const hobbySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    count: { type: String, default: '10+' },
    image: { type: String, required: true },
    description: {
      type: String,
      default: 'Explore curated products for this hobby.',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Hobby', hobbySchema);
