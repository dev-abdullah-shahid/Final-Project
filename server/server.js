const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const authRoutes = require('./controllers/AuthController');
const communityRoutes = require('./controllers/CommunityController');
const galleryRoutes = require('./controllers/GalleryController');
const resourceRoutes = require('./controllers/ResourceController');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('your_mongodb_connection_string', { useNewUrlParser: true, useUnifiedTopology: true });

// Authentication routes
app.post('/api/signup', authRoutes.signup);
app.post('/api/login', authRoutes.login);

// Other routes
app.use('/api/communities', communityRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/resources', resourceRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});