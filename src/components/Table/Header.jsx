const React = require('react'),

Header = React.createClass({
  render() {
    return (
      <thead>
        <tr className="row">
          <td className="col-lg-1">id</td>
          <td className="col-lg-6">name</td>
          <td className="col-lg-5">salary</td>
        </tr>
      </thead>
    )
  }
})

module.exports = Header