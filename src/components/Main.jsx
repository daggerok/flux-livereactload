const React = require('react'),
Reflux = require('reflux'),
Storage = require('../storages/Storage.jsx'),
Counter = require('../storages/Counter.jsx'),
// using storage by mixins
Main = React.createClass({
  mixins: [
    Reflux.connect(Counter),
    Reflux.connect(Storage)
  ],

  render() {
    return (
      <div className="container">
        <div className="text-success panel panel-heading">uptime: {this.state.counter} seconds...</div>
        <table className="table table-hover table-responsive">
        <caption>{this.state.company.departament}</caption>
        <thead>
          <tr className="row">
            <td className="col-lg-1">id</td>
            <td className="col-lg-6">name</td>
            <td className="col-lg-5">salary</td>
          </tr>
        </thead>
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
        </table>
      </div>
    )
  }
})

module.exports = Main