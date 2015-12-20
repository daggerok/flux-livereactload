const Reflux = require('reflux'),

Timer = Reflux.createActions([
  'resetCounter', // reset uptime counter on double click
  'doubleCounter' // duble uptime counter on click
])

module.exports = Timer