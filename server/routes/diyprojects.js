const express = require('express');
const DIYProject = require('../models/DIYProject');
const auth = require('../middleware/auth');
const multer = require('multer');
const router = express.Router();

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });

// Create project
router.post('/', auth, upload.single('image'), async (req, res) => {
  const { title, materials, steps, category } = req.body;
  const newProject = new DIYProject({
    title,
    materials: JSON.parse(materials),
    steps,
    category,
    imageUrl: req.file.path,
    author: req.user.id
  });
  await newProject.save();
  res.json(newProject);
});

// Get all or filter
router.get('/', async (req, res) => {
  const { category } = req.query;
  const filter = category ? { category } : {};
  const projects = await DIYProject.find(filter).populate('author', 'username');
  res.json(projects);
});

// Comment
router.post('/:id/comments', auth, async (req, res) => {
  const project = await DIYProject.findById(req.params.id);
  project.comments.push({ text: req.body.text, postedBy: req.user.id });
  await project.save();
  res.json(project.comments);
});

module.exports = router;
