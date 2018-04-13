const marked = require('marked')

module.exports.markdown = chunk => {
  if (!chunk) return
  return marked(chunk)
}