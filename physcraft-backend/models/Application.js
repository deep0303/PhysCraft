// models/Application.js
const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  emailAddress: {
    type: String,
    required: true
  },
  parentName: String,
  parentPhone: String,
  parentEmail: String,
  gradeInFall: String,
  classesInterested: String,
  goals: String,
  physicsBackground: {
    mechanics: Boolean,
    waves: Boolean,
    thermodynamics: Boolean,
    electricity: Boolean,
    magnetism: Boolean,
    modern: Boolean
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Application', applicationSchema);