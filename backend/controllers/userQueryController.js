const UserQuery = require('../models/UserQuery');

const createUserQuery = async (req, res) => {
  const fields = ['name', 'email', 'subject', 'message'];
  const values = {};
  const body = req.body || {};

  for (const field of fields) {
    if (typeof body[field] !== 'string' || !body[field].trim()) {
      return res.status(400).json({ message: `${field} is required` });
    }
    values[field] = body[field].trim();
  }

  try {
    const userQuery = await UserQuery.create(values);
    res.status(201).json({
      message: 'Your message has been received.',
      id: userQuery._id,
    });
  } catch (error) {
    console.error('Failed to save user query:', error.message);
    res.status(500).json({ message: 'Could not save your message. Please try again.' });
  }
};

module.exports = { createUserQuery };
