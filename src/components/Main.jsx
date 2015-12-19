const React = require('react'),
Reflux = require('reflux'),
rest = require('superagent'),

Store = Reflux.createStore({
  body: { 
    counter: 0,
    people: []
  },

  init() {
    rest('https://github.com/daggerok/flux-livereactload/blob/master/api/people.json', response => {
      this.body.people = response.body
      this.trigger(this.body)
    })
    setInterval(() => {
      this.body.counter++
      this.trigger(this.body)
    }, 1000)
  }, 

  getInitialState() { return this.body }
}),

Main = React.createClass({
  mixins: [Reflux.connect(Store)],
  render() { 
    return  <div className="text-success">
              uptime: {this.state.counter} seconds...
            </div>
  }
})

module.exports = Main