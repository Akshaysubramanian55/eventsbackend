const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  date: {
    type: Date,
    required: true,
    validate: {
      validator: (value) => value > new Date(),
      message: 'Date must be in the future.',
    },
  },
});

module.exports = mongoose.model('Event', eventSchema);
