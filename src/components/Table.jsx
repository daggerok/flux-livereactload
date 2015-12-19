const React = require('react'),
Reflux = require('reflux'),
Storage = require('../storages/Company.jsx'),
Header = require('./Table/Header.jsx'),
Body = require('./Table/Body.jsx'),

Table = React.createClass({
  mixins: [ Reflux.connect(Storage) ],

  render() {
    return (
      <table className="table table-hover table-responsive">
        <caption><h3>{this.state.company.departament}</h3></caption>
        <Header />
        <Body />
      </table>
    )
  }
})

module.exports = Table