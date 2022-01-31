import React from 'react';
import { D2Visualizer } from '../../../lib/src';
import './app.scss';

const App = () => {
  (new D2Visualizer()).setId("vis").draw();
  return (
    <div className="full-screen">
      <div>
        <h1>React Page </h1>
        <br />
        <a
          className="button-line"
          href="https://github.com/deityhub"
          target="_blank"
        >
          Know more now
        </a>
      </div>
    </div>
  );
};

export default App;
