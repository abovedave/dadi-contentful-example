const moment = require('moment')

module.exports.date = (date, format, parseFormat) => {
  return moment(date, parseFormat || null).format(format)
}