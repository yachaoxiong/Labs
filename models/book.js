const mongoose = require( 'mongoose' );

// all model classes will inherit from 
// the mongoose.Schema class


const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: 'Please enter a book title.'
  },
  description: {
    type: String,
    required: 'Please enter a book description.'
  },
  price: {
    type: Number,
    required: 'Please enter an book price.'
  }
  
});

// make this class public
module.exports = mongoose.model( 'Book', BookSchema );