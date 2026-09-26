const Hobby = require('../models/Hobby');

const getHobbies = async (req, res) => {
  try {
    const { search } = req.query;
    const filter = search
      ? { name: { $regex: search, $options: 'i' } }
      : {};

    const hobbies = await Hobby.find(filter).sort({ name: 1 });
    res.json(hobbies);
  } catch (error) {
    res.status(500).json({ message: error.message || 'Failed to fetch hobbies' });
  }
};

const getHobbyById = async (req, res) => {
  try {
    const hobby = await Hobby.findById(req.params.id);
    if (!hobby) {
      return res.status(404).json({ message: 'Hobby not found' });
    }
    res.json(hobby);
  } catch (error) {
    res.status(500).json({ message: error.message || 'Failed to fetch hobby' });
  }
};

const createHobby = async (req, res) => {
  try {
    const hobby = await Hobby.create(req.body);
    res.status(201).json(hobby);
  } catch (error) {
    res.status(400).json({ message: error.message || 'Failed to create hobby' });
  }
};

const updateHobby = async (req, res) => {
  try {
    const hobby = await Hobby.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: 'after',
      runValidators: true,
    });

    if (!hobby) {
      return res.status(404).json({ message: 'Hobby not found' });
    }

    res.json(hobby);
  } catch (error) {
    res.status(400).json({ message: error.message || 'Failed to update hobby' });
  }
};

const deleteHobby = async (req, res) => {
  try {
    const hobby = await Hobby.findByIdAndDelete(req.params.id);
    if (!hobby) {
      return res.status(404).json({ message: 'Hobby not found' });
    }

    res.json({ message: 'Hobby removed' });
  } catch (error) {
    res.status(400).json({ message: error.message || 'Failed to delete hobby' });
  }
};

module.exports = { getHobbies, getHobbyById, createHobby, updateHobby, deleteHobby };
