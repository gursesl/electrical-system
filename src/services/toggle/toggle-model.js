'use strict';

// toggle-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const toggleSchema = new Schema({
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now },
	loadId: Schema.Types.ObjectId,
	text: { type: String, required: true }
});

const toggleModel = mongoose.model('toggle', toggleSchema);

module.exports = toggleModel;
