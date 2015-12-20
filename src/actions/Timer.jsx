const Reflux = require('reflux'),
// will reset uptime counter on click
Timer = Reflux.createActions([
  'resetCounter',
  'doubleCounter'
])

module.exports = Timer