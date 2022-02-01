declare var require: any;
var React = require('react');
import { D2Visualizer } from '../../../lib/src';
import { Fn } from '@iapps/function-analytics';
import './app.scss';

const App = () => {
  Fn.init({
    baseUrl: 'https://play.dhis2.org/2.35.11/api/',
    username: 'admin',
    password: 'district',
  });
  new D2Visualizer()
    .setId('map')
    .setType('MAP')
    .setConfig({
      latitude: -5.66901,
      longitude: 34.8888,
      zoom: 5.8,
      fillColor: '',
    })
    .setSelections([
      {
        dimension: 'dx',
        items: [
          {
            id: 'sdjfoi',
          },
        ],
      },
      {
        dimension: 'pe',
        items: [
          {
            id: '2019',
          },
        ],
      },
      {
        dimension: 'ou',
        items: [
          {
            id: 'uwyriuwe;LEVEL-2',
          },
        ],
      },
    ])
    .draw();
  return <div>Hello</div>;
};

export default App;
