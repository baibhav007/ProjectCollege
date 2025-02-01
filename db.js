const mongoose = require('mongoose');

let cachedDb = null;

async function connectDB() {
  if (cachedDb) {
    return cachedDb; // Reuse existing connection
  }

  try {
    const db = await mongoose.connect('mongodb+srv://baibhavrishu97:esvugto1QitxBn5w@cluster0.2u7yh.mongodb.net/test?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Reduce timeout
      socketTimeoutMS: 10000,
    });
    console.log('✅ MongoDB connected successfully.');
    cachedDb = db; // Cache connection
    return db;
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error);
    throw error;
  }
}

module.exports = connectDB;
