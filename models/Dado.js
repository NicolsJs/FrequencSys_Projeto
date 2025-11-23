const mongoose = require("mongoose");

const dadoSchema = new mongoose.Schema({
  ax: Number,
  ay: Number,
  az: Number,
  gx: Number,
  gy: Number,
  gz: Number,
  data: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Dado", dadoSchema);
