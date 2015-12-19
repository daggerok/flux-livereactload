const React = require('react'),
Reflux = require('reflux'),

Timer = Reflux.createStore({
  data: { counter: 0 },

  init() {
    setInterval(() => {
      this.data.counter++
      this.trigger(this.data)
    }, 1000)
  },

  getInitialState() { return this.data }
})

module.exports = Timer