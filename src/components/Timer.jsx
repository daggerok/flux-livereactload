const React = require('react'),
Reflux = require('reflux'),
Storage = require('../storages/Timer.jsx'),

Timer = React.createClass({
  mixins: [ Reflux.connect(Storage) ],

  render() {
    return <div className="text-success panel panel-heading">uptime: {this.state.counter} seconds...</div>
  }
})

module.exports = Timer