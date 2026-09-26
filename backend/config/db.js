const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const dns = require('node:dns');

dns.setServers(['8.8.8.8', '8.8.4.4']);
dns.setDefaultResultOrder('ipv4first');

let mongoServer;

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;

    if (mongoURI) {
      try {
        await mongoose.connect(mongoURI, { serverSelectionTimeoutMS: 10000 });
        console.log('MongoDB connected');
        return;
      } catch (error) {
        console.error('Atlas unavailable, using in-memory database:', error.message);
      }
    }

    mongoServer = await MongoMemoryServer.create();
    await mongoose.connect(mongoServer.getUri());
    console.log('MongoDB connected to in-memory server');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = { connectDB, mongoServer };
