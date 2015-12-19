const React = require('react'),
Timer = require('./Timer.jsx'),
Table = require('./Table.jsx'),
// using storages inside components (./Timer.jsx / ./Table.jsx) and also inide injected subcomponents (./Table/Body.jsx)
Main = React.createClass({
  render() {
    return (
      <div className="container">
        <Timer />
        <Table />
      </div>
    )
  }
})

module.exports = Main