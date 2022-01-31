declare var require: any;
var React = require('react');
import { D2Visualizer } from '../../../lib/src';
import './app.scss';

const App = () => {
  new D2Visualizer().setId('vis').draw();
  return '<div>Hello</div>';
};

export default App;
