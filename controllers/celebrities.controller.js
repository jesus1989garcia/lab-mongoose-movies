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
  // const { name, occupation, catchPhrase } = req.body   it's the same as below
  console.log('create')
  const celebrities = new Celebrities(req.body); 


  celebrities.save()
    .then((celebrities) => { res.redirect('/celebrities' )});
}
module.exports.edit = (req, res, next) => {
  Celebrities.findById(req.params.id)
  .then((celebrity) => res.render('celebrities/edit', {celebrity}));
}

module.exports.doEdit = (req, res, next) => {
  console.log("works")
  Celebrities.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true })
  
    // Celebrities.findById(req.params.id)
    // .then((celebrity) => {
    //   const { name, occupation, catchPhrase } = req.body;
    //   // //celebrity.set(req.body);
      // //console.log(req.body)
      // celebrity.findByIdAndUpdate
      //       celebrity.save()
       .then((celebrity) => {
         console.log(celebrity)
         res.redirect('/celebrities')
        });
    // })
  }
 


module.exports.get = (req, res, next) => {
  Celebrities.findById(req.params.id)
  
  .then((celebrity)=> res.render('celebrities/show', {celebrity}))  // beware of the "/" when starting a view path
} 

module.exports.delete = (req, res, next) => {
  Celebrities.findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/celebrities'));
}



