const { Binary } = require('bson');
const mongoose = require('mongoose');

const timelineSchema = mongoose.Schema({
  timeline: { type: Array, required: true },
});

module.exports = mongoose.model('Timelines', timelineSchema);