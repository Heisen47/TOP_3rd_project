var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard' , messages:messages });
});

//Get the form
router.get("/new", (req,res,next)=>{
  res.render('form',{title : "Welcome to Form"})
})

//Post on the form
router.post("/new" ,(req,res)=>{  

  //Pushing in the messages array
  messages.push({user: req.body.author , text: req.body.message, added: new Date() })

  // res.end(`message for ${req.body.author} is ${req.body.message}`)

  res.redirect('/');
})

module.exports = router;
