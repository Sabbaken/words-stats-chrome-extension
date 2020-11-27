/*global chrome*/

import React, { Component } from 'react';
import './styles/main.scss'
import Card from './components/card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card title={"Общая информация"}>
          Whatever
        </Card>

        <Card title={"График"}>
          Whatever 2
        </Card>
      </div>
    );
  }
}

export default App;
