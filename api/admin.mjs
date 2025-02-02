import express from 'express';
import mongoose from 'mongoose';
import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import * as AdminJSMongoose from '@adminjs/mongoose';

// Import models
import Student from '../models/student.js';
import Hostel from '../models/hostel.js';


// Connect AdminJS with Mongoose
AdminJS.registerAdapter(AdminJSMongoose);

const app = express();

const cors = require('cors');
app.use(cors({ origin: '*' })); 

app.use(express.static('public'));  // This will serve files from the 'public' directory


// Connect to MongoDB
mongoose.connect('mongodb+srv://baibhavrishu97:esvugto1QitxBn5w@cluster0.2u7yh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Admin panel is running at http://localhost:${PORT}/admin`);
});
