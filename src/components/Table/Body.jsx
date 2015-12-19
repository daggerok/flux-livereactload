const React = require('react'),
Reflux = require('reflux'),
Storage = require('../../storages/Company.jsx'),

Body = React.createClass({
  mixins: [ Reflux.connect(Storage) ],

  render() {
    return (
      <tbody>
        {this.state.company.employees.map((employee, i) => {
          return (
            <tr key={i} className="row">
              <td className="col-lg-1">{employee.id}</td>
              <td className="col-lg-6">{employee.name}</td>
              <td className="col-lg-5">{employee.salary}</td>
            </tr>
          )
        })}
      </tbody>
    )
  }
})

module.exports = Body