var Book = require( '../models/book' );

/* VIEWS */
// Index
exports.index = function( req, res, next ) {
  // create our locals parameter
  let locals = {
    title: 'Books Shop'
  };

  Book.find()
  .then( function ( books ) {
    // add the books to our locals
    locals.books = books;

    // render our view
    res.render( 'books/index', locals )
  })
  .catch( function ( err ) {
    next( err )
  });
};

// Show
exports.show = function ( req, res, next ) {
  // locals
  let locals = {
    title: 'Book'
  };

  Book.findById({
    _id: req.params.id
  })
  .then( function ( book ) {
    // add the books to our locals
    locals.book = book;

    // render our view
    res.render( 'books/show', locals )
  })
  .catch( function ( err ) {
    next( err )
  })
};

// New
exports.new = function ( req, res ) {
  // locals
  let locals = {
    title: 'New Books'
  };

  res.render( 'books/new', locals )
};

// Edit
exports.edit = function ( req, res, next ) {
  // locals
  let locals = {
    title: 'Edit Book'
  };

  Book.findById({
    _id: req.params.id
  })
  .then( function ( book ) {
    // add the books to our locals
    locals.book = book;

    // render our view
    res.render( 'books/edit', locals )
  })
  .catch( function ( err ) {
    next( err )
  })
};

/* ACTIONS */
// Create 
exports.create = function ( req, res, next ) {

  
  Book.create({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
   
  })
  .then( function () {
    res.redirect( '/books' )
  })
  .catch( function ( err ) {
    next( err )
  })
};

// Update
exports.update = function ( req, res, next ) {


  Book.findById( req.params.id )
  .then(function ( book ) {
    book.title  = req.body.title
    book.description = req.body.description
    book.price = req.body.price
    
    book.save()
    .then(  function () {
      res.redirect( '/books' )
    })
    .catch( function ( err ) {
      next( err )
    })
  })
  .catch(function ( err ) {
    next( err )
  })
};

// Delete
exports.delete = function ( req, res ) {
  Book.remove({
    _id: req.body.id
  })
  .then( function () {
    res.redirect( '/books' )
  })
  .catch( function ( err ) {
    next( err )
  })
};