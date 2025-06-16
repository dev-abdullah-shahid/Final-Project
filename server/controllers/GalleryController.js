const express = require('express');
const router = express.Router();
const GalleryItem = require('../models/GalleryItem');

// Get all gallery items
router.get('/', async (req, res) => {
    try {
        const items = await GalleryItem.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new gallery item
router.post('/', async (req, res) => {
    const item = new GalleryItem(req.body);
    try {
        const savedItem = await item.save();
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Export the router
module.exports = router;