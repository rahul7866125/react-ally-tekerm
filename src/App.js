import React from 'react';
import './styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Service from './components/Service';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Service />
      </div>
    );
  }
}
