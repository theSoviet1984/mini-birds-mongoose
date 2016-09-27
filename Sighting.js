var mongoose = require('mongoose')

var sightingSchema = new mongoose.Schema({
  name:{type: String, lowercase: true, required: true},
  order: {type: String, lowercase: true, maxLength: 20},
  status: {
  type: String, lowercase: true,
    enum:
    [
      'extinct',
      'extinct in the wild',
      'critically endangered',
      'endangered',
      'vulnerable',
      'least threatened',
      'conservation dependent',
      'least concern'
    ]
  },
  confirmed: {type: Boolean, defalut: false},
  numberSeen: {type: Number, min: 1}

})

module.exports = mongoose.model('Sighting', sightingSchema)
