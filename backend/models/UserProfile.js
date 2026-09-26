const mongoose = require('mongoose');
const userConnection = require('../config/userDb');

const userProfileSchema = new mongoose.Schema(
  {
    firebaseUid: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

module.exports = userConnection.model('UserProfile', userProfileSchema);
