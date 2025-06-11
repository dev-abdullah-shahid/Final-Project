const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  username: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, default: 'user' },
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'DIYProject' }]
});
module.exports = mongoose.model('User', userSchema);
