const express = require('express');
const router = express.Router();
const Resource = require('../models/Resource');

// Get all resources
router.get('/', async (req, res) => {
    try {
        const resources = await Resource.find();
        res.status(200).json(resources);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new resource
router.post('/', async (req, res) => {
    const resource = new Resource(req.body);
    try {
        const savedResource = await resource.save();
        res.status(201).json(savedResource);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Export the router
module.exports = router;