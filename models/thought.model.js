const mongoose = require('../db');
'use strict';

const thoughtSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Thought', thoughtSchema);