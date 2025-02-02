// api/admin.mjs

import express from 'express';
import mongoose from 'mongoose';
import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import * as AdminJSMongoose from '@adminjs/mongoose';
import assert from 'assert'

// Import models
import Student from '../models/student.js';
import Hostel from '../models/hostel.js';

// Create Express app
const app = express();

// CORS setup
// const cors = require('cors');
// app.use(cors({ origin: '*' }));

app.use(express.static('public'));  // Serve static files from 'public' folder

// MongoDB connection
mongoose.connect('mongodb+srv://baibhavrishu97:esvugto1QitxBn5w@cluster0.2u7yh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Register AdminJS with Mongoose
AdminJS.registerAdapter(AdminJSMongoose);

// Configure AdminJS
const adminJs = new AdminJS({
  resources: [
    { resource: Student, options: { parent: { name: 'Database' } } },
    { resource: Hostel, options: { parent: { name: 'Database' } } }
  ],
  rootPath: '/admin',  // Admin panel accessible at '/admin'
});

// Build AdminJS router with authentication
const adminRouter = AdminJSExpress.buildAuthenticatedRouter(adminJs, {
  authenticate: async (email, password) => {
    if (email === 'admin@example.com' && password === 'password123') {
      return { email };  // Valid admin login
    }
    return null;  // Invalid login
  },
  cookiePassword: 'session-secret',  // For session management
});

// Vercel serverless function handler
export default function handler(req, res) {
  app.use(adminJs.options.rootPath, (req, res, next) => {
    console.log(`Admin route hit: ${req.url}`);
    next(); // Proceed with the request
  }, adminRouter);

  app(req, res);  // Execute the Express app
}
