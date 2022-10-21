const mongoose = require("mongoose");

const articuloSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true

  }
});

module.exports = mongoose.model('articulo', articuloSchema);