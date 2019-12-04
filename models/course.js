"use strict";

const mongoose = require('mongoose');

//simple schema
const CourseSchema = new mongoose.Schema({
  // Kurs name
  name: {
    type: String,
    required: true,
  },
  badge: {type: mongoose.Schema.Types.ObjectId, ref: 'Badge'},
  localbadge: [{type: mongoose.Schema.Types.ObjectId, ref: 'Badge'}],
  // Nutzername der den Kurs erstellt
  creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  // Falls der Nutzer es für eine organisation etc anbietet (zb. Kreativwerkstatt Münster)
  courseprovider: {
    type: String
  },
  // PLZ wird benötigt
  postcode: {
    type: String,
    required: true
  },
  // Adresse wird benötigt
  address: {
    type: String,
    required: true
  },
  // wird vom user mitgeliefert --> osm nominatim
  coordinates: {
    type: String,
    coordinates: Array,
    required: true
  },
  // das übergeordnete Thema des Kurses
  topic:{
    type: String,
    required: true
  },
  // Eine Beschreibung des Kurses (z.b. Inhalte)
  description:{
    type: String,
    required: true
  },
  // mögliche Kenntnisse die man bringen sollen
  requirements:{
    type: String,
    required: false
  },
  // zeitraum des Kurses
  startdate: {
    type: Date,
    required: true
  },
  enddate: {
    type: Date,
    required: true
  },
  participants: Array
});


module.exports = mongoose.model('Course', CourseSchema);
