const resolveResponse = require('contentful-resolve-response')

const Event = function(req, res, data, callback) {
  data.postsMeta = {
    total: data.posts.total,
    skip: data.posts.skip,
    limit: data.posts.limit
  }
  data.posts = resolveResponse(data.posts)

  // Fin
  callback(null)
}

module.exports = function(req, res, data, callback) {
  return new Event(req, res, data, callback)
}
