const Reflux = require('reflux'),

Timer = Reflux.createActions([
  'resetCounter', // duble uptime counter on click
  'doubleCounter' // reset uptime counter on double click
])

module.exports = Timer
