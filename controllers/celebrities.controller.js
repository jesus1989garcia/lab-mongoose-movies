const Celebrities = require('../models/celebrities.model');
//const User = require('../models/movies.model');

module.exports.list = (req, res, next) => {
  Celebrities.find()
    .then((celebrities) => res.render('celebrities/index', { celebrities }));
    console.log("funciona!");
    //create index, hacer next
}

module.exports.create = (req, res, next) => {
  res.render('celebrities/form')
}

module.exports.doCreate = (req, res, next) => {
  // const { name, occupation, catchPhrase } = req.body
  console.log('create')
  const celebrities = new Celebrities(req.body); 


  celebrities.save()
    .then((celebrities) => { res.redirect('/celebrities' )});
}

// module.exports.edit = (req, res, next) => {
//   Promise.all([
//     User.find(),
//     Book.findById(req.params.id)
//   ])
//   .then((results) => {
//     const users = results[0];
//     const book = results[1]

//     res.render('books/form', { book, users })
//   })
// }

// module.exports.doEdit = (req, res, next) => {
//   Book.findById(req.params.id)
//     .then((book) => {
//       book.set(req.body);

//       book.save()
//         .then((book) => { res.redirect('/books' )});
//     })
// }

// module.exports.get = (req, res, next) => {
//   Book.findById(req.params.id)
//     .then(book => {

//       User.findById(book.user)
//         .then((user) => res.render('books/detail', { book, user }))
//     });
// }

// module.exports.delete = (req, res, next) => {
//   Book.findByIdAndDelete(req.params.id)
//     .then(() => res.redirect('/books'));
// }



