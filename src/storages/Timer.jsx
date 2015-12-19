const Reflux = require('reflux'),
Actions = require('../actions/Timer.jsx'),

Timer = Reflux.createStore({
  data: { counter: 0 },

  init() {
    setInterval(() => {
      this.data.counter++
      this.trigger(this.data)
    }, 1000)
  },

  getInitialState() { return this.data },

  listenables: [ Actions ],

  onResetCounter() {
    this.data.counter = 0
    this.trigger(this.data)
  }
})

module.exports = Timer