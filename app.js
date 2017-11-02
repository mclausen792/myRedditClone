console.log('Hello');
var express = require('express')
var app = express()
var port = 3001
var bodyParser = require('body-parser')
const queries = require('./db/queries');
var methodOverride = require('method-override')



app.set('view engine', 'hbs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())
app.use(methodOverride('_method'))

// app.get('/', function(req, res) {
//   res.render('index')
// })

app.get('/recipes', function(req, res) {
  res.render('recipes')
})

app.get('/', function(req, res) {
  queries.getLinks()
    .then(links => {
      // res.send(links)
      res.render('index', {
        links: links
      })
    })
})

app.put('/:id', function(req, res) {
  const vote = req.body.vote
  const id = Number(req.params.id)
  queries.upVote(id, vote)
    .then(vote => {
      res.render('index')
    })
})
app.put('/:id', function(req, res) {
  const vote = req.body.vote
  const id = NUmber(req.params.id)
  queries.downVote(id, vote)
    .then(vote => {
      res.render('index')
    })
})





app.listen(port, function(req, res) {
  console.log("Listening");
})
