reflux = require('reflux')

action = reflux.createAction()

store = reflux.createStore({
  init() {
    this.listenTo(action, this.onAction)
  },

  onActioon(data) {
    this.trigger(data)
  }
})

store.listen(function(data) {
  console.log(data)
})

action({message: 'message from logger'})

module.exports = action