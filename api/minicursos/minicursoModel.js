'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var minicursoSchema = new Schema({
  name: String,
  description: String,
  created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Minicurso', minicursoSchema);