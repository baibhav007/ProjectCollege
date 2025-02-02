const express = require('express');
const mongoose = require('mongoose');
const AdminJS = require('adminjs');
const AdminJSExpress = require('@adminjs/express');
const AdminJSMongoose = require('@adminjs/mongoose');

// Import your models
const Student = require('./models/student');
const Hostel = require('./models/hostel');

// Connect AdminJS with Mongoose
AdminJS.registerAdapter(AdminJSMongoose);

// Initialize Express app
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://baibhavrishu97:esvugto1QitxBn5w@cluster0.2u7yh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// Configure AdminJS
const adminJs = new AdminJS({
  resources: [
    { resource: Student, options: { parent: { name: 'Database' } } },
    { resource: Hostel, options: { parent: { name: 'Database' } } }
  ],
  rootPath: '/admin',
});

// Build and use the authenticated router
const adminRouter = AdminJSExpress.buildAuthenticatedRouter(adminJs, {
  authenticate: async (email, password) => {
    if (email === 'admin@example.com' && password === 'password123') {
      return { email };
    }
    return null;
  },
  cookiePassword: 'session-secret',
});

app.use(adminJs.options.rootPath, adminRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Admin panel is running at http://localhost:${PORT}/admin`);
});
