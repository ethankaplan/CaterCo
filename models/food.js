const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
  name:String,
  quantity:Number,
  description:String,
  vegitarian:Boolean,
  category:String
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;
