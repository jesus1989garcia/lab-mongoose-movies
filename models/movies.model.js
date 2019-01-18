const mongoose = require('mongoose');

const schema = new mongoose.Schema({ 
  title: {
    type: 'string',
    required: true,
  },
  genre: {
    type: 'string',
    required: true,
  },
  plot: {
    type: 'string',
    required: true
  }
})

module.exports = mongoose.model('Movies', schema);