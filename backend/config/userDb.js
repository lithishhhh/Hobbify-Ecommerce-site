const mongoose = require('mongoose');

module.exports = mongoose.connection.useDb('HobbifyUsers', { useCache: true });
