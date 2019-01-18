const Movies = require('../models/movies.model');

module.exports.list = (req, res, next) => {
  Movies.find()
  .then((movies) => res.render('movies/index', {movies}));
  
}
module.exports.create = (req, res, next) => {
  res.render('movies/form');
}

module.exports.doCreate = (req, res, next) => {
  const movies = new Movies(req.body);
  movies.save()
  .then((movies) => res.render('movies/index', {movies}))
}

module.exports.get = (req, res, next) => {
  Movies.findById(req.params.id)
  .then((movie) => res.render('movies/show', {movie}))
}

module.exports.delete = (req, res, next) => {
  Movies.findByIdAndDelete(req.params.id)
  .then(() => res.redirect('/movies'))
}

module.exports.edit = (req, res, next) => {
  Movies.findById(req.params.id)
  .then((movie) => res.render('movies/edit', {movie}))
  
}

module.exports.doEdit = (req, res, next) => {
  console.log("doEdited works")
  Movies.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true })
  .then((movie) => res.redirect('/movies'))
}