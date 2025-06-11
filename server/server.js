// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
dotenv.config();

// Middleware
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads')); // serve image files

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/projects', require('./routes/diyProjects'));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT || 5000, () =>
      console.log(`Server running on port ${process.env.PORT}`)
    );
  })
  .catch(err => console.error(err));
