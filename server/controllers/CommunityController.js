const Community = require('../models/Community');

// Get all communities
exports.getAllCommunities = async (req, res) => {
    try {
        const communities = await Community.find();
        res.status(200).json(communities);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new community
exports.createCommunity = async (req, res) => {
    const community = new Community(req.body);
    try {
        const savedCommunity = await community.save();
        res.status(201).json(savedCommunity);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};