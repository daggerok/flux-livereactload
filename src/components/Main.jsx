const React = require('react'),
Reflux = require('reflux'),

Store = Reflux.createStore({
  body: { message: 0 },

  init() {
    setInterval(() => {
      this.body.message++
      this.trigger(this.body)
    }, 500)
  }, 

  getInitialState() { return this.body }
}),

Main = React.createClass({
  mixins: [Reflux.connect(Store)],
  render() { return <div>{this.state.message}</div> }
})

module.exports = Main