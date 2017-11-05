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

app.get('/recipes', function(req, res) {
  res.render('recipes')
})

app.get('/', function(req, res) {
  queries.getLinks()

    .then(links => {
      console.log(links);
      res.render('index', {
        links: links
      })
    })
})

app.put('/add/:id', function(req, res) {
  const vote = req.body.vote
  const id = Number(req.params.id)
  queries.upVote(id, vote)
    .then(vote => {
      if (vote < 6) {
        res.redirect('/')
      }
    })
})
app.put('/subtract/:id', function(req, res) {
  const vote = req.body.vote
  const id = Number(req.params.id)
  queries.downVote(id, vote)
    .then(vote => {
      if (vote >= 1) {
        res.redirect('/')
      }
    })
})
app.post('/newLink', (req, res) => {
  console.log(req.body);
  queries.addLink(req.body)

    .then(addedLink => {
      res.render('index', {
        description: 'Thanks! Now head back to the recipe page to check out some different ideas',
        addedLink: addedLink
      })
    })
})



app.listen(port, function(req, res) {
  console.log("Listening");
})
