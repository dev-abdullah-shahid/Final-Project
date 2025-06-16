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


require('dotenv').config();

mongoose.connect('mongodb+srv://urfvabdullah:CXRHRf3l5R4Zy6Gv@cluster0.0ugotfq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true });
// Use the routes
app.use('/api/auth', authRoutes); // Auth routes
app.use('/api/communities', communityRoutes); // Community routes
app.use('/api/gallery', galleryRoutes); // Gallery routes
app.use('/api/resources', resourceRoutes); // Resource routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});