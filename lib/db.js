import mongoose from 'mongoose';

const MONGO_URI = 'mongodb+srv://baibhavrishu97:esvugto1QitxBn5w@cluster0.2u7yh.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0';

if (!MONGO_URI) {
  throw new Error('❌ Missing MONGO_URI environment variable');
}

let cached = global.mongoose || { conn: null, promise: null };

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 60000,
      socketTimeoutMS: 90000,
      keepAlive: true,
      maxPoolSize: 10,
    }).then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

global.mongoose = cached;

export default connectDB;
