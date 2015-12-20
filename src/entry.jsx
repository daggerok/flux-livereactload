const React = require('react'),
ReactDOM = require('react-dom'),
Main = require('./components/Main.jsx'),
log = require('./services/Logger.jsx')

log({message: 'reflux in action!', component: Main})

ReactDOM.render(<Main className="container panel wrapper"/>, document.getElementById('view'))