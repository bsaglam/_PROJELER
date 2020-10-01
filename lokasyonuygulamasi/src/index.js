import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import DecideSports from './Components/decideSports';
 

class App extends Component {
  render() {
    return (
      <div>
        <DecideSports />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
); 