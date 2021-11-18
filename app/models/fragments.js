const mongoose = require('mongoose');

const fragmentsSchema = mongoose.Schema({
  fragments: { type: Object, required: true },
});

module.exports = mongoose.model('Fragments', fragmentsSchema);