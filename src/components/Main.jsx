const React = require('react'),
Reflux = require('reflux'),
rest = require('superagent'),
// storage
Store = Reflux.createStore({
  data: { 
    counter: 0,
    people: []
  },

  init() {
    rest(
      'https://raw.githubusercontent.com/daggerok/flux-livereactload/master/api/people.json', 
      (err, resp) => {
        //console.log('resp', JSON.parse(resp.text))
        this.data.people = JSON.parse(resp.text)
        this.trigger(this.data)
    })
    setInterval(() => {
      this.data.counter++
      this.trigger(this.data)
    }, 1000)
  }, 

  getInitialState() { return this.data }
}),
// using storage by mixins
Main = React.createClass({
  mixins: [Reflux.connect(Store)],
  render() { 
    return (
      <div className="container">
        <div className="text-success panel panel-heading">uptime: {this.state.counter} seconds...</div>
        <table className="table table-hover table-responsive">
        <caption>employees</caption>
        <thead>
          <tr className="row">
            <td className="col-lg-1">id</td>
            <td className="col-lg-6">name</td>
            <td className="col-lg-5">salary</td>
          </tr>
        </thead>
        <tbody>
        {this.state.people.map((person, i) => {
          return (
            <tr key={i} className="row">
              <td className="col-lg-1">{person.id}</td>
              <td className="col-lg-6">{person.name}</td>
              <td className="col-lg-5">{person.salary}</td>
            </tr>
          )
        })}
        </tbody>
        </table>
      </div>
    )
  }
})

module.exports = Main