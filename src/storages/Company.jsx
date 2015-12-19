const React = require('react'),
Reflux = require('reflux'),
Rest = require('superagent'),

Company = Reflux.createStore({
  data: {
    company: {
      departament: '',
      employees: [ { id: 0, name: '', salary: '' } ]
    }
  },

  init() {
    Rest(
      'https://raw.githubusercontent.com/daggerok/flux-livereactload/master/api/company.json', 
      (err, resp) => {
        this.data.company = JSON.parse(resp.text)
        this.trigger(this.data)
    })
  },
  
  getInitialState() { return this.data }
})

module.exports = Company