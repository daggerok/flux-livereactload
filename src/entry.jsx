const React = require('react'),
ReactDOM = require('react-dom'),
Main = require('./components/Main.jsx'),
log = require('./actions/Logger.jsx')

log('hello, reflux!')

log({
  info: 'bootstrapping components...',
  component: Main
})

ReactDOM.render(<Main className="container panel wrapper"/>, document.getElementById('view'))