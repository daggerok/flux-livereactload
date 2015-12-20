const Reflux = require('reflux'),

Logger = Reflux.createAction(),

Storage = Reflux.createStore({
  init() {
    this.listenTo(Logger, this.log)
  },

  log(data) {
    this.trigger(data)
  }
})

Storage.listen(data => {
  console.log(data)
})

module.exports = Logger