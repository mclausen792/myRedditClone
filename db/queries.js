const db = require('./connection')


function getLinks() {
  return db('links').select('*')
}

function upVote(id, vote) {
  vote = Number(vote)
  return db('links').where('id', id).update('vote', vote + 1).returning('vote')
}

function downVote(id, vote) {
  vote = Number(vote)
  return db('links').where('id', id).update('vote', vote - 1).returning('vote')
}

function addLink(link) {
  return db('links').insert(link).returning('*')
}
module.exports = {
  getLinks: getLinks,
  upVote: upVote,
  downVote: downVote,
  addLink: addLink
}
